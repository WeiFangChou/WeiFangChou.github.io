"use client";

import { useEffect, useState } from "react";
import { Button } from "@heroui/react";
import { ChevronUp } from "lucide-react";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button
      isIconOnly
      color="primary"
      variant="shadow"
      className={`fixed bottom-8 right-8 z-50 w-12 h-12 min-w-unit-12 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      style={{ position: 'fixed', bottom: '2rem', right: '2rem' }}
      onPress={scrollToTop}
      aria-label="Scroll to top"
    >
      <ChevronUp size={24} />
    </Button>
  );
};
