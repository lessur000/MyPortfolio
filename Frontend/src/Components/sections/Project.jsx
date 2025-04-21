import SecondaryButton from "../ui/SecondaryButton";
import ThirdButton from "../ui/ThirdButton";
import FourthButton from "../ui/FourthButton";
import Pic1 from "/Ecommerce.png";
import Pic2 from "/MetaVerse.png";
import Pic3 from "/AutomotiveShop.png";
import Pic4 from "/RusselFlix.png";
import FiveButton from "../ui/FiveButton";

const Project = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-20 gap-3 m-2">
      {/* Ecommerce */}
      <div className="border border-[#00BFFF] p-2 rounded-xl space-y-5 overflow-hidden ">
        <div className="space-y-5 m-3">
          <h5 className="text-[#A020F0] uppercase text-xl">00 - Ecommerce</h5>
          <div className="flex flex-wrap gap-2">
            <div
              className="border bg-[#001F33] h-fit p-2 text-xs md:text-lg uppercase text-[#00BFFF]  hover:bg-[#3a005c] hover:text-white hover:border-white 
             transition duration-300"
            >
              TailwindCSS
            </div>
            <div
              className="border bg-[#001F33] h-fit p-2 text-xs md:text-lg uppercase text-[#00BFFF]  hover:bg-[#3a005c] hover:text-white hover:border-white 
             transition duration-300"
            >
              ReactJSX+Vite
            </div>
            <div
              className="border bg-[#001F33] h-fit p-2 text-xs md:text-lg uppercase text-[#00BFFF]  hover:bg-[#3a005c] hover:text-white hover:border-white 
             transition duration-300"
            >
              NodeJS
            </div>
          </div>
          <SecondaryButton />
          <img
            src={Pic1}
            alt="Ecommerce"
            className="h-auto w-full opacity-25 hover:opacity-125 transition duration-300"
          />
          <p className="text-gray-300 text-sm md:text-base mb-4 mt-5 font-semibold max-w-[500px]">
            Built using modern tools like Tailwind, Vite, and Node.js, Zustand.
            This ecommerce UI is responsive and fast.
          </p>
        </div>
      </div>
      {/* MetaVerse */}
      <div className="border border-[#00BFFF] p-2 rounded-xl space-y-5 overflow-hidden ">
        <div className="space-y-5 m-3">
          <h5 className="text-[#A020F0] uppercase text-xl">01 - MetaVerse</h5>
          <div className="flex flex-wrap gap-2">
            <div
              className="border bg-[#001F33] h-fit p-2 text-xs md:text-lg uppercase text-[#00BFFF]  hover:bg-[#3a005c] hover:text-white hover:border-white 
             transition duration-300"
            >
              TailwindCSS
            </div>
            <div
              className="border bg-[#001F33] h-fit p-2 text-xs md:text-lg uppercase text-[#00BFFF]  hover:bg-[#3a005c] hover:text-white hover:border-white 
             transition duration-300"
            >
              ReactJSX+Vite
            </div>
          </div>
          <ThirdButton />
          <img
            src={Pic2}
            alt="Ecommerce"
            className="h-auto w-full opacity-25 hover:opacity-125 transition duration-300"
          />
          <p className="text-gray-300 text-sm md:text-base mb-4 mt-5 font-semibold max-w-[500px]">
            Built using modern tools like Tailwind, Vite, and Node.js, Zustand.
            This ecommerce UI is responsive and fast.
          </p>
        </div>
      </div>
      {/* AutomotiveShop */}
      <div className="border border-[#00BFFF] p-2 rounded-xl space-y-5 overflow-hidden ">
        <div className="space-y-5 m-3">
          <h5 className="text-[#A020F0] uppercase text-xl">
            02 - AutomotiveShop
          </h5>
          <div className="flex flex-wrap gap-2">
            <div
              className="border bg-[#001F33] h-fit p-2 text-xs md:text-lg uppercase text-[#00BFFF]  hover:bg-[#3a005c] hover:text-white hover:border-white 
             transition duration-300"
            >
              TailwindCSS
            </div>
            <div
              className="border bg-[#001F33] h-fit p-2 text-xs md:text-lg uppercase text-[#00BFFF]  hover:bg-[#3a005c] hover:text-white hover:border-white 
             transition duration-300"
            >
              ReactJSX+Vite
            </div>
          </div>
          <FourthButton />
          <img
            src={Pic3}
            alt="Ecommerce"
            className="h-auto w-full opacity-25 hover:opacity-125 transition duration-300"
          />
          <p className="text-gray-300 text-sm md:text-base mb-4 mt-5 font-semibold max-w-[500px]">
            Built using modern tools like Tailwind, Vite, and Node.js, Zustand.
            This ecommerce UI is responsive and fast.
          </p>
        </div>
      </div>
      {/* RusselFlix */}
      <div className="border border-[#00BFFF] p-2 rounded-xl space-y-5 overflow-hidden ">
        <div className="space-y-5 m-3">
          <h5 className="text-[#A020F0] uppercase text-xl">
            03 - RusselFlix
          </h5>
          <div className="flex flex-wrap gap-2">
            <div
              className="border bg-[#001F33] h-fit p-2 text-xs md:text-lg uppercase text-[#00BFFF]  hover:bg-[#3a005c] hover:text-white hover:border-white 
             transition duration-300"
            >
              TailwindCSS
            </div>
            <div
              className="border bg-[#001F33] h-fit p-2 text-xs md:text-lg uppercase text-[#00BFFF]  hover:bg-[#3a005c] hover:text-white hover:border-white 
             transition duration-300"
            >
              ReactJSX+Vite
            </div>
          </div>
          <FiveButton />
          <img
            src={Pic4}
            alt="RusselFlix"
            className="h-auto w-full opacity-25 hover:opacity-125 transition duration-300"
          />
          <p className="text-gray-300 text-sm md:text-base mb-4 mt-5 font-semibold max-w-[500px]">
            Built using modern tools like Tailwind, Vite, Zustand.
           
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project;
