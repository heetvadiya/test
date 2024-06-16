"use client";
import { Box, Grid } from "@mantine/core";
import React from "react";
import PricingCard from "./PricingCard";
import { BsBorderWidth } from "react-icons/bs";

const basic = [
  "Remove watermark",
  "Subtitles 12 hr/yr",
  "No Upload Size Limit",
  "Full HD 1080p Exports",
];
const pro = [
  "Subtitles 24 hr/yr",
  "Clean Audio",
  "Eye Contact Correction",
  "Stock Audio & Video Library",
  "Download Subtitles",
];
const business = [
  "AI Avatars 4 hr/yr",
  "Subtitles 134 hr/yr",
  "Translate to 50+ Languages",
  "Text to Speech 60 hr/yr",
  "Customizable Video Templates",
  "4k Export Quality",
];
const enterprise = [
  "Personalized AI avatars",
  "Brand assets & templates",
  "Multiple workspaces",
  "Custom usage limits",
  "Creator training",
  "Account manager",
];
const buttonStyle = {
  variant: "gradient",
  gradient: {
    from: "rgba(104, 77, 235, 1)",
    to: "rgba(181, 180, 217, 0.74)",
    deg: 90,
  },
};

const Pricings = () => {
  return (
    <Box style={{ padding: "10px 40px" }}>
      <Grid>
        <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
          <PricingCard
            title={"Basic"}
            plan={"Ideal Starter Plan"}
            cost={"₹290.67"}
            time={"Per user / month, billed yearly"}
            button={"Go Basic"}
            saving={"36%"}
            features={basic}
            trial={""}
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
          <PricingCard
            title={"Pro"}
            plan={"For pro video creation"}
            cost={"₹599"}
            time={"Per user / month, billed yearly"}
            button={"Go Pro"}
            saving={"21%"}
            features={pro}
            trial={""}
            buttonStyle={buttonStyle}
            borderc={"blue"}
            recommend={true}
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
          <PricingCard
            title={"Business"}
            plan={"For up to 5 people"}
            cost={"₹1500"}
            time={"Per user / month, billed yearly"}
            button={"Go Business"}
            saving={"14%"}
            features={business}
            trial={"or request a trial"}
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
          <PricingCard
            title={"Enterprise"}
            plan={"Scale video across your team"}
            cost={"Let's Talk"}
            time={"Custom Pricing"}
            button={"Book a Demo"}
            saving={""}
            features={enterprise}
            trial={"or request a trial"}
          />
        </Grid.Col>
      </Grid>
    </Box>
  );
};

export default Pricings;
