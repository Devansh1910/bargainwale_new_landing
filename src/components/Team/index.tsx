import { TeamType } from "@/types/team";
import SectionTitle from "../Common/SectionTitle";
import SingleTeam from "./SingleTeam";

const teamData: TeamType[] = [
  {
    id: 1,
    name: "Devansh Saxena",
    designation: "Founder and Chief Executive Officer (CEO)",
    image: "/images/team/devansh.png",
    linkedinLink: "https://www.linkedin.com/in/imdevanshsaxena",
    // facebookLink: "/#",
    // twitterLink: "/#",
    // instagramLink: "/#",
    githubLink: "https://github.com/Devansh1910",
  },
  {
    id: 2,
    name: "Rishvant Singh",
    designation: "Full-Stack Developer",
    image: "/images/team/rishvant.png",
    linkedinLink: "https://www.linkedin.com/in/rishvant-singh",
    // facebookLink: "/#",
    // twitterLink: "/#",
    // instagramLink: "/#",
    githubLink: "https://github.com/rishvant",
  },
  {
    id: 3,
    name: "Raghav Khurana",
    designation: "Backend Developer",
    image: "/images/team/raghav.png",
    linkedinLink: "https://www.linkedin.com/in/raghavkhurana-",
    // facebookLink: "/#",
    // twitterLink: "/#",
    // instagramLink: "/#",
    githubLink: "https://github.com/theraghav12",
  },
  {
    id: 4,
    name: "Amrutansh Jha",
    designation: "Backend Developer",
    image: "/images/team/amru.png",
    linkedinLink: "https://www.linkedin.com/in/amrutansh-jha-89881a258",
    // facebookLink: "/#",
    // twitterLink: "/#",
    // instagramLink: "/#",
    githubLink: "https://github.com/Amru2010",
  },
];

const Team = () => {
  return (
    <section
      id="team"
      className="overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="mb-[60px]">
          <SectionTitle
            subtitle="Our Team"
            title="Meet Our Team"
            paragraph="The success of Bargainwale, a product of Redux Corporation, is driven by a team of innovative minds committed to empowering businesses."
            width="640px"
            center
          />
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          {teamData.map((team, i) => (
            <SingleTeam key={i} team={team} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
