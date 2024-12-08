"use client";

import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import Image from "next/image";

const AboutUs = () => {
  // Example items to pass to AnimatedTooltip
  const items = [
    {
      id: 1,
      name: "Jane Doe",
      designation: "Designer",
      image: "/example-image-1.png", // Replace with actual image paths
    },
    {
      id: 2,
      name: "John Smith",
      designation: "Developer",
      image: "/example-image-2.png",
    },
    {
      id: 3,
      name: "Alice Johnson",
      designation: "Manager",
      image: "/example-image-3.png",
    },
    {
      id: 4,
      name: "Fahim Rahman",
      designation: "Marketer",
      image: "/example-image-4.png",
    },
  ];

  return (
    <section className=" md:py-10 bg-[#eab974]/30 w-full rounded-3xl flex items-center justify-center">
      <div className="p-4 mx-auto relative z-10 w-full">
         {/* Centered content */}
         {/* Title */}
         
        <div className="text-4xl pb-5 md:text-7xl text-center
         bg-clip-text text-black font-semibold  mt-20">
          About Us
        </div>

        <div className="items-center md:flex justify-center md:mx-auto md:space-x-10">
            {/* About Text Part */}
            <div>

            </div>
            {/* About Text image */}
            <div>

            </div>
         </div>
       
        {/* Animated ToolTip */}
        <div className="flex mt-10 items-center justify-center gap-4">
          <AnimatedTooltip items={items}  />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
