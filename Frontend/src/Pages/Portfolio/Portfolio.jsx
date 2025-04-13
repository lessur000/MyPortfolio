import Project from "../../Components/sections/Project";

const Portfolio = () => {
  return (
    <>
      <section id="portfolio" className="container mx-auto mt-10">
        <h1 className="text-3xl text-center font-semibold custom-gradient uppercase">
          Projects
        </h1>
        <Project />
      </section>
    </>
  );
};

export default Portfolio;
