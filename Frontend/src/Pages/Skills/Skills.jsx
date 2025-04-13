import SkillsDetails from "../../Components/sections/SkillsDetails";
import SkillsSection from "../../Components/sections/SkillsSection";
import skillsData from "../../Data/SkillsData";

const Skills = () => {
  return (
    <>
      <div id="skills" className="container mx-auto mt-30">
        <div className="flex justify-around flex-col lg:flex-row ">
          <SkillsSection />
          <div>
            {skillsData.map((skills) => (
              <SkillsDetails
                key={skills.id}
                title={skills.title}
                description={skills.description}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
