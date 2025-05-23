import React from 'react';
import Image from 'next/image';
// import Landingpage2 from "@/app/LandingPage/landingpage2"
import Link from 'next/link';
import { Button } from "@/app/animasi/button";


const Header = () => {
  return (
    <header className="bg-black shadow-md text-white sticky top-0 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Image
              src="/Logo.svg" 
              alt="Logo"
              width={120} 
              height={40} 
              className="object-contain"
            />
          </div>

          {/* Navigation Section */}
          <div className="ml-auto flex items-center space-x-6">
            <Link href="#whyUs" passHref className="text-white hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md text-sm font-medium">
              
                Why Us
              
            </Link>
            <a href="#Feat" className="text-white hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md text-sm font-medium">
              Our Feature
            </a>
            <a href="#last" className="text-white hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md text-sm font-medium">
              Vault
            </a>
            <a href="#how" className="text-white hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md text-sm font-medium">
              How It Works
            </a>
            <a href="#" className="text-white hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md text-sm font-medium">
              Docs
            </a>
            {/* Launch App Button */}
            <Link href="/dashboard">
              <Button
              variant="default"
              className="flex items-center gap-2 px-6 py-3 text-md bg-gradient-to-t from-gray-800 to-black text-white border border-gray-700 hover:from-gray-600 hover:to-gray-800 rounded-md"
                >
                  LAUNCH APP  
              </Button>
            
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;





// import React from 'react';
// import Image from 'next/image';

// const Header = () => {
//   return (
//     <header className="bg-black shadow-md text-white sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="relative flex items-center justify-between h-16">
//           {/* Logo Section */}
//           <div className="flex-shrink-0">
//             <Image
//               src="/Logo.svg" 
//               alt="Logo"
//               width={120} 
//               height={40} 
//               className="object-contain"
//             />
//           </div>

//           {/* Navigation Section */}
//           <div className="ml-auto flex items-center space-x-6">
//             <a href="#" className="text-white hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md text-sm font-medium">
//               Why Us
//             </a>
//             <a href="#" className="text-white hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md text-sm font-medium">
//               Our Feature
//             </a>
//             <a href="#" className="text-white hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md text-sm font-medium">
//               Vault
//             </a>
//             <a href="#" className="text-white hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md text-sm font-medium">
//               How It Works
//             </a>
//             <a href="#" className="text-white hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md text-sm font-medium">
//               Docs
//             </a>
//             {/* Launch App Button */}
//             <button className="bg-gray-950 text-white border-1 border-white px-6 py-2 rounded-xl text-sm font-medium hover:bg-gray-800">
//               Launch App
//             </button>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;