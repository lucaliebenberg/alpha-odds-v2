import React from "react";
import { BsArrowRight } from "react-icons/bs";
const Footer = () => {
  const footerList = [
    "Cryptocash ICO",
    "How It Works",
    "Tokens",
    "FAQ",
    "Contact",
  ];
  return (
    <footer>
      <div
        style={{ backgroundColor: "#EDE9E3" }}
        data-z-index="1"
        data-parallax="scroll"
        data-image-src="assets/images/footer_bg.png"
      >
        {/* empty footer content for minimalism... */}
      </div>
    </footer>
  );
};

export default Footer;
