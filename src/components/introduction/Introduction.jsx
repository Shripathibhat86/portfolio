import person from "../../assets/images/person.png";
import "./introduction.css";
import InformationSummary from "./InformationSummary";

// Calculate experience dynamically accounting for gaps
const startDate = new Date(2018, 2); // Month is 0-indexed (2 = March)
const currentDate = new Date();
const totalMonths = (currentDate.getFullYear() - startDate.getFullYear()) * 12 + (currentDate.getMonth() - startDate.getMonth());
const gapMonths = 9; // Account for gaps between jobs (Feb-Sep 2020, Nov 2022-Jan 2023)
const experienceYears = ((totalMonths - gapMonths) / 12).toFixed(1);

// Information summary data
const informationSummaryData = [
  {
    id: 1,
    title: "Experience",
    description: `${Math.max(1, experienceYears)}+ Y.`,
  },
];

const Introduction = () => {
  return (
    <div
      className="flex max-lg:flex-col-reverse sm:justify-between pt-10 lg:pt-31.5 lg:mb-27.5 max-xl:gap-2 p-2 max-xxl:px-4"
      id="introduction"
    >
      <div className="w-full flex flex-col justify-between max-lg:text-center">
        <div className="pt-13 me-31.5 w-full lg:w-auto transition-all duration-500">
          <p className="text-3xl xxs:text-4xl sm:max-xl:text-5xl xl:text-6xl font-semibold w-full">
            Hello, I’m
            <span className="text-nowrap shrink-0 inline-block w-full">
              Shripathi Bhat
            </span>
          </p>
          <p className="text-xs xxs:text-lg lg:text-[18px] my-6">
            I'm a <span className="bg-highlight">Senior IT Executive</span> based in Bangalore, India. I specialize in system upgrades, IT strategy, and enhancing network performance through innovative technology solutions.
          </p>
          <p className="text-center lg:text-start">
            <a
              className="btn-primary btn btn-xs xxs:btn-lg text-white"
              href="mailto:contact@shripathibhat.in"
            >
              Say Hello!
            </a>
          </p>
        </div>
        <div className="mx-auto lg:mx-0 relative">
          <div className="grid grid-cols-1 w-fit mt-10 gap-1">
            {informationSummaryData.map((item) => (
              <InformationSummary key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
      <div
        className={`max-w-134 w-full h-full max-lg:mx-auto aspect-[536/636] relative`}
      >
        <img
          className={`shadow-2xl shadow-gray-200 w-full h-full absolute bottom-0 object-cover bg-white rounded-3xl`}
          src={person}
          alt="person"
        />
      </div>
    </div>
  );
};

export default Introduction;
