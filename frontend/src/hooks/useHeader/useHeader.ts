import { useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const useHeader = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const controls = useAnimation();

  const handleScroll = () => {
    if (isHome) {
      setIsScrolled(window.scrollY > 300);
    }
  };

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isHome) {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      setIsScrolled(true);
    }
  }, [isHome]);

  useEffect(() => {
    controls.start({
      backgroundColor: isScrolled ? "#FFFFFF" : "rgba(255,255,255,0.2)",
      borderBottom: isScrolled ? "none" : "1px solid #00bfa62b",
      backdropFilter: isScrolled ? "none" : "blur(6px)",
      boxShadow: isScrolled ? "0px 4px 20px rgba(0,0,0,0.08)" : "none",
      transition: { duration: 0.1, ease: "easeInOut" },
    });
  }, [isScrolled, controls]);

  return {
    controls,
    handleClick,
  };
};
