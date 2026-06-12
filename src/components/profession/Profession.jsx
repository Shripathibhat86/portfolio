import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "IT Infrastructure Management",
    description:
      "I oversee the design, implementation, and maintenance of scalable IT infrastructure that supports organizational growth.",
  },
  {
    id: 2,
    title: "IT Strategy & Leadership",
    description:
      "I develop forward-thinking IT strategies aligned with business goals, ensuring technology investments yield high returns.",
  },
  {
    id: 3,
    title: "Network Performance & Security",
    description:
      "I specialize in optimizing network performance and implementing robust security measures to protect critical business data.",
  },
];

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">What I do?</p>
        <div className="mt-6 text-[14px]">
          <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
            I specialize in IT infrastructure management, strategic technology leadership, and ensuring optimal network performance and security.
          </p>
          <p className="text-xs sm:text-lg font-normal text-gray-400">
            My approach combines deep technical expertise with business acumen to deliver technology solutions that drive efficiency and growth.
          </p>
        </div>
        <a
          href="#!"
          className="mt-5 md:mt-12.5 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5"
        >
          Say Hello!
        </a>
      </div>
      <div className="">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
