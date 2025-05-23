

const FourthButton = () => {
  return (
    <div className="flex gap-3">
      <button
        className="border text-[#00BFFF] px-5 py-2 bg-[#001F33] hover:bg-[#3a005c] hover:text-white hover:border-white 
             transition duration-300 cursor-pointer"
      >
        <a href="https://automotive-one.vercel.app/" target="_blank">
          Live
        </a>
      </button>
      <button
        className="border text-[#00BFFF] px-5 py-2 bg-[#001F33] hover:bg-[#3a005c] hover:text-white hover:border-white 
             transition duration-300 cursor-pointer"
      >
        <a href="https://github.com/lessur000/Automotive" target="_blank">
          Code
        </a>
      </button>
    </div>
  );
};

export default FourthButton;
