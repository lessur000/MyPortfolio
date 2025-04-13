//import icons
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import Paint2 from "/Paint2.png";
import ContactForm from "../../Components/forms/ContactForm";

const Contact = () => {
  return (
    <>
      <div className="container mx-auto">
        {/* Container */}
        <section id="contact" className="flex flex-col lg:flex-row justify-center gap-20 mt-50 px-5 bg-no-repeat relative">
          {/* Paint image */}
          <img
            src={Paint2}
            className="absolute -top-30 -left-30 hidden sm:block"
          />
          <div className="flex flex-col md:flex-row justify-between space-y-10 md:space-y-0 gap-5">
            {/* Left Col */}
            <div className="space-y-5 w-full ">
              <h1 className="custom-gradient text-xl sm:text-5xl font-serif uppercase max-w-[400px] sm:max-w-[560px]">
                Do you have a project to discuss?
              </h1>
              <p className="font-serif uppercase text-xl sm:text-3xl text-white">
                Get in touch
              </p>
              <div className="space-y-5">
                {/* Contact */}
                <div className="space-y-2">
                  <p className="text-white uppercase font-serif md:text-xl">
                    Contact:
                  </p>
                  <p className="text-white font-medium underline">
                    Russelolaco@gmail.com
                  </p>
                </div>
                {/* Social Media */}
                <div>
                  <p className="text-white uppercase font-serif md:text-xl">
                    Social Media:
                  </p>
                  <div className="flex items-center gap-5">
                    <FaFacebook size={30} className="fill-white" />
                    <FaInstagram size={30} className="fill-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ContactForm />
        </section>
        <div className="border-b-3 mt-20 border-gray-900 w-full"></div>
      </div>
    </>
  );
};

export default Contact;
