import emoji from "react-easy-emoji";

export const greeting = {
  username: "Sung Joon Ahn",
  title: "안성준",
  subTitle: emoji("안되면 되게하라"),
  role: "Full stack",
  resumeLink: "Your resume link... google drive or something else",
  // IMPORTANT
  // If you don't want to show this, change view to false. DO NOT DELETE!
  view: true
};

export const socialMediaLinks = {
  // IMPORTANT
  // if you don't have, change value to blank or false!! DO NOT DELETE!
  github: "https://github.com/dkstjdwns114",
  linkedin: "",
  email: "sungjoon256@gmail.com",
  facebook: "",
  twitter: "",
  instagram: "https://www.instagram.com/ahn___e/",
  medium: "",
  stackoverflow: ""
};

export const skills = {
  title: emoji("I Can Do"),
  subTitle: "",
  describeSkills: [
    emoji("✔ JSP 사용 가능"),
    emoji("✔ MariaDB, MongoDB 사용 가능"),
    emoji("✔ REST API, Graphql 사용 가능"),
    emoji("✔ Django 사용 가능"),
    emoji("✔ Java, Python, Kotlin, C, C++ 등 다양한 서버언어 사용 가능"),
    emoji("✔ React, Node, Graphql, MongoDB 연동 가능"),
    emoji("✔ AWS, Linux 사용경험")
  ],
  // IMPORTANT
  // You need to find className for font-awesome icon
  // Go to https://fontawesome.com/ and search icon
  lists: [
    { fontAwesome: "fab fa-react", text: "React", proficiency: 85 },
    { fontAwesome: "fab fa-js", text: "JS", proficiency: 85 },
    { fontAwesome: "fab fa-java", text: "Java", proficiency: 80 },
    { fontAwesome: "fab fa-node-js", text: "Node.js", proficiency: 60 },
    { fontAwesome: "fab fa-python", text: "Python", proficiency: 60 },
    { fontAwesome: "fab fa-html5", text: "HTML5", proficiency: 50 },
    { fontAwesome: "fas fa-copyright", text: "C, C++", proficiency: 40 },
    { fontAwesome: "fab fa-css3-alt", text: "CSS3", proficiency: 40 },
    { fontAwesome: "fab fa-aws", text: "AWS", proficiency: 35 },
    { fontAwesome: "fab fa-linux", text: "Linux", proficiency: 35 }
  ],
  view: true
};

export const experience = {
  title: "Work Experience",
  lists: [
    {
      date: "test",
      company: "test",
      role: "test"
    }
  ],
  view: true
};

export const openSourceProjects = {
  title: emoji("Open Source Projects 💻"),
  view: true
};

export const projects = {
  title: emoji("Projects 💻"),
  subTitle: "",
  lists: [
    {
      title: "Instagram Clone Coding",
      desc:
        "React.js, Node.js, MongoDB, Graphql 을 사용하여 제작한 인스타그램 클론코딩",
      url: "https://github.com/dkstjdwns114/Instagram_Clone"
    },
    {
      title: "Pinterest Clone Coding",
      desc: "Django를 사용하여 제작한 핀터레스트 클론코딩",
      url: "https://github.com/dkstjdwns114/clone_pinterest"
    },
    {
      title: "HotelsCombined Clone Coding",
      desc: "JSP, Maven, MariaDB를 사용하여 제작한 호텔스컴바인 클론코딩",
      url: "https://github.com/dkstjdwns114/Hotelscombined-Clone"
    }
  ],
  view: true
};

export const achievements = {
  title: emoji("Achievements And Certifications 🏆"),
  subTitle: "subtitle for achievement",
  lists: [
    {
      img: require("./assets/sad-icon.png"),
      alt: "I'm sad..",
      title: "There is no Achievement...😥",
      desc: "I'll try harder!"
    },
    {
      img: require("./assets/sad-icon.png"),
      alt: "I'm sad..",
      title: "There is no Certification...😥",
      desc: "I'll try harder!"
    }
  ],
  view: true
};

export const blogs = {
  title: emoji("My Posts 📰"),
  subTitle: "subtitle for posts",
  lists: [
    {
      title: "Your Post1",
      desc: "Description",
      url: "#"
    },
    {
      title: "Your post2",
      desc: "Description",
      url: "#"
    }
  ],
  view: true
};

export const contactInfo = {
  title: "Contact To Me! 📞",
  subTitle: "",
  introduce: emoji("sungjoon256@gmail.com"),
  view: true
};
