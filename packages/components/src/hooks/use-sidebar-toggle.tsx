"use client";

import { useCallback, useEffect, useState } from "react";

const LOCAL_STORAGE_KEY = "sidebar-visibility";

export function useSidebarToggle() {
  const [isVisible, setIsVisible] = useState(true);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);

    try {
      const storedValue = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (storedValue !== null) {
        setIsVisible(JSON.parse(storedValue));
      } else {
        // --- Special logic for "default to closed on first mobile visit" ---
        // If no value is in localStorage, it's effectively the first visit (or cleared storage).
        const mediaQuery = window.matchMedia("(min-width: 768px)"); // md breakpoint
        if (!mediaQuery.matches) {
          // It's the first visit on a mobile device.
          // Set sidebar to closed and store it.
          setIsVisible(false);
          localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(false));
        }
        // For desktop on first visit, it remains `true` (the initial state).
        // We don't need to explicitly set it in localStorage here, as the next toggle will.
      }
    } catch (error) {
      console.error(
        "Error reading sidebar visibility from localStorage",
        error,
      );
      // Fallback to default if localStorage is corrupted or inaccessible
      // The initial state `true` will be used, or the mobile override if applicable.
      const mediaQuery = window.matchMedia("(min-width: 768px)");
      if (
        !mediaQuery.matches &&
        localStorage.getItem(LOCAL_STORAGE_KEY) === null
      ) {
        setIsVisible(false);
      }
    }
  }, []); // Empty dependency array ensures this runs once on mount

  const toggleSidebar = useCallback(() => {
    setIsVisible((prevIsVisible) => {
      const newIsVisible = !prevIsVisible;
      try {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newIsVisible));
      } catch (error) {
        console.error("Error saving sidebar visibility to localStorage", error);
      }
      return newIsVisible;
    });
  }, []);

  useEffect(() => {
    // Keyboard shortcut listener
    function handleKeyDown(event: KeyboardEvent) {
      if (event.metaKey && event.shiftKey && event.key === ".") {
        event.preventDefault();
        toggleSidebar();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [toggleSidebar]);

  // During SSR or before hydration, return the server default (true).
  // Once hydrated, return the actual client-side state.
  return {
    isVisible: isHydrated ? isVisible : true,
    toggleSidebar,
  };
}
