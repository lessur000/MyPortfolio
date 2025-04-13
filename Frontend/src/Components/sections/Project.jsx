import SecondaryButton from "../ui/SecondaryButton";
import ThirdButton from "../ui/ThirdButton";
import FourthButton from "../ui/FourthButton";
import Pic1 from "/Ecommerce.png";
import Pic2 from "/MetaVerse.png";
import Pic3 from "/AutomotiveShop.png";

const Project = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2  xl:grid-cols-3 mt-20 gap-3 ">
        {/* Ecommerce */}
      <div className="border border-[#00BFFF] w-fit p-5 rounded-xl space-y-5 overflow-hidden mx-auto">
        <div className="max-w-[500px] space-y-5">
          <h5 className="text-[#A020F0] uppercase text-xl">00 - Ecommerce</h5>
          <div className="flex gap-5">
            <div
              className="border bg-[#001F33] p-2 uppercase text-[#00BFFF] w-fit hover:bg-[#3a005c] hover:text-white hover:border-white 
             transition duration-300"
            >
              TailwindCSS
            </div>
            <div
              className="border bg-[#001F33] p-2 uppercase text-[#00BFFF] w-fit hover:bg-[#3a005c] hover:text-white hover:border-white 
             transition duration-300"
            >
              ReactJSX+Vite
            </div>
            <div
              className="border bg-[#001F33] p-2 uppercase text-[#00BFFF] w-fit hover:bg-[#3a005c] hover:text-white hover:border-white 
             transition duration-300"
            >
              NodeJS BASIC
            </div>
          </div>
          <SecondaryButton />
          <img
            src={Pic1}
            alt="Ecommerce"
            className="h-auto w-[500px] opacity-25 hover:opacity-125 transition duration-300"
          />
          <p className="text-gray-300 text-sm md:text-base mb-4 mt-5 font-semibold">
            Built using modern tools like Tailwind, Vite, and Node.js, Zustand.
            This ecommerce UI is responsive and fast.
          </p>
        </div>
      </div>
        {/* MetaVerse */}
      <div className="border border-[#00BFFF] w-fit p-5 rounded-xl space-y-5 overflow-hidden mx-auto">
        <div className="max-w-[500px] space-y-5">
          <h5 className="text-[#A020F0] uppercase text-xl">
            01 - MetaVerse Landing Page
          </h5>
          <div className="flex gap-5">
            <div
              className="border bg-[#001F33] p-2 uppercase text-[#00BFFF] w-fit hover:bg-[#3a005c] hover:text-white hover:border-white 
             transition duration-300"
            >
              TailwindCSS
            </div>
            <div
              className="border bg-[#001F33] p-2 uppercase text-[#00BFFF] w-fit hover:bg-[#3a005c] hover:text-white hover:border-white 
             transition duration-300"
            >
              ReactJSX+Vite
            </div>
            <div
              className="border bg-[#001F33] p-2 uppercase text-[#00BFFF] w-fit hover:bg-[#3a005c] hover:text-white hover:border-white 
             transition duration-300"
            >
              Animation
            </div>
          </div>
          <ThirdButton />
          <img
            src={Pic2}
            alt="MetaVerse"
            className="h-auto w-[500px] opacity-25 hover:opacity-125 transition duration-300"
          />
          <p className="text-gray-300 text-sm md:text-base mb-4 mt-5 font-semibold">
            Built using modern tools like Tailwind, Vite, and Animation.js. This
            ecommerce UI is responsive and fast.
          </p>
        </div>
      </div>
        {/* AutomotiveShop */}
      <div className="border border-[#00BFFF] w-fit p-5 rounded-xl space-y-5 overflow-hidden mx-auto">
        <div className="max-w-[500px] space-y-5">
          <h5 className="text-[#A020F0] uppercase text-xl">
            02 - AutomotiveShop
          </h5>
          <div className="flex gap-5">
            <div
              className="border bg-[#001F33] p-2 uppercase text-[#00BFFF] w-fit hover:bg-[#3a005c] hover:text-white hover:border-white 
             transition duration-300"
            >
              TailwindCSS
            </div>
            <div
              className="border bg-[#001F33] p-2 uppercase text-[#00BFFF] w-fit hover:bg-[#3a005c] hover:text-white hover:border-white 
             transition duration-300"
            >
              ReactJSX+Vite
            </div>
            <div
              className="border bg-[#001F33] p-2 uppercase text-[#00BFFF] w-fit hover:bg-[#3a005c] hover:text-white hover:border-white 
             transition duration-300"
            >
              Animation
            </div>
          </div>
          <FourthButton />
          <img
            src={Pic3}
            alt="Automotive"
            className="h-auto w-[500px] opacity-25 hover:opacity-125 transition duration-300"
          />
          <p className="text-gray-300 text-sm md:text-base mb-4 mt-5 font-semibold">
            Built using modern tools like Tailwind, Vite, and Animation.js. This
            ecommerce UI is responsive and fast.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project;
