import { createSlice } from "@reduxjs/toolkit";
import { FaTelegram, FaLinkedinIn } from "react-icons/fa";
import jovidAvatar from "../../assets/avatar/jovid.jpg";
import { MdOutlineSchool, MdWorkOutline } from "react-icons/md";
import { FiGithub } from "react-icons/fi";

const initialState = [
  {
    name: "Jovid Masharipov",
    profession: "Front-End",
    contact: "https://t.me/+992881070990",
    userAvatar: jovidAvatar,
    social: [
      {
        id: 1,
        icon: <FaTelegram />,
        href: "https://t.me/+992881070990",
      },
      {
        id: 2,
        icon: <FiGithub />,
        href: "https://github.com/jovid1242",
      },
      {
        id: 3,
        icon: <FaLinkedinIn />,
        href: "https://t.me/+992881070990",
      },
    ],
    aboutMe:
      "I am Bolby Doe, web developer from London, Russian and Tajikistan. I have rich experience in web site design and building and customization, also I am good at React.js",
    cv: "https://t.me/+992881070990",
    skills: [
      {
        id: 1,
        title: "JavaScript",
        color: "warning",
        progress: "10",
      },
      {
        id: 2,
        title: "React",
        color: "danger",
        progress: "90",
      },
      {
        id: 3,
        title: "Next",
        color: "primary",
        progress: "60",
      },
    ],
    experience: {
      work: [
        {
          id: 1,
          icon: <MdOutlineSchool />,
          start: "2021-04-01",
          end: "2021-11-03",
          title: "Web Studio BO/BO",
          info: "Web and crm depelopt in studio",
        },
        {
          id: 2,
          icon: <MdOutlineSchool />,
          start: "2021-11-06",
          end: "Настоящее время",
          title: "Repost Space",
          info: "developed",
        },
      ],
      studies: [
        {
          id: 1,
          icon: <MdWorkOutline />,
          start: "2020",
          end: "2025",
          title: "ТПГУ",
          info: "Computer Science and English",
        },
      ],
    },
    projects: {
      completed: 8,
      coffee: 2341,
      code: 43788,
      yearsExperience: 1.3,
    },
    skillsMe: [
      {
        id: 1,
        title: "JavaScript",
        color: "bg-yellow",
        icon: "https://img.icons8.com/ios/2x/javascript.png",
      },
      {
        id: 2,
        title: "React",
        color: "bg-blue",
        icon: "https://img.icons8.com/color/2x/react-native.png",
      },
      {
        id: 3,
        title: "Next",
        color: "bg-dark",
        icon: "https://static-00.iconduck.com/assets.00/next-dot-js-icon-96x96-0v0zvdwz.png",
      },
      {
        id: 4,
        title: "Redux-toolkit",
        color: "bg-pink",
        icon: "https://img.icons8.com/color/2x/redux.png",
      },
      {
        id: 5,
        title: "Scss",
        color: "bg-pink",
        icon: "https://img.icons8.com/ios/2x/sass.png",
      },
      {
        id: 6,
        title: "Node",
        color: "bg-blue",
        icon: "https://img.icons8.com/color/2x/nodejs.png",
      },
      {
        id: 7,
        title: "Bootstrap",
        color: "bg-pink",
        icon: "https://img.icons8.com/color/2x/bootstrap.png",
      },
    ],
    works: [
      {
        id: 1,
        title: "darova",
        href: "https://www.programmerszone.ae/wp-content/uploads/2021/10/programming-evolution.jpg",
        image:
          "https://www.programmerszone.ae/wp-content/uploads/2021/10/programming-evolution.jpg",
      },
      {
        id: 2,
        title: "hello bro",
        href: "https://www.programmerszone.ae/wp-content/uploads/2021/10/programming-evolution.jpg",
        image:
          "https://www.programmerszone.ae/wp-content/uploads/2021/10/programming-evolution.jpg",
      },
      {
        id: 3,
        title: "hello bro",
        href: "https://www.programmerszone.ae/wp-content/uploads/2021/10/programming-evolution.jpg",
        image:
          "https://www.programmerszone.ae/wp-content/uploads/2021/10/programming-evolution.jpg",
      },
      {
        id: 4,
        title: "hello bro",
        href: "https://www.programmerszone.ae/wp-content/uploads/2021/10/programming-evolution.jpg",
        image:
          "https://www.programmerszone.ae/wp-content/uploads/2021/10/programming-evolution.jpg",
      },
      {
        id: 5,
        title: "hello bro",
        href: "https://www.programmerszone.ae/wp-content/uploads/2021/10/programming-evolution.jpg",
        image:
          "https://www.programmerszone.ae/wp-content/uploads/2021/10/programming-evolution.jpg",
      },
      {
        id: 6,
        title: "hello bro",
        href: "https://www.programmerszone.ae/wp-content/uploads/2021/10/programming-evolution.jpg",
        image:
          "https://www.programmerszone.ae/wp-content/uploads/2021/10/programming-evolution.jpg",
      },
    ],
  },
  {
    name: "Navruz Dalerovich",
    profession: "Front-End",
    contact: "https://t.me/+992881070990",
    userAvatar: jovidAvatar,
    social: [
      {
        id: 1,
        icon: <FaTelegram />,
        href: "https://t.me/+992881070990",
      },
      {
        id: 2,
        icon: <FiGithub />,
        href: "https://github.com/jovid1242",
      },
      {
        id: 3,
        icon: <FaLinkedinIn />,
        href: "https://t.me/+992881070990",
      },
    ],
    aboutMe:
      "I am Bolby Doe, web developer from London, Russian and Tajikistan. I have rich experience in web site design and building and customization, also I am good at React.js",
    cv: "https://t.me/+992881070990",
    skills: [
      {
        id: 1,
        title: "JavaScript",
        color: "warning",
        progress: "10",
      },
      {
        id: 2,
        title: "React",
        color: "danger",
        progress: "90",
      },
      {
        id: 3,
        title: "Next",
        color: "primary",
        progress: "60",
      },
    ],
    experience: {
      work: [
        {
          id: 1,
          icon: <MdOutlineSchool />,
          start: "2021-04-01",
          end: "2021-11-03",
          title: "Web Studio BO/BO",
          info: "Web and crm depelopt in studio",
        },
        {
          id: 2,
          icon: <MdOutlineSchool />,
          start: "2021-11-06",
          end: "Настоящее время",
          title: "Repost Space",
          info: "developed",
        },
      ],
      studies: [
        {
          id: 1,
          icon: <MdWorkOutline />,
          start: "2020",
          end: "2025",
          title: "ТПГУ",
          info: "Computer Science and English",
        },
      ],
    },
    projects: {
      completed: 8,
      coffee: 2341,
      code: 43788,
      yearsExperience: 1.3,
    },
    skillsMe: [
      {
        id: 1,
        title: "JavaScript",
        color: "bg-yellow",
        icon: "https://img.icons8.com/ios/2x/javascript.png",
      },
      {
        id: 2,
        title: "React",
        color: "bg-blue",
        icon: "https://img.icons8.com/color/2x/react-native.png",
      },
      {
        id: 3,
        title: "Next",
        color: "bg-dark",
        icon: "https://static-00.iconduck.com/assets.00/next-dot-js-icon-96x96-0v0zvdwz.png",
      },
      {
        id: 4,
        title: "Redux-toolkit",
        color: "bg-pink",
        icon: "https://img.icons8.com/color/2x/redux.png",
      },
      {
        id: 5,
        title: "Scss",
        color: "bg-pink",
        icon: "https://img.icons8.com/ios/2x/sass.png",
      },
      {
        id: 6,
        title: "Node",
        color: "bg-blue",
        icon: "https://img.icons8.com/color/2x/nodejs.png",
      },
      {
        id: 7,
        title: "Bootstrap",
        color: "bg-pink",
        icon: "https://img.icons8.com/color/2x/bootstrap.png",
      },
    ],
    works: [
      {
        id: 1,
        title: "darova",
        href: "https://www.programmerszone.ae/wp-content/uploads/2021/10/programming-evolution.jpg",
        image:
          "https://www.programmerszone.ae/wp-content/uploads/2021/10/programming-evolution.jpg",
      },
      {
        id: 2,
        title: "hello bro",
        href: "https://www.programmerszone.ae/wp-content/uploads/2021/10/programming-evolution.jpg",
        image:
          "https://www.programmerszone.ae/wp-content/uploads/2021/10/programming-evolution.jpg",
      },
      {
        id: 3,
        title: "hello bro",
        href: "https://www.programmerszone.ae/wp-content/uploads/2021/10/programming-evolution.jpg",
        image:
          "https://www.programmerszone.ae/wp-content/uploads/2021/10/programming-evolution.jpg",
      },
      {
        id: 4,
        title: "hello bro",
        href: "https://www.programmerszone.ae/wp-content/uploads/2021/10/programming-evolution.jpg",
        image:
          "https://www.programmerszone.ae/wp-content/uploads/2021/10/programming-evolution.jpg",
      },
      {
        id: 5,
        title: "hello bro",
        href: "https://www.programmerszone.ae/wp-content/uploads/2021/10/programming-evolution.jpg",
        image:
          "https://www.programmerszone.ae/wp-content/uploads/2021/10/programming-evolution.jpg",
      },
      {
        id: 6,
        title: "hello bro",
        href: "https://www.programmerszone.ae/wp-content/uploads/2021/10/programming-evolution.jpg",
        image:
          "https://www.programmerszone.ae/wp-content/uploads/2021/10/programming-evolution.jpg",
      },
    ],
  },
];

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = userSlice.actions;

export default userSlice.reducer;
