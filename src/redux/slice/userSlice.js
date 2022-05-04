import { createSlice } from "@reduxjs/toolkit";
import { FaTelegram, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineSchool, MdWorkOutline } from "react-icons/md";
import { FiGithub } from "react-icons/fi";

const initialState = [
  {
    name: "Jovid Masharipov",
    profession: "Front-End",
    contact: "https://t.me/+992881070990",
    userAvatar:
      "http://html.phoenixcoded.net/bolby/angular/assets/images/avatar-2.svg",
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
        color: "bg-blue",
        progress: "10",
        info: "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
      },
      {
        id: 2,
        title: "React",
        color: "bg-yellow",
        progress: "90",
        info: "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
      },
      {
        id: 3,
        title: "Next",
        color: "bg-pink",
        progress: "60",
        info: "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
      },
    ],
  },
  {
    name: "Navruzshoh Daleri",
    profession: "Frontend Developer",
    userAvatar:
      "http://html.phoenixcoded.net/bolby/angular/assets/images/avatar-2.svg",
    social: [
      {
        tg: "https://t.me/+992881070990",
      },
      {
        fb: "https://t.me/+992881070990",
      },
      {
        in: "https://t.me/+992881070990",
      },
    ],
    aboutMe: "lorem*5",
    cv: "https://t.me/+992881070990",
    skills: [
      {
        title: "JavaScript",
      },
      {
        title: "React",
      },
      {
        title: "Next",
      },
    ],
    experience: [
      {
        start: "2020",
        and: "2022",
        title: "Repost Space",
        info: "sdjcksdcnjkdsc  scjsn",
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
