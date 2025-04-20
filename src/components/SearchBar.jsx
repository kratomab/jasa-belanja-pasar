import React from 'react';
    import { Search } from 'lucide-react';

    function SearchBar() {
      const handleSearch = (event) => {
        event.preventDefault();
        // Logika pencarian akan ditambahkan di sini
        console.log("Melakukan pencarian untuk:", event.target.elements.search.value);
      };

      return (
        <form onSubmit={handleSearch} className="search-bar-container">
          <Search size={20} color="#aaa" /> {/* Ikon di dalam search bar */}
          <input
            type="text"
            name="search"
            placeholder="Cari produk di pasar..."
            aria-label="Cari produk"
          />
          {/* Tombol submit bisa ditambahkan jika perlu, atau enter saja */}
          {/* <button type="submit">Cari</button> */}
        </form>
      );
    }

    export default SearchBar;