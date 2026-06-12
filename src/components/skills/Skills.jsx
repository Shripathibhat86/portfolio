import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktop,
  faServer,
  faShieldHalved,
  faMicrochip,
  faCheckCircle,
  faFileLines,
  faWrench,
  faLock,
} from "@fortawesome/free-solid-svg-icons";

const skillsData = [
  { id: 1, title: "Windows Troubleshooting", icon: faDesktop },
  { id: 2, title: "Active Directory", icon: faServer },
  { id: 3, title: "Network Security", icon: faShieldHalved },
  { id: 4, title: "Hardware Maintenance", icon: faMicrochip },
  { id: 5, title: "Quality Assurance", icon: faCheckCircle },
  { id: 6, title: "Microsoft Office Suite", icon: faFileLines },
  { id: 7, title: "IT Tools Proficiency", icon: faWrench },
  { id: 8, title: "Firewall Configuration", icon: faLock },
];

const Skills = () => {
  return (
    <div className="bg-soft-white py-16 px-4 sm:px-10 lg:px-20 text-gray-900" id="skills">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 inline-block relative">
          My Skills
          <span className="absolute left-0 -bottom-2 w-12 h-1 bg-[#3b82f6]"></span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skillsData.map((skill) => (
            <div
              key={skill.id}
              className="bg-white border border-gray-200 shadow-sm rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:border-[#3b82f6] hover:shadow-md hover:-translate-y-1 transition-all duration-300 min-h-[160px]"
            >
              <FontAwesomeIcon icon={skill.icon} className="text-[#3b82f6] text-3xl mb-4 font-light" />
              <p className="text-sm font-semibold tracking-wide text-gray-800">{skill.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
