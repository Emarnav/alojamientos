import React from "react";
import HeroSection from "./(nondashboard)/home/HeroSection";
import FeaturesSection from "./(nondashboard)/home/FeaturesSection";
import DiscoverSection from "./(nondashboard)/home/DiscoverSection";
import CallToActionSection from "./(nondashboard)/home/CallToActionSection";
import FooterSection from "./(nondashboard)/home/FooterSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Encuentra tu alojamiento universitario | UCH-CEU",
  description: "Encuentra el alojamiento perfecto para tu vida universitaria.",
};

const Landing = () => {
  return <h1 style={{ color: "red" }}>Funciona la página</h1>;
};

export default Landing;
