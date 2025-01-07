

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Yatharth Mishra",
  title: "Hi all, I'm Yatharth",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/123AnfclrUWaBp_FbY3YOmTEAIeo69EWc/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Yatharth2609",
  linkedin: "https://www.linkedin.com/in/yatharth-mishra-03429a18b/",
  gmail: "yatharth.mishra2002@gmail.com",
  gitlab: "https://gitlab.com/Yatharth2609",
  stackoverflow: "https://stackoverflow.com/users/29087047/yatharth-mishra",
  twitter: "https://gitlab.com/Yatharth2609",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],


  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nextjs",
      fontAwesomeClassname: "fab fa-react" // Adjusted since there's no specific icon for Next.js
    },
    {
      skillName: "react-native",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "expressjs",
      fontAwesomeClassname: "fas fa-server" // Generic icon due to lack of specific Express.js icon
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "mongoDB",
      fontAwesomeClassname: "fas fa-leaf"
    },
    {
      skillName: "tailwindCSS",
      fontAwesomeClassname: "fab fa-css3-alt" // CSS icon, as TailwindCSS doesn't have a specific one
    },
    {
      skillName: "typescript",
      fontAwesomeClassname: "fab fa-js" // Generic icon for TypeScript
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "GLA University",
      logo: require("./assets/images/GLA_University_logo (1).png"),
      subHeader: "Bachelors of Technology in Computer Science",
      duration: "September 2021 - May 2025",
      desc: "Participated in the various hackathons and workshops.",
      descBullets: [
        "Top 30 Finalist of Smart India Hackathin 2023",
        "Finance Head at Codebuster Club GLAU"
      ]
    },
    {
      schoolName: "Subha Niketan",
      logo: require("./assets/images/subha_niketan.png"),
      subHeader: "High School",
      duration: "July 2019 - August 2021",
      desc: "Participated in debates and hosted Farewell 2k20",
      descBullets: ["Won Science Exhibition Contest"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "85%"
    },
    {
      Stack: "Programming",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: true
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
  //  {
  //     role: "Software Engineer",
  //     company: "Facebook",
  //     companylogo: require("./assets/images/facebookLogo.png"),
  //     date: "June 2018 – Present",
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //     descBullets: [
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  //     ]
  //   }, 
  ]
};

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};


const bigProjects = {
  title: "Big Projects",
  projects: [
    {
      image: require("./assets/images/imaginify.png"),
      projectName: "Imaginify",
      projectDesc: "An AI based SaaS Web Apllication",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://imagify-saas-application.vercel.app/"
        }

      ]
    },
    {
      image: require("./assets/images/viscon.png"),
      projectName: "VISCON",
      projectDesc: "A Web Based Video conferencing Application",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://viscon-video-conferencing-app-yatharth-mishras-projects.vercel.app/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  achievementsCards: [
    {
      title: "IBM Full Stack Software Developer",
      image: require("./assets/images/IBM.png"),
      imageAlt: "IBM Full Stack Software Developer",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/specialization/certificate/HMQEZSQNQYF7"
        },
      ]
    },
    {
      title: "Alpha (DSA)",
      image: require("./assets/images/apna_college.jpg"),
      imageAlt: "Alpha (DSA)",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1oGUiKyFNxYJltCTc1A1kXht7-65CKGgB/view?usp=sharing"
        }
      ]
    },

    {
      title: "CDAC Cloud Computing",
      image: require("./assets/images/cdac_logo.png"),
      imageAlt: "CDAC Cloud Computing",
      footerLink: [
        {name: "Certification", url: "https://drive.google.com/file/d/1q8lfAeDZGLTsvhr93OU91zMQ-m6rBhVm/view?usp=sharing"},
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-7483958231",
  email_address: "yatharth.mishra2002@gmail.com",
  display: true,
};

// Twitter Section

const twitterDetails = {
  userName: "Yatharth94350343", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
