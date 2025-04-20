import React from 'react';

    function Footer() {
      const currentYear = new Date().getFullYear();
      return (
        <footer>
          {/* Tambahkan link bantuan atau FAQ di sini jika perlu */}
          {/* <p><a href="/faq">Bantuan & FAQ</a></p> */}
          <p>&copy; {currentYear} Jasa Belanja Pasar Tradisional. Semua hak dilindungi.</p>
        </footer>
      );
    }

    export default Footer;