import LogoImages from "../../Data/LogoImages";

const SkillsSection = () => {
  return (
    <>
      <section className="">
        {/* Skills Content */}
        <div className="relative flex flex-col items-center justify-center space-y-10">
          <h1 className="custom-gradient text-7xl font-serif">Skills</h1>
          <p className="text-white sm:text-3xl">
            The skills, tools, and technologies I use:
          </p>

          {/* Skill Logos */}
          <div className="grid grid-cols-2 md:grid-cols-4 place-items-center gap-10">
            {LogoImages.map((logo, index) => (
              <img
                key={index}
                src={logo.image}
                className="w-20 h-20"
                alt="Skill Logo"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SkillsSection;
