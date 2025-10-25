import { Box } from "@mui/material";
import React from "react";
import Divider from "../../components/UI/Divider";
import HeroSection from "../../components/HeroSection";
import AboutSection from "../../components/AboutSection";
import TargetAudienceSection from "../../components/TargetAudienceSection";
import BenefitsSection from "../../components/BenefitsSection";
import ServicesSection from "../../components/ServicesSection";
import ContactSection from "../../components/ContactsSection";
import PossibilitiesSection from "../../components/PossibilitiesSection";
import StartSection from "../../components/StartSection";

function LandingPage() {
  return (
    <Box>
      <HeroSection />
      <AboutSection />
      <Divider />
      <TargetAudienceSection />
      <Divider />
      <BenefitsSection />
      <ServicesSection />
      <Divider />
      <PossibilitiesSection />
      <Divider />
      <StartSection />
      <Divider />
      <ContactSection />
    </Box>
  );
}

export default LandingPage;
