// src/components/Navbar.tsx
import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { Menu, X, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  const handleScroll = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      className={`fixed w-screen z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="font-bold max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Left Section: Logo */}
          <div className="flex items-center">
            <img
              src="src/assets/logo 3.png"
              className={`h-20 w-20 pt-2 ${
                isScrolled ? "text-primary" : "text-white"
              }`}
              alt="GrowwInfinity Logo"
            />
            <span
              className={`ml-[-18px] text-2xl font-bold ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              GrowwInfinity
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 cursor-pointer">
            {["Home", "About", "Services", "Pricing", "Contact"].map((item) => (
              <a
                key={item}
                onClick={() => handleScroll(`#${item.toLowerCase()}`)}
                className={`${
                  isScrolled
                    ? "text-foreground/80 hover:text-foreground"
                    : "text-white hover:text-white/80"
                }`}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              className="p-2"
              onClick={() => setIsOpen(!isOpen)}
              initial={{ rotate: 0 }}
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              {isOpen ? (
                <X
                  className={`h-6 w-6 ${
                    isScrolled ? "text-foreground" : "text-white"
                  }`}
                />
              ) : (
                <Menu
                  className={`h-6 w-6 ${
                    isScrolled ? "text-foreground" : "text-white"
                  }`}
                />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu Items */}
        {isOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-md rounded-lg mt-2">
              {["Home", "About", "Services", "Pricing", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    onClick={() => handleScroll(`#${item.toLowerCase()}`)}
                    className="block px-3 py-2 rounded-md text-base font-medium hover:bg-accent"
                  >
                    {item}
                  </a>
                )
              )}
              <Button className="w-full mt-4">
                <Rocket className="mr-2 h-4 w-4" /> Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
