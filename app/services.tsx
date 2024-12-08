'use client'

import { CardHoverEffectDemo } from "./snippets/card-hover-effect-snippet";

const Services = () => {
    return ( <div className="max-w-5xl mx-auto py-20">
   
        <div className="text-4xl pb-5 md:text-7xl text-center
         bg-clip-text text-black font-semibold  mt-20">
          Streamline your home with our services
        </div>
        <p className="mt-4 text-lg font-normal
          text-black text-regular max-w-lg 
          text-center mx-auto">
          From space planning and layout to Renovation & Remodelling , We offer a wide range of services to make your dream home a reality. 
        </p>

        <CardHoverEffectDemo />

    </div> 
    
    );
}
 
export default Services;