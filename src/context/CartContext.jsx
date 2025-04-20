import React, { createContext, useContext, useReducer, useEffect } from 'react';

// 创建购物车上下文
const CartContext = createContext();

// 初始状态
const initialState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

// 购物车操作类型
const actionTypes = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  UPDATE_QUANTITY: 'UPDATE_QUANTITY',
  CLEAR_CART: 'CLEAR_CART',
};

// 购物车reducer函数
const cartReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART: {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingItemIndex > -1) {
        // 如果商品已存在，更新数量
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1,
        };

        return {
          ...state,
          items: updatedItems,
          totalItems: state.totalItems + 1,
          totalPrice: state.totalPrice + action.payload.price,
        };
      } else {
        // 如果是新商品，添加到购物车
        const newItem = { ...action.payload, quantity: 1 };
        return {
          ...state,
          items: [...state.items, newItem],
          totalItems: state.totalItems + 1,
          totalPrice: state.totalPrice + action.payload.price,
        };
      }
    }

    case actionTypes.REMOVE_FROM_CART: {
      const existingItem = state.items.find((item) => item.id === action.payload);
      
      if (!existingItem) return state;

      const filteredItems = state.items.filter((item) => item.id !== action.payload);
      
      return {
        ...state,
        items: filteredItems,
        totalItems: state.totalItems - existingItem.quantity,
        totalPrice: state.totalPrice - (existingItem.price * existingItem.quantity),
      };
    }

    case actionTypes.UPDATE_QUANTITY: {
      const { id, quantity } = action.payload;
      const existingItemIndex = state.items.findIndex((item) => item.id === id);
      
      if (existingItemIndex === -1) return state;
      
      const existingItem = state.items[existingItemIndex];
      const quantityDiff = quantity - existingItem.quantity;
      
      // 如果数量为0，移除商品
      if (quantity <= 0) {
        return cartReducer(state, { type: actionTypes.REMOVE_FROM_CART, payload: id });
      }
      
      const updatedItems = [...state.items];
      updatedItems[existingItemIndex] = {
        ...existingItem,
        quantity,
      };
      
      return {
        ...state,
        items: updatedItems,
        totalItems: state.totalItems + quantityDiff,
        totalPrice: state.totalPrice + (quantityDiff * existingItem.price),
      };
    }

    case actionTypes.CLEAR_CART:
      return initialState;

    default:
      return state;
  }
};

// 购物车提供者组件
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // 从本地存储加载购物车
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        Object.keys(actionTypes).forEach(key => {
          dispatch({ type: actionTypes[key], payload: parsedCart[key.toLowerCase()] });
        });
      } catch (error) {
        console.error('Error loading cart from localStorage:', error);
      }
    }
  }, []);

  // 保存购物车到本地存储
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state));
  }, [state]);

  // 添加商品到购物车
  const addToCart = (product) => {
    dispatch({ type: actionTypes.ADD_TO_CART, payload: product });
  };

  // 从购物车移除商品
  const removeFromCart = (productId) => {
    dispatch({ type: actionTypes.REMOVE_FROM_CART, payload: productId });
  };

  // 更新购物车中商品数量
  const updateQuantity = (productId, quantity) => {
    dispatch({
      type: actionTypes.UPDATE_QUANTITY,
      payload: { id: productId, quantity },
    });
  };

  // 清空购物车
  const clearCart = () => {
    dispatch({ type: actionTypes.CLEAR_CART });
  };

  return (
    <CartContext.Provider
      value={{
        cart: state,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// 自定义钩子，方便使用购物车上下文
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};