import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { Menu, X, Rocket, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom"; 
import logo from "../../public/main_logo.png";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); 
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
          : "bg-[#026bbcc5]"
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
              src={logo}
              className={`h-auto w-[90px] pt-4 ${
                isScrolled ? "text-primary" : "text-white"
              }`}
              alt="GrowwInfinity Logo"
            />
            <Link to="/" className="text-white font-bold hover:text-white/80 cursor-pointer">
            <span
              className={`ml-[-25px] text-[21px] font-bold ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              
              GrowwInfinity
            </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden font-semibold md:flex items-center space-x-8 cursor-pointer">
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

            {/* Dropdown for "Our Mission" and "Our Vision" */}
            <div
              className="relative group"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <Link
                to="#"
                className={`flex items-center space-x-1 ${
                  isScrolled
                    ? "text-foreground/80 hover:text-foreground"
                    : "text-white hover:text-white/80"
                }`}
              >
                Know more
                <ChevronDown className="h-4 w-4" />
              </Link>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 bg-background/95 shadow-md rounded-md py-2 w-48 group-hover:block transition-all delay-400">
                  <Link
                    to="/our-mission"
                    className="block px-4 py-2 text-sm text-foreground hover:bg-accent"
                  >
                    Our Mission
                  </Link>
                  <Link
                    to="/our-vision"
                    className="block px-4 py-2 text-sm text-foreground hover:bg-accent"
                  >
                    Our Vision
                  </Link>
                </div>
              )}
            </div>
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
              {/* Mobile Dropdown Links */}
              <div className="border-t border-gray-200 mt-2 pt-2">
                <Link
                  to="/our-mission"
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-accent"
                >
                  Our Mission
                </Link>
                <Link
                  to="/our-vision"
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-accent"
                >
                  Our Vision
                </Link>
              </div>
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
