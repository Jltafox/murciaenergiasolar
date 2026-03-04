import { useEffect } from "react";
import { useLocation } from "wouter";

const BASE_URL = "https://murciaenergiasolar.es";

export function useCanonical() {
  const [location] = useLocation();

  useEffect(() => {
    // Determine the full canonical URL for the current path
    const canonicalUrl = `${BASE_URL}${location === "/" ? "" : location}`;

    // Find the existing canonical tag
    let canonicalLink = document.querySelector('link[rel="canonical"]');

    if (canonicalLink) {
      // Update existing tag
      canonicalLink.setAttribute("href", canonicalUrl);
    } else {
      // Create new tag if it doesn't exist
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      canonicalLink.setAttribute("href", canonicalUrl);
      document.head.appendChild(canonicalLink);
    }
  }, [location]);
}
