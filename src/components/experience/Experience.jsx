import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";

const experienceData = [
  {
    id: 1,
    role: "Senior Executive IT",
    date: "09/2025 — Present",
    company: "SSMRV College",
    location: "Bangalore",
    responsibilities: [
      "Led IT strategy development to enhance organizational efficiency and productivity.",
      "Established IT policies and procedures to ensure alignment with company objectives and meet compliance standards.",
      "Supervised IT team to provide effective support for internal staff and streamline operations.",
      "Managed system upgrades, enhancing network performance and strengthening security protocols.",
    ],
  },
  {
    id: 2,
    role: "System Administrator (Desktop Support Engineer)",
    date: "01/2023 — 09/2025",
    company: "Symmetrix Computers Systems Pvt Ltd",
    location: "Bangalore, India",
    responsibilities: [
      "Managed users, computers, and policies in Active Directory and Sophos Console.",
      "Managed and configured servers with DNS, SMTP IIS relay, SAP Server Backup, Data Storage Server.",
      "Managing with Firewall Configuration, and Maintaining Documentation with screenshot for Record.",
      "Configuring Wi-Fi AP with cluster, surveillance Camera, Network Connectivity and VPN.",
      "Troubleshot issues on Windows operating systems to ensure functionality.",
      "Provided management with information on cost-effective product options.",
      "Handled Firewall configuration and network connectivity (VPN, Wi-Fi AP cluster).",
      "Supported PAN India users for remote issue resolution and managed Exchange Mails Server (Silver Sky, O365).",
      "Configured new Hikvision NVR and 50 CC Cameras.",
      "Successfully migrated all users to newly created AD and procured Dell server for domain controller.",
      "Resolved all IT Tickets based on high priority.",
    ],
  },
  {
    id: 3,
    role: "IT Support Engineer",
    date: "09/2020 — 11/2022",
    company: "Cogent E Services Ltd",
    location: "Mangalore, Karnataka",
    responsibilities: [
      "Resolved IT issues and anticipated critical situations to minimize downtime and maintain operational continuity.",
      "Provided IT support and troubleshooting for end user issues, ensuring timely resolution and user satisfaction.",
      "Ensure the proper working order of all terminals and servers at all times.",
      "Installed operating systems on laptops for users.",
      "Deployed new laptops at Service max: 150 laptops were customized for End users.",
      "Maintained VC and projector connections in board and meeting rooms, ensuring seamless communication for presentations.",
      "Managed IT asset inventory.",
      "Shifting of Office to new location: Shifted IT assets with proper coding and identification, Configured and managed LAN, WAN, surveillance camera, access controller zoon VC setup.",
    ],
  },
  {
    id: 4,
    role: "Technical Support",
    date: "03/2018 — 02/2020",
    company: "Winman Software Ltd",
    location: "Mangalore, Karnataka",
    responsibilities: [
      "Work Experience in Desktop Hardware and Software maintenance, Server maintenance with best knowledge and capabilities.",
      "Experience in Data backup and recovery.",
      "Setting up Operating systems like Windows 7, Windows 8, Windows 10, Windows server 2012.",
      "Experience in troubleshooting Windows 7, Windows 8, Windows 10, Windows server 2012.",
      "Experience in technical support through remote desktop.",
      "Experience in creating VPN gateways.",
      "Experience in editing videos in Active Presenter.",
      "Experience in Drive security maintenance, File and folder security maintenance activities.",
      "Experience in customer support through call.",
      "Experience in Firewall.",
      "Migrate windows 7 to Windows 8.1, Windows10.",
      "Upgraded Antivirus.",
      "Configured All User Operating Systems.",
      "Taken Backups of Servers Weekly.",
    ],
  },
];

const Experience = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-10 lg:px-20 text-gray-900" id="experience">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 inline-block relative">
          Experience
          <span className="absolute left-0 -bottom-2 w-12 h-1 bg-[#3b82f6]"></span>
        </h2>

        <div className="relative border-l border-gray-300 ml-4 sm:ml-6 mt-8">
          {experienceData.map((exp) => (
            <div key={exp.id} className="mb-12 ml-6 sm:ml-10 relative">
              <span className="absolute -left-[31px] sm:-left-[47px] top-5 w-4 h-4 rounded-full bg-white border-4 border-[#3b82f6] ring-4 ring-white"></span>
              <div className="bg-soft-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow rounded-2xl p-6 sm:p-8">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4 gap-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#3b82f6] mb-2">
                      {exp.role}
                    </h3>
                    <p className="text-gray-600 font-medium text-sm sm:text-base">
                      {exp.company} | {exp.location}
                    </p>
                  </div>
                  <div className="shrink-0 bg-[#3b82f6] text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 self-start">
                    <FontAwesomeIcon icon={faCalendarAlt} className="text-white" />
                    {exp.date}
                  </div>
                </div>
                <hr className="border-gray-200 my-4" />
                <ul className="list-disc pl-5 text-gray-600 text-sm sm:text-base space-y-2 marker:text-[#3b82f6]">
                  {exp.responsibilities.map((resp, index) => (
                    <li key={index}>{resp}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
