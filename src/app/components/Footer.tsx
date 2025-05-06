// components/Footer.tsx
import Image from "next/image";
export default function Footer() {
    return (
      <footer className="w-full border-t fixed left-0 bottom-0">
        

        <div className="grid grid-cols-5 bg-[#008F4C] text-xs ">
          <div className="col-span-3 bg-[#0E3B64] text-white "> <p className="px-4  py-4"><span>© The Premier Bank PLC. {new Date().getFullYear()} Asset Tracker. All rights reserved. </span></p></div>
          <div className="col-span-1   py-4 bg-pbl-green w-[67px] h-[56px] relative">
          <Image
            src="/logo_footer.png" // path to your image in the public folder
            alt="Footer logo"
            fill // this makes the image fill the div
            style={{ objectFit: 'cover' }}
          />
          </div>
          <div className="col-span-1 bg-[#008F4C]">
          <div className="text-white py-4 space-x-20 mt-4 sm:mt-0">
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
          </div>

          </div>
          
        </div>
      </footer>
    );
  }
  