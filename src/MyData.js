import {
  BsLinkedin,
  BsGithub,
  BsInstagram,
  BsFacebook,
} from "react-icons/bs";

// Nav Links Item Component
const NavLinksItem = [
    {
        id : 1,
        name : 'About',
    },
    {
        id : 2,
        name : 'Education',
    },
    {
        id : 3,
        name : 'Skills',
    },
    {
        id : 4,
        name : 'Hobbies',
    },
    {
        id : 5,
        name : 'Certifications',
    },
    {
        id : 6,
        name : 'Projects',
    },
    //  {
    //     id : 4,
    //     name : 'About',
    // },
]

// Social Media Links
const SocialMediaLinks = [
    {
        id : 1,
        name : 'Github',
        url : 'https://github.com/Suraj2017-cse',
        icon : <BsGithub />
    },
    {
        id : 2,
        name : 'Linkedin',
        url : 'https://www.linkedin.com/in/sahsuraj/',
        icon : <BsLinkedin />
    },
    {
        id : 3,
        name : 'Instagram',
        url : 'https://www.instagram.com/sahsuraj1/',
        icon : <BsInstagram />
    },
    {
        id : 4,
        name : 'Facebook',
        url : 'https://www.facebook.com/sahsuraj01',
        icon : <BsFacebook />

    }
] 

// Education Details 
const EducationData = [
    {
        id : 1,
        organisation : 'RKDF UNIVERSITY',
        stream : 'DIPLOMA',
        branch : 'Computer Science & Engineering',
        marks : '7.27',
        duration: 'August 2017 - June-2020'
    },
    {
        id : 2,
        organisation : 'BSEB PATNA',
        stream : '10 WITH ALL SUBJECTS',
        branch : '',
        marks : '58.40',
        duration: 'April 2015 - May 2017'
    }
]

// Certification Details
const CertificationData = [
    {
        id : 1,
        organisation : 'Naresh i technologies',
        course: 'UI technologies',
        duration: 'April 2020 - June-2020'
    }
]

// Skill Details
const Skillset = [
    {
        id : 1,
        name : 'fa-brands fa-html5',
        title: 'HTML'
    },
    {
        id : 2,
        name : 'fa-brands fa-css3-alt',
        title: 'CSS'
    },
    {
        id : 3,
        name : 'fa-brands fa-square-js',
        title: 'JavaScript'
    },
    {
        id : 4,
        name : 'fa-brands fa-sass' ,
        title: 'Sass'
    },
    {
        id : 5,
        name : 'fa-brands fa-bootstrap',
        title: 'Bootstrap'
    },
    {
        id : 6,
        name : 'devicon-tailwindcss-plain',
        title: 'Tailwind CSS'
    },
    {
        id : 7,
        name : 'fa-brands fa-react',
        title: 'React'
    },
    {
        id : 8,
        name : 'devicon-materialui-plain',
        title: 'Material UI'
    },
    {
        id : 9,
        name : 'fa-brands fa-github',
        title: 'github'
    },
    {
        id : 10,
        name : 'fa-brands fa-git-alt',
        title: 'git'
    },
    {
        id : 11,
        name : 'fa-brands fa-ubuntu',
        title: 'Ubuntu'
    },
    {
        id : 12,
        name : 'fa-brands fa-windows',
        title: 'Window'
    }
]

// Projects Details
const Projects_Data = [
    {
        id : 1,
        title : 'Hotel Room',
        description : 'This is a Hotel Room Booking app that allows you to book a Room for your business, travel, and meetings',
        img_link : 'asset/image/helite.jpg',
        github_link : 'https://github.com/Suraj2017-cse/h-elite',
        live_link : 'https://helite.netlify.app/index.html'
    },
    {
        id : 2,
        title : 'Form validation',
        description : 'This is a project description',
        img_link : 'asset/image/form_validate.jpg',
        github_link : 'https://github.com/Suraj2017-cse/Form_Validate',
        live_link : 'https://validate-form2.netlify.app/'
    },
    {
        id : 3,
        title : 'Health Plan',
        description : 'This is a project description',
        img_link : 'asset/image/cairovision.jpg',
        github_link : 'https://github.com/Suraj2017-cse/cairo_vision',
        live_link : 'https://cairovision.netlify.app/'
    },
]

export {NavLinksItem, SocialMediaLinks, EducationData, CertificationData, Skillset, Projects_Data};