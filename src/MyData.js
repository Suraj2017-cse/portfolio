import { BsLinkedin, BsGithub, BsInstagram, BsFacebook } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";
import { TbCertificate } from "react-icons/tb";
import { AiFillProject } from "react-icons/ai";
import { IoSchoolSharp } from "react-icons/io5";
import { FaAddressCard } from "react-icons/fa";
import { SiEslgaming } from "react-icons/si";

// Nav Links Item Component
const NavLinksItem = [
  {
    id: 1,
    name: "About",
    icon: <FaAddressCard />,
  },
  {
    id: 2,
    name: "Education",
    icon: <IoSchoolSharp />,
  },
  {
    id: 3,
    name: "Skills",
    icon: <GiSkills />,
  },
  {
    id: 4,
    name: "Hobbies",
    icon: <SiEslgaming />,
  },
  {
    id: 5,
    name: "Certifications",
    icon: <TbCertificate />,
  },
  {
    id: 6,
    name: "Projects",
    icon: <AiFillProject />,
  },
  //  {
  //     id : 4,
  //     name : 'About',
  // },
];

// Social Media Links
const SocialMediaLinks = [
  {
    id: 1,
    name: "Github",
    url: "https://github.com/Suraj2017-cse",
    icon: <BsGithub />,
  },
  {
    id: 2,
    name: "Linkedin",
    url: "https://www.linkedin.com/in/sahsuraj/",
    icon: <BsLinkedin />,
  },
  {
    id: 3,
    name: "Instagram",
    url: "https://www.instagram.com/sahsuraj1/",
    icon: <BsInstagram />,
  },
  {
    id: 4,
    name: "Facebook",
    url: "https://www.facebook.com/sahsuraj01",
    icon: <BsFacebook />,
  },
];

// Education Details
const EducationData = [
  {
    id: 1,
    organisation: "RKDF UNIVERSITY",
    stream: "DIPLOMA",
    branch: "Computer Science & Engineering",
    marks: "7.27",
    duration: "August 2017 - June-2020",
  },
  {
    id: 2,
    organisation: "BSEB PATNA",
    stream: "10 WITH ALL SUBJECTS",
    branch: "",
    marks: "58.40",
    duration: "April 2015 - May 2017",
  },
];

// Certification Details
const CertificationData = [
  {
    id: 1,
    organisation: "Naresh i technologies",
    course: "UI technologies",
    duration: "April 2020 - June-2020",
  },
];

// Skill Details
const Skillset = [
  {
    id: 1,
    name: "fa-brands fa-html5",
    title: "HTML",
  },
  {
    id: 2,
    name: "fa-brands fa-css3-alt",
    title: "CSS",
  },
  {
    id: 3,
    name: "fa-brands fa-square-js",
    title: "JavaScript",
  },
  {
    id: 4,
    name: "fa-brands fa-sass",
    title: "Sass",
  },
  {
    id: 5,
    name: "fa-brands fa-bootstrap",
    title: "Bootstrap",
  },
  {
    id: 6,
    name: "devicon-tailwindcss-plain",
    title: "Tailwind CSS",
  },
  {
    id: 7,
    name: "fa-brands fa-react",
    title: "React",
  },
  {
    id: 8,
    name: "devicon-materialui-plain",
    title: "Material UI",
  },
  {
    id: 9,
    name: "fa-brands fa-github",
    title: "github",
  },
  {
    id: 10,
    name: "fa-brands fa-git-alt",
    title: "git",
  },
  {
    id: 11,
    name: "fa-brands fa-ubuntu",
    title: "Ubuntu",
  },
  {
    id: 12,
    name: "fa-brands fa-windows",
    title: "Window",
  },
];

//  Projects Details
const Projects_Data = [
  {
    id: 1,
    title: "Hotel Room",
    description:
      "This is a Hotel Room Booking app that allows you to book a Room for your business, travel, and meetings",
    img_link: "asset/images/helite.jpg",
    language: "jQuery",
    code_link: "https://github.com/Suraj2017-cse/h-elite",
    live_link: "https://helite.netlify.app/index.html",
  },
  {
    id: 2,
    title: "Form validation",
    description: "This is a project description",
    img_link: "asset/images/form_validate.jpg",
    language: "javascript",
    code_link: "https://github.com/Suraj2017-cse/Form_Validate",
    live_link: "https://validate-form2.netlify.app/",
  },
  {
    id: 3,
    title: "Health Plan",
    description: "This is a project description",
    img_link: "asset/images/cairovision.jpg",
    language: "react",
    code_link: "https://github.com/Suraj2017-cse/cairo_vision",
    live_link: "https://cairovision.netlify.app/",
  },
  {
    id: 4,
    title: "Ascent Task",
    description: "",
    img_link: "asset/images/ascent.png",
    language: "HTML & CSS(Frameworks)",
    code_link: "https://github.com/Suraj2017-cse/Ascent_Task",
    live_link: "https://ascent2.netlify.app/",
  },
  {
    id: 5,
    title: "BSEB Online",
    description: "",
    img_link: "asset/images/bseb.png",
    language: "HTML & CSS(Frameworks)",
    code_link: "https://github.com/Suraj2017-cse/BSEB",
    live_link: "https://bseb.netlify.app/",
  },
  {
    id: 6,
    title: "HRS Hi Tech",
    description: "",
    img_link: "asset/images/hrs-hi.png",
    language: "HTML & CSS(Frameworks)",
    code_link: "https://github.com/Suraj2017-cse/hrs-hi-tech-task",
    live_link: "https://hrs-hi-tech.netlify.app/",
  },
  {
    id: 7,
    title: "D-Mart Clone",
    description: "",
    img_link: "asset/images/mart.png",
    language: "HTML & CSS(Frameworks)",
    code_link: "https://github.com/Suraj2017-cse/DmartClone",
    live_link: "https://dmartclone.netlify.app/index.html",
  },
  {
    id: 8,
    title: "TradeG Task",
    description: "",
    img_link: "asset/images/tradeG.png",
    language: "HTML & CSS(Frameworks)",
    code_link: "https://github.com/Suraj2017-cse/tradeG",
    live_link: "https://tradeg2.netlify.app/",
  },
  {
    id: 9,
    title: "Dram sounds",
    description: "",
    img_link: "asset/images/dram-sound.png",
    language: "javascript",
    code_link: "https://replit.com/@sahsuraj/DramSong",
    live_link: "https://dramsong.sahsuraj.repl.co/",
  },
  {
    id: 10,
    title: "Dices Game",
    description: "",
    img_link: "asset/images/dicess.png",
    language: "javascript",
    code_link: "https://replit.com/@sahsuraj/Dicee",
    live_link: "https://dicee.sahsuraj.repl.co/",
  },
  // {
  //   id: 10,
  //   title: "",
  //   description: "",
  //   img_link: "asset/images/",
  //   language: "",
  //   code_link: "",
  //   live_link: "",
  // },
  // {
  //   id: 10,
  //   title: "",
  //   description: "",
  //   img_link: "asset/images/",
  //   language: "",
  //   code_link: "",
  //   live_link: "",
  // },
  // {
  //   id: 10,
  //   title: "",
  //   description: "",
  //   img_link: "asset/images/",
  //   language: "",
  //   code_link: "",
  //   live_link: "",
  // },
];

export {
  NavLinksItem,
  SocialMediaLinks,
  EducationData,
  CertificationData,
  Skillset,
  Projects_Data,
};
