import Melissa from "../../assets/images/team/team-01.png";
import Stuard from "../../assets/images/team/team-02.png";
import Hudson from "../../assets/images/team/team-03.png";
import Sanders from "../../assets/images/team/team-04.png";
import { Facebook, Instagram, TeamSvg, Twitter } from "../svg/Svg";

const TeamMemberr = () => {
  const teamData = [
    {
      id: 1,
      img: Melissa,
      name: "Melissa Tatcher",
      designation: "Marketing Expert",
    },

    {
      id: 2,
      img: Stuard,
      name: "Stuard Ferrel",
      designation: "Digital Marketer",
    },

    {
      id: 3,
      img: Hudson,
      name: "Eva Hudson",
      designation: "Creative Designer",
    },

    {
      id: 4,
      img: Sanders,
      name: "Jackie Sanders",
      designation: "Founder of Facebook",
    },
  ];
  return (
    <div className="-mx-4 flex flex-wrap justify-center">
      {teamData.map((team) => {
        return (
          <div className="w-full px-4 sm:w-1/2 lg:w-1/4 xl:w-1/4" key={team.id}>
            <div className="group mb-8 rounded-xl bg-white px-5 pb-10 pt-12 shadow-testimonial dark:bg-dark dark:shadow-none">
              <div className="relative z-10 mx-auto mb-5 h-[120px] w-[120px]">
                <img
                  src={team?.img}
                  alt="team image"
                  className="h-[120px] w-[120px] rounded-full"
                />
                <span className="absolute bottom-0 left-0 -z-10 h-10 w-10 rounded-full bg-secondary opacity-0 transition-all group-hover:opacity-100"></span>
                <span className="absolute right-0 top-0 -z-10 opacity-0 transition-all group-hover:opacity-100">
                  <TeamSvg />
                </span>
              </div>
              <div className="text-center">
                <h4 className="mb-1 text-lg font-semibold text-dark dark:text-white">
                  {team?.name}
                </h4>
                <p className="mb-5 text-sm text-body-color dark:text-dark-6">
                  {team?.designation}
                </p>
                <div className="flex items-center justify-center gap-5">
                  <a
                    href="javascript:void(0)"
                    className="text-dark-6 hover:text-primary"
                  >
                    <Facebook />
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="text-dark-6 hover:text-primary"
                  >
                    <Twitter />
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="text-dark-6 hover:text-primary"
                  >
                    <Instagram />
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TeamMemberr;
