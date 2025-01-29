import { motion } from "framer-motion";
import React from "react";
import styles from "./InfiniteSlider.module.css"

const brands = [
  "https://aromas.asia/wp-content/uploads/2022/04/cropped-Aromas-Logo-01-230x77.png",
  "https://cafemonique.com/cdn/shop/files/Untitled-5-01_180x.png?v=1619964083",
  "https://sagresfr.com/wp-content/uploads/2023/12/SARGRES-LOGO-HD.png",
  "https://cdn-icons-png.freepik.com/256/16264/16264633.png?uid=R174771258&ga=GA1.1.1379221248.1736628332&semt=ais_hybrid",
  "https://ehpindia.co.in/SKINOVA%20logo.jpg",
//   "/klarna.png",
];

const InfiniteSlider: React.FC = () => {
  return (
    <div className={styles.sliderContainer}>
      <motion.div
        className={styles.slider}
        animate={{ x: ["0%", "100%"] }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      >
        {[...brands, ...brands].map((brand, index) => (
          <img key={index} src={brand} alt="Brand logo" className={styles.logo} />
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteSlider;
