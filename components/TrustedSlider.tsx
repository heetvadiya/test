"use client";
import { Box } from "@mantine/core";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const imgUrls = [
  "https://cdn-site-assets.veed.io/cdn-cgi/image/width=640,quality=75,format=auto/meta_5d91e3dc70/meta_5d91e3dc70.png",
  "https://cdn-site-assets.veed.io/cdn-cgi/image/width=640,quality=75,format=auto/ubs_6bebab925b/ubs_6bebab925b.png",
  "https://cdn-site-assets.veed.io/cdn-cgi/image/width=640,quality=75,format=auto/nbcuniversal_020f502b6a/nbcuniversal_020f502b6a.png",
  "https://cdn-site-assets.veed.io/cdn-cgi/image/width=640,quality=75,format=auto/bbc_222468ab60/bbc_222468ab60.png",
  "https://cdn-site-assets.veed.io/cdn-cgi/image/width=640,quality=75,format=auto/target_652c903f65/target_652c903f65.png",
  "https://cdn-site-assets.veed.io/cdn-cgi/image/width=640,quality=75,format=auto/netflix_53cebd27b1/netflix_53cebd27b1.png",
  "https://cdn-site-assets.veed.io/cdn-cgi/image/width=640,quality=75,format=auto/amazon_6eb4586569/amazon_6eb4586569.png",
  "https://cdn-site-assets.veed.io/cdn-cgi/image/width=640,quality=75,format=auto/p_and_g_1_2f9d9b5986/p_and_g_1_2f9d9b5986.png",
  "https://cdn-site-assets.veed.io/cdn-cgi/image/width=640,quality=75,format=auto/merck_a56f190e3e/merck_a56f190e3e.png",
  "https://cdn-site-assets.veed.io/cdn-cgi/image/width=640,quality=75,format=auto/google_09644c00ae/google_09644c00ae.png",
  "https://cdn-site-assets.veed.io/cdn-cgi/image/width=640,quality=75,format=auto/meta_5d91e3dc70/meta_5d91e3dc70.png",
  "https://cdn-site-assets.veed.io/cdn-cgi/image/width=640,quality=75,format=auto/ubs_6bebab925b/ubs_6bebab925b.png",
  "https://cdn-site-assets.veed.io/cdn-cgi/image/width=640,quality=75,format=auto/bbc_222468ab60/bbc_222468ab60.png",
  "https://cdn-site-assets.veed.io/cdn-cgi/image/width=640,quality=75,format=auto/target_652c903f65/target_652c903f65.png",
  "https://cdn-site-assets.veed.io/cdn-cgi/image/width=640,quality=75,format=auto/netflix_53cebd27b1/netflix_53cebd27b1.png",
  "https://cdn-site-assets.veed.io/cdn-cgi/image/width=640,quality=75,format=auto/amazon_6eb4586569/amazon_6eb4586569.png",
  "https://cdn-site-assets.veed.io/cdn-cgi/image/width=640,quality=75,format=auto/p_and_g_1_2f9d9b5986/p_and_g_1_2f9d9b5986.png",
  "https://cdn-site-assets.veed.io/cdn-cgi/image/width=640,quality=75,format=auto/merck_a56f190e3e/merck_a56f190e3e.png",
  "https://cdn-site-assets.veed.io/cdn-cgi/image/width=640,quality=75,format=auto/google_09644c00ae/google_09644c00ae.png",
];
const TrustedSlider = () => {
  return (
    <Marquee>
      {imgUrls.map((imageUrl, index) => (
        <Box key={index}>
          <img
            src={imageUrl}
            alt={`Image ${index + 1}`}
            width={200}
            height={100}
          />
        </Box>
      ))}
    </Marquee>
  );
};

export default TrustedSlider;
