"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
// import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="pb-40 rounded-md flex flex-col antialiased my-4 text-black items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards 
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Fantastic job by the Kenzaix team, took care of all the production and post production work in a short amount of time that helped me grow again.",
    name: "Yamin Khan",
    title: "Stand-up comedian and content creator",
  },
  {
    quote:
      "Adel's stream transitions and design packages were simply outstanding! The transitions were smooth, professional, and perfectly matched my brand's aesthetics. The entire package made my stream look top-tier, and I've received numerous compliments from viewers. I highly recommend Adel for any streamer looking to elevate their visual game!",
    name: "Shafiee Rahman",
    title: "CEO, Red Viperz Esports",
  },
  {
    quote: "My guy Azraf and his team are insane, the high quality edits helped my channels get good CPM, especially the new faceless channel",
    name: "Nathan Dimaggio",
    title: "Content Creator",
  },
  {
    quote:
      "Exceptional Work, great team",
    name: "Finn Mason",
    title: "CEO of Hothugger E-commerce store",
  },
  {
    quote:
      "The team has showed good efforts since the start of my podcast and took care of all the work with perfection. Special thanks to Azraf for assisting me with this podcast facebook page and helping The Professionals grow",
    name: "Fahim Muhammad Nael",
    title: "Founder of The Professionals Podcast",
  },
];