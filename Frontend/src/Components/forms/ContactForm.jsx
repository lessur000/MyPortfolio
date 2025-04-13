const ContactForm = () => {
  return (
    <>
      {/* Right Col - Form */}
      <form method="get" className="space-y-5 max-w-[400px] w-full">
        <h1 className="custom-gradient text-2xl sm:text-4xl font-serif uppercase">
          Contact Form
        </h1>
        <div className="space-y-5 w-auto">
          {/* Name Input */}
          <div className="flex flex-col">
            <label className="text-white font-serif text-lg">Name:</label>
            <input
              type="text"
              className="border border-white text-white py-2 px-3 bg-transparent"
              placeholder="Full Name"
            />
          </div>
          {/* Email Input */}
          <div className="flex flex-col">
            <label className="text-white font-serif text-lg">Email:</label>
            <input
              type="email"
              className="border border-white text-white py-2 px-3"
              placeholder="Your Email"
            />
          </div>
          {/* Message Input */}
          <div className="flex flex-col">
            <label className="text-white font-serif text-lg">Message:</label>
            <textarea
              className="border border-white text-white py-2 px-3 bg-transparent h-24 "
              placeholder="Your Message"
            ></textarea>
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="border border-white text-white py-2 px-5 rounded-md hover:bg-white hover:text-black transition"
          >
            Send
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
