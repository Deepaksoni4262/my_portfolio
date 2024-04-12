/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

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
  username: "Deepak Kumar Soni",
  title: "Hello Everyone, Deepak Here",
  subTitle: emoji(
    //"A passionate Full Stack Software Developer 🚀 having an experience of building Web  applications with Spring / Spring Boot / SQL / AWS / Spring Securities / React Js / Angular and some other cool libraries and frameworks."

    "Experienced software engineer with a passion for developing innovative Software's that expedite the efficiency and effectiveness of organizational success. Well-versed in technology and writing code to create systems that are reliable and user-friendly. Skilled leader who has the proven ability to motivate, educate, and manage a team of professionals to build software programs and effectively track changes. Confident communicator, strategic thinker, and innovative. Develop software that is customized to meet a company’s organizational needs, highlight their core competencies, and further their success. An aspiring software engineer with knowledge in software engineering practices such as coding, testing, code reviews, code comments, etc. Strong ability to communicate with clients and ability to express ideas clearly and concisely"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Deepaksoni4262",
  linkedin: "https://www.linkedin.com/in/deepak-soni-111b2219b/",
  gmail: "deepaksoni5223@gmail.com",
  facebook: "https://www.facebook.com/saad.pasta7",
  Instagram: "https://www.instagram.com/ii__deep__?igsh=NXIzNjZ1a2F5Y3F2",
   // gitlab: "https://gitlab.com/saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Back end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Development for enterprise application "),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean /Heroku /Hostinger"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Spring",
      fontAwesomeClassname: "fa fa-microchip"
    },
    {
      skillName: "Spring Boot",
      fontAwesomeClassname: "fas fa-seedling"
    },
    {
      skillName: "Mockito",
      fontAwesomeClassname: "fa fa-life-ring"
    },
    {
      skillName: "Junit",
      fontAwesomeClassname: "fa fa-cubes"
    },
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
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "angular",
      fontAwesomeClassname: "fab fa-angular"
    }, {
      skillName: "node",
      fontAwesomeClassname: "fab fa-node"
    },
   
  
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Sagar Institute Of Researh & Technology",
      logo: require("./assets/images/sirtLogo.jpg"),
      subHeader: "Betchlor of Technology in Computer Science",
      duration: "April 2018 - May 2022",
      desc: "Participated in the research of many Web Based Projects And Coding Competetion",
      descBullets: [
        "8.4 CGPA",
      ]
    }
    // {
    //   schoolName: "Stanford University",
    //   logo: require("./assets/images/stanfordLogo.png"),
    //   subHeader: "Bachelor of Science in Computer Science",
    //   duration: "September 2013 - April 2017",
    //   desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    //   descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    // }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "API Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend Development",
      progressPercentage: "90%"
    },
    {
      Stack: "AWS",
      progressPercentage: "60%"
    },
    {
      Stack: "UI Development/Design",
      progressPercentage: "70%"
    },
    {
      Stack: "Database",
      progressPercentage: "85%"
    },
    {
      Stack: "Deployment",
      progressPercentage: "55%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Trainee Consultant",
      color:'red',
      company: "Netlink Software",
      companylogo: require("./assets/images/netlinkLogo.jpg"),
      date: "Dec 2021 – June 2022",
      desc: "Explore Java web development frameworks such as Java EE or Spring Framework (Spring MVC, Spring Boot). Understand the MVC architecture, dependency injection, aspect-oriented programming (AOP), and building RESTful APIs..",
      descBullets: [
        "Build Tools and Dependency Management",
        "Version Control",
        "Software Development Life Cycle",
        "IDE Proficiency such as IntelliJ- Idea , Postman , GIT , Bitbucket"
      ]
    },
    {
      role: "ASE L1",
      color:'green',
      company: "Netlink Software",
      companylogo: require("./assets/images/netlinkLogo.jpg"),
      date: "July 2022 – Aprail 2023",
      desc: " Worked as full time Java full stack software developer , Write clean, efficient, and maintainable code following coding standards and best practices.Collaborate with team members to design, develop, test, and deploy software solutions.Implement new features, enhancements, and bug fixes based on requirements and specifications.Use version control systems (e.g., Git) to manage code changes and many other framework and libraries. Such as JIRA , KANBAN "
    },
    {
      role: "ASE L2",
      color:'blue',
      company: "Netlink Software",
      companylogo: require("./assets/images/netlinkLogo.jpg"),
      date: "May 2023 – Current",
      desc: " Analyze and troubleshoot technical issues, bugs. Work closely with business analysts, product owners, and stakeholders to understand project requirements .Write and execute unit tests, integration test to ensure software quality .Participate in code reviews to identify defects,Stay updated with emerging technologies,  and industry trends.Adhere to software development methodologies, such as Agile, Scrum, or Kanban.Follow organizational coding standards,  and quality assurance processes . Keep the end-user in mind while developing software solutions. "
    }
    
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME PRODUCT'S AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images//sxmcv.png"),
      projectName: "Sirius XM Connected Vehicle",
      projectDesc: "This project is made to provide various services to the user (Vehicle Owner) such as a suite of safety, security, and convenience services including automatic crash notification, enhanced roadside assistance, remote door unlock, remote start, stolen vehicle recovery. Contains 7 microservice's include spring cloud gateway to provide specific route's Job , in this project I  Developed async api end to end , Writing test cases for api's by latest testing framework such as Junit5 , Mockito",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.siriusxmcvs.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/download.jpg"),
      projectName: "Blossom EMR",
      projectDesc: "Blossom Children's Center is an interdisciplinary clinic specialized in early intervention for children with autism spectrum disorder and special needs. Our team includes BCBAs, Speech Language Pathologists and Occupational Therapists. In this project we have developed the product for Blossom's and provide the dynamic functionality of arranging session's for the children's who are mentally or physically challanged , I developed the latest OAUTH 2 spring securities with microservice architecture and and authorization for role based access , and many  other module's",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://blossomchildrenscenter.com/"
        }
      ]
    }
    ,
    {
      image: require("./assets/images/net-erp.png"),
      projectName: "HRMS NET-ERP",
      projectDesc: "is a human resources management software that offers various features and functionalities to streamline HR processes within organizations. The software provides a range of tools to manage employee data, attendance, leave management, payroll processing, performance evaluation, and many more functionalities such as Employee Data Management , Leave Management , Attendence Management , Payroll Processing , Performance Management , Recruitment and Onboarding , Employee Self-Service ,Analytics and Reporting ,Integration Capabilities",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://netlink.com/erp-solutions/"
        }
      ]
    }
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Best Employee of the team",
      subtitle:
        "First employee to get best employeee of the team award",
      image: require("./assets/images/netlink award.jpg"),
      imageAlt: "best empoyee logo",
      footerLink: [
    
        {
          name: "Award latter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        }
      ]
    },
    {
      title: "C / C++",
      subtitle:
        "Certified C and C++ programmer",
      image: require("./assets/images/sca.png"),
      imageAlt: "SCA logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "MERN  stack Developer",
      subtitle: "Udemy certified MERN stack developer",
      image: require("./assets/images/udemy.png"),
      imageAlt: "Udemy Logo",
      footerLink: [
        {name: "Certification", url: ""},
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Why Javs is the best",
      description:
        "coming soon..."
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Nuts and Bolts of java full stack development",
      description:
        "coming soon..."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8602212873",
  email_address: "deepaksoni5223@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
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
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
