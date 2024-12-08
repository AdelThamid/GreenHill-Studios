"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { AlignJustify, X } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import DropDownMenu from "../drop-down-menu";import { useEffect } from 'react';




interface NavbarProps {
  scrollToWebsiteDesign: () => void;
  scrollToGraphicDesign: () => void;
  scrollToShopifyStores: () => void;
  scrollToBrands: () => void;
  scrollToServices: () => void; // Define scrollToServices function
}

const Navbar = ({
  scrollToWebsiteDesign,
  scrollToGraphicDesign,
  scrollToShopifyStores,
  scrollToBrands,
  scrollToServices, // Add scrollToServices to props
}: NavbarProps) => {
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);

  const toggleDropDown = () => {
    setIsDropDownVisible(!isDropDownVisible);
  };

  const closeDropDown = () => {
    setIsDropDownVisible(false);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="p-6 md:p-2 flex items-center justify-between z-50">
        <div>
          <Link className="cursor-pointer" href="/">
            <Image
              priority
              src="/logo/interior-design.png"
              alt="Logo"
              width={100}
              height={100}
              className="w-40 h-40 md:w-40 md:h-10"
            />
          </Link>
        </div>
        <div
          className="cursor-pointer hidden 
            md:flex space-x-10 items-center
             text-gray-900 text-center 
             bg-clip-text   font-semibold text-lg	
             "
        >
          {/* Takes to Galery */}
          <div  className="hover:text-emerald-700">
            <Link href="/">Home</Link> 
          </div>
          <div onClick={scrollToWebsiteDesign} className="hover:text-emerald-700">
            Gallery 
          </div>
          {/* Takes to Interior Design */}
          <div onClick={scrollToGraphicDesign} className="hover:text-emerald-700">
             Design
          </div>
          {/* Takes to About US */}
          <div onClick={scrollToShopifyStores} className="hover:text-emerald-700">
            Portfolio
          </div>
          <div onClick={scrollToShopifyStores} className="hover:text-emerald-700">
            About
          </div>
          <div onClick={scrollToBrands} className="hover:text-emerald-700">
            Brands
          </div>
          <div onClick={scrollToServices} className="hover:text-emerald-700">
            Services
          </div>
        </div>

        <div className="flex md:hidden">
          {isDropDownVisible ? (
            // display an x icon when the drop is visible
            <div
              onClick={toggleDropDown}
              className="w-8 h-8 text-slate-300 cursor-pointer"
            >
              <X />
              <DropDownMenu
                onClose={closeDropDown}
                scrollToServices={scrollToServices} // Pass scrollToServices
              />
            </div>
          ) : (
            <AlignJustify
              onClick={toggleDropDown}
              className="w-8 h-8 text-slate-300 cursor-pointer"
            />
          )}
        </div>

        <div className="hidden md:flex">
          <Link
            href="/contact"
            className="
            inline-flex h-12  items-center justify-center 
            rounded-md border  text-white
            bg-[length:200%_100%] px-6 font-normal   bg-emerald-700	
            "
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;