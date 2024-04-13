import About from "./About";
import Education from "./Education";
import Skills from "./Skills";
import Certification from "./Certification";
import Projects from "./Projects";
import Hobbies from "./Hobbies";
import ContactUs from "./ContactUs";
import Experience from "./Experience";
// import Demo from './Demo'


const MainItem = ({ activeTab }) => {

 const renderActiveTab = () => {
    switch (activeTab) {
      case 'About':
        return <About />;
      case 'Education':
        return <Education />;
       case 'Experience':
        return <Experience />;
      case 'Skills':
        return <Skills />;
      case 'Certifications':
        return <Certification />;
      case 'Projects':
        return <Projects />;
      case 'Hobbies':
        return <Hobbies />;
      case 'Contact Us':
        return <ContactUs />;
      // case 'Skills':
      //   return <Skills />;

      default:
        return <About />;
    }
  };
  
  return (
    <>
      <main className='md:w-4/5 w-full px-4 sm:mt-4 max-[639px]:mt-4'>
        {renderActiveTab()}
      </main>
    </>
  );
};

export default MainItem;
