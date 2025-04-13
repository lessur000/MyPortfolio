//import images
import Profile from "/Profile.png";
import PrimaryButton from "../../Components/ui/PrimaryButton";

const Introsection = () => {
  return (
    <>
      <div className="container mx-auto pt-20">
        <section className="flex items-center justify-between">
          {/* left col */}
          <div className="space-y-5 max-w-[500px] md:max-w-[900px]">
            <h1 className="custom-gradient text-4xl sm:text-6xl md:text-5xl lg:text-8xl  uppercase font-serif">
              Frontend developer
            </h1>
            <p className="text-white sm:text-xl md:text-md max-w-[450px]">
              Hi i’m a self taught front end programmer. As a web developer i
              liked to focus all the technologies and techniques I’ve learn on
              the looks and user experience of a website or other projects. My
              goal is to achieve and learn more about the web design and
              programming.
            </p>
            {/* Button */}
            <PrimaryButton>
              <a href="/CV.pdf" download="Russel_Olaco_CV.pdf">
                <span>Download CV</span>
              </a>
            </PrimaryButton>
          </div>
          {/* right col */}
          <img
            src={Profile}
            className="hidden md:block h-auto w-[400px] md:w-[400px] lg:w-[480px] 2xl:w-[600px]"
          />
        </section>
      </div>
      <div className="border-b-3 mt-20 border-gray-900 w-full"></div>
    </>
  );
};

export default Introsection;
