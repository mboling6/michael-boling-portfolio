import {
  robot,
  netflix,
  youtube,
  skillswapper,
  skillswap,
  github,
  appstore,
  bedtimeai,
  mui,
  c,
  cplusplus,
  python,
  java,
  matlab,
  postgresql,
  slalom,
  flaire,
  flock,
  gt,
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  nodejs,
  mongodb,
  git,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },

];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: mobile,
  },
  {
    title: "Learner",
    icon: backend,
  },
  {
    title: "Engineer",
    icon: creator,
  },
];

const technologies = [
  /*
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  */
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Material UI",
    icon: mui,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "C", 
    icon: c,
  },
  {
    name: "C++",
    icon: cplusplus,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  // {
  //   name: "MATLAB",
  //   icon: matlab,
  // },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },

  //POTENTIALLY ADD MORE and uncomment the commented ones if figure out rendering problem

];

const experiences = [
  {
    title: "Researcher/Software Engineer",
    company_name: "Georgia Tech Research Institute",
    icon: gt,
    iconBg: "#383E56",
    date: "May 2021 - August 2021",
    points: [
       "Designed and implemented algorithms for Maritime-based collaborative unmanned aerial, surface, and underwater vehicles.",
       "Programmed 20+ plugins for multidomain sea floor mapping environment in SCRIMMAGE robotics sim using C++/ROS.",
       "Utilized radiometric sensor model plugins to simulate data from LIDAR, Radar, IMU, GNSS, and Camera sensor-types.",
    ],
  },
  {
    title: "Mechanical Engineer",
    company_name: "Flock Safety",
    icon: flock,
    iconBg: "#FFFFFF", //was "#E6DEDD"
    date: "May 2022 - Aug 2022",
    points: [
      "Evaluated and streamlined manufacturing, distribution, and installation practices for license plate-detecting camera casing.",
      "Designed and tested prototype for multipart product, managed order of over $150,000 for mass-production and manufacture.",
    ],
  },
  {
    title: "Frontend Software Engineer",
    company_name: "Flaire",
    icon: flaire,
    iconBg: "#383E56",
    date: "Aug 2022 - Nov 2022",
    points: [
      "Frontend developer utilizing TypeScript with React.js and MaterialUI to create webapp aimed to revolutionize travel.",
      "Involved in beta testing and utilization of agile development to meet strict completion deadline for 100s of users on waitlist.",
    ],
  },
  {
    title: "Full-stack Software Engineer",
    company_name: "Slalom",
    icon: slalom,
    iconBg: "#E6DEDD",
    date: "May 2023 - July 2023",
    points: [
       "Full-stack software developer and consultant working with multi-billion-dollar revenue client in agile, cross-functional team environment on data exchange portal for their data scientists/engineers.",
       "Frontend: Developed multiple components and features for intuitive and stunning UI using React.js, Typescript, and Redux.",
       "Backend: Created numerous endpoints for API framework interacting with databases (PostgreSQL and DynamoDB) and AWS microservices using Python (Flask, SQLAlchemy, Boto3).",
    ],
  },
];

//not used anymore
const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "BedtimeAI",
    description:
      "A mobile app that uses the latest AI technology to create custom stories with beautiful pictures. Very useful for parents wanting to quickly generate unique bedtime stories for their kids or even discover stories made by other users. Sold to investor in September, 2023.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "dall-e",
        color: "green-text-gradient",
      },
      {
        name: "gpt-3",
        color: "pink-text-gradient",
      },
    ],
    image: bedtimeai,
    host_logo: appstore, //change this to host_logo: appstore
    source_code_link: "https://apps.apple.com/us/app/bedtimeai-bedtime-stories/id1659701852",
  },
  {
    name: "Autonomous Task-Completing Robot",
    description:
      "Designed and fabricated a fully autonomous robot using SOLIDWORKS, 3D printing, laser cutters, and woodworking. Programmed control flow of motors, solenoids, and pneumatics in C++ using Arduino controller and library functions. Placed 2nd out of 11 teams in head-to-head style design competition over multiple rounds.",
    tags: [
      {
        name: "c++",
        color: "blue-text-gradient",
      },
      {
        name: "arduino",
        color: "green-text-gradient",
      },
      {
        name: "robotics",
        color: "pink-text-gradient",
      },
    ],
    image: robot,
    host_logo: youtube,
    source_code_link: "https://youtube.com/shorts/pYwMyf0vbbo",
  },
  // {
  //   name: "SkillSwapper",
  //   description:
  //     "Web application that enables users to search for other users with skills they want to learn, make posts, and setup times to exchange skills and grow. (WIP)",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "nodejs",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "mongodb",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: skillswap,
  //   host_logo: github,
  //   source_code_link: "https://github.com/",
  // },
  {
    name: "Netflix Clone",
    description:
      "A clone of the popular Netflix webapp",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: netflix,
    host_logo: github,
    source_code_link: "https://github.com/mboling6/netflix-clone",
  },
];

export { services, technologies, experiences, testimonials, projects };
