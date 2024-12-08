'use client';

import { useState, useRef } from 'react';
import Navbar from '@/components/ui/navbar';
import SliderOne from '@/components/slider/slider';
import { Spotlight } from '@/components/spotlight';
import Image from 'next/image';
import Link from 'next/link';

import WebsiteDesign from './gallery-show';
import GraphicDesign from './graphic-design';
import Brands from './brands';
import Services from './services';
import FAQS from './faq';
import { InfiniteMovingCardsDemo } from './snippets/infinite-moving-card-snippet';
import AboutUs from './aboutus';

export default function Home() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  const websiteDesignRef = useRef<HTMLDivElement>(null);
  const graphicDesignRef = useRef<HTMLDivElement>(null);
  const shopifyStoresRef = useRef<HTMLDivElement>(null);
  const brandsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  // A better scrollTo function that considers dynamic positions
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      const targetPosition = ref.current.getBoundingClientRect().top + window.scrollY;
      
      window.scrollTo({
        top: targetPosition, // No offset for the navbar
        behavior: 'smooth',
      });
    }
  };
  

  const scrollToWebsiteDesign = () => scrollToSection(websiteDesignRef);
  const scrollToGraphicDesign = () => scrollToSection(graphicDesignRef);
  const scrollToShopifyStores = () => scrollToSection(shopifyStoresRef);
  const scrollToBrands = () => scrollToSection(brandsRef);
  const scrollToServices = () => scrollToSection(servicesRef);

  return (
    <div className="w-full md:items-center md:justify-center bg-[#f5f3f0]/40 antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Navbar
        scrollToWebsiteDesign={scrollToWebsiteDesign}
        scrollToGraphicDesign={scrollToGraphicDesign}
        scrollToShopifyStores={scrollToShopifyStores}
        scrollToBrands={scrollToBrands}
        scrollToServices={scrollToServices}
      />

      <Spotlight className="hidden md:flex md:-top-80 left-80" fill="black" />
      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
        <div className="text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text font-semibold text-black">
          Build Your Dream <br /> Home With <span className="text-emerald-700">Greenhill Studios</span>
        </div>
        <p className="mt-4 text-lg font-normal text-black max-w-lg text-center mx-auto px-4">
          Custom tailored solutions for your business. We are a team of creatives who are excited to help you grow your business.
        </p>

        <Link
          href="tel:+1234567890 "
          className="cursor-pointer flex items-center justify-center border rounded-full w-48 p-2 mx-auto my-6 text-black"
        >
          Call
        </Link>

        <div className="w-full pt-20">
          <SliderOne />
        </div>
        <div ref={websiteDesignRef}>
          <WebsiteDesign />
        </div>
        <div ref={graphicDesignRef}>
          <GraphicDesign />
        </div>
        <div ref={shopifyStoresRef}>
          <AboutUs />
        </div>
        <div ref={brandsRef}>
          <Brands />
        </div>
        <div ref={servicesRef}>
          <Services />
        </div>
        <InfiniteMovingCardsDemo />
        <FAQS />
      </div>
    </div>
  );
}
