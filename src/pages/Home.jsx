import Introduction from "../components/introduction/Introduction";
import Profile from "../components/profile/Profile";
import Skills from "../components/skills/Skills";
import Experience from "../components/experience/Experience";
import WorkTogether from "../components/workTogether/WorkTogether";
import Profession from "../components/profession/Profession";
import Contact from "../components/contact/Contact";
import "../../index.css";

const Home = () => {
  return (
    <div className="relative">
      <div className="introduction-profile-background">
        <div className="content">
          <Introduction />
          <Profile />
        </div>
      </div>
      <Skills />
      <Experience />
      <div className="bg-gray-900">
        <WorkTogether />
      </div>
      <div className="bg-soft-white">
        <Profession />
      </div>
      <Contact />
    </div>
  );
};

export default Home;
