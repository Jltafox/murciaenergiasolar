import { useEffect } from "react";
import { useLocation } from "wouter";

// Base domain from the original index.html
const BASE_URL = "https://murciasolar-hankxonl.manus.space";

export function useCanonical() {
  const [location] = useLocation();

  useEffect(() => {
    // Construct the canonical URL
    // Remove trailing slash unless it's root, to be consistent (optional, but good practice)
    // Here we just append location.
    const canonicalUrl = `${BASE_URL}${location}`;

    // Find existing tag or create new one
    let link = document.querySelector("link[rel='canonical']");

    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }

    link.setAttribute("href", canonicalUrl);
  }, [location]);
}
