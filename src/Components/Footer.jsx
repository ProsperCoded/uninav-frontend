import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center pt-3">
      <p>© {currentYear} Classy_DEV. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
