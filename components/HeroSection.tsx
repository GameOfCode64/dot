"use client";

import { motion } from "framer-motion";

const HeroSection = () => {
  const scrollToShop = () => {
    const shopSection = document.getElementById("shop");
    if (shopSection) {
      shopSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full h-[80dvh] flex flex-col items-center justify-center bg-gradient-to-br from-[#e0e3eb] to-[#f0f1f5] px-6 py-8 rounded-md text-center">
      {/* Animated Title */}
      <motion.h1
        className="text-5xl font-extrabold text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        whileHover={{ scale: 1.05 }}
      >
        Quickie
      </motion.h1>

      {/* Animated Description */}
      <motion.p
        className="max-w-2xl text-md mt-6 text-gray-600 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Quickie is a fast and seamless shopping experience within the Qubit
        platform, designed to make online shopping effortless and enjoyable.
        With a wide range of products across various categories, Quickie ensures
        that users can find everything they need in one place.
      </motion.p>

      {/* Animated Button */}
      <motion.button
        onClick={scrollToShop}
        className="mt-6 px-6 py-2 cursor-pointer bg-blue-600 text-white font-semibold text-lg rounded-full shadow-md hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Shop Now
      </motion.button>
    </div>
  );
};

export default HeroSection;
