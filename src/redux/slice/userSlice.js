import { createSlice } from "@reduxjs/toolkit";
import { FaTelegram, FaLinkedinIn } from "react-icons/fa";
import jovidAvatar from "../../assets/avatar/jovid.jpg";
import { MdOutlineSchool, MdWorkOutline } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import navruzAva from "../../img/avatar-navruz.png";
import { IoLogoJavascript } from "react-icons/io";

const initialState = [
  {
    name: "Jovid Masharipov",
    profession: "Front-End разработчик",
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
        href: "https://www.instagram.com/jovid1242/",
      },
    ],
    aboutMe:
      "Привет, меня зовут Джовид. Я фронтенд разработчик. Есть 1.2 год коммерческий опыта , Уже как год 2 прошло на изучение фронтенда - .Успел освоить: - адаптивную верстку; - работа с объектами, асинхронный JS, работа с DOM, localStorage; - Material UI, Bootstrap; - React, Redux, REST API; - Препроцессор SASS; - Node.js; -Express.js; -MongoDB;.",
    cv: "https://t.me/+992881070990",
    skills: [
      {
        id: 1,
        title: "JavaScript",
        color: "warning",
        progress: "75",
      },
      {
        id: 2,
        title: "React",
        color: "danger",
        progress: "67",
      },
      {
        id: 3,
        title: "Next",
        color: "primary",
        progress: "30",
      },
    ],
    experience: {
      work: [
        {
          id: 1,
          icon: <MdOutlineSchool />,
          start: "2020",
          end: "2025",
          title: "ТПГУ - Таджикский государственный педагогический университет",
          info: "Информатика и английский язык",
        },
        {
          id: 2,
          icon: <MdOutlineSchool />,
          start: "2021",
          end: "2021",
          title: "Alif Банк",
          info: "Frontend - Js Css Html",
        },
        {
          id: 3,
          icon: <MdOutlineSchool />,
          start: "2021",
          end: "2021",
          title: "Alif Банк",
          info: "Frontend - React.js",
        },
        {
          id: 4,
          icon: <MdOutlineSchool />,
          start: "2021",
          end: "2021",
          title: "Alif Банк",
          info: "Backend - Node.js",
        },
      ],
      studies: [
        {
          id: 1,
          icon: <MdWorkOutline />,
          start: "2021-04-01",
          end: "2021-09-04",
          title: "Web Studio BO/BO",
          info: "Джуниор фронтенд разработчик",
        },
        {
          id: 2,
          icon: <MdWorkOutline />,
          start: "2021-04-01",
          end: "2021-12-04",
          title: "Web Studio BO/BO",
          info: "Джуниор фуллстак разработчик",
        },
        {
          id: 3,
          icon: <MdWorkOutline />,
          start: "2022-01-06",
          end: " 2022-03-27",
          title: "Repost Space",
          info: "Фронтенд React - Next разработчик",
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
        icon: <MdWorkOutline />,
      },
      {
        id: 2,
        title: "React",
        color: "bg-blue",
        icon: <MdWorkOutline />,
      },
      {
        id: 3,
        title: "Next",
        color: "bg-dark",
        icon: <MdWorkOutline />,
      },
      {
        id: 4,
        title: "Redux-toolkit",
        color: "bg-pink",
        icon: <MdWorkOutline />,
      },
      {
        id: 5,
        title: "Scss",
        color: "bg-pink",
        icon: <MdWorkOutline />,
      },
      {
        id: 6,
        title: "Node",
        color: "bg-blue",
        icon: <MdWorkOutline />,
      },
      {
        id: 7,
        title: "Bootstrap",
        color: "bg-pink",
        icon: <MdWorkOutline />,
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
    name: "Navruzshoh Daleri",
    profession: "Джуниор фронтенд разработчик",
    contact: "https://t.me/iamdigitalist",
    userAvatar: navruzAva,
    social: [
      {
        id: 1,
        icon: <FaTelegram />,
        href: "https://t.me/iamdigitalist",
      },
      {
        id: 2,
        icon: <FiGithub />,
        href: "https://github.com/thenavik",
      },
      {
        id: 3,
        icon: <FaLinkedinIn />,
        href: "https://t.me/+992881070990",
      },
    ],
    aboutMe:
      "Привет, меня зовут Наврузшох. Я Junor Веб разработчик из России. У меня есть опыть в UI/UX дизайн и разработки веб-приложений. Также, я разработал несколько учебных веб сайтов на React и хорошо разбираюсь в верстке.",
    cv: "https://t.me/+992881070990",
    skills: [
      {
        id: 1,
        title: "JavaScript",
        color: "warning",
        progress: "60",
      },
      {
        id: 2,
        title: "React",
        color: "danger",
        progress: "50",
      },
      {
        id: 3,
        title: "HTML/CSS",
        color: "primary",
        progress: "90",
      },
    ],
    experience: {
      work: [
        {
          id: 1,
          icon: <MdOutlineSchool />,
          start: "2016-01-09",
          end: "2020-30-07",
          title: "Славянский Университет",
          info: "Международные отношения",
        },
        {
          id: 2,
          icon: <MdOutlineSchool />,
          start: "2020-01-08",
          end: "2020-30-08",
          title: "Alif Банк",
          info: "Курс JavaScript",
        },
        {
          id: 3,
          icon: <MdOutlineSchool />,
          start: "2021-01-03",
          end: "2021-30-04",
          title: "Маркетинг",
          info: "Курс SMM/SEO/Target",
        },
        {
          id: 4,
          icon: <MdOutlineSchool />,
          start: "2021-01-09",
          end: "Настоящее время",
          title: "УДГУ",
          info: "Международная экономика и бизнес",
        },
      ],
      studies: [
        {
          id: 1,
          icon: <MdWorkOutline />,
          start: "2018-14-10",
          end: "2021-30-12",
          title: "iamdifferent",
          info: "Онлайн маркетолог | Администрация сайта",
        },
        {
          id: 2,
          icon: <MdWorkOutline />,
          start: "2020-01-03",
          end: "2022-20-02",
          title: "Choice Agency",
          info: "SMM | Web Designe | SEO",
        },
        {
          id: 3,
          icon: <MdWorkOutline />,
          start: "2021-01-08",
          end: "2022-01-01",
          title: "Банк Эсхата",
          info: "Стажировка (джуниор фронтенд)",
        },
        {
          id: 4,
          icon: <MdWorkOutline />,
          start: "2022-20-01",
          end: "2022-30-03",
          title: "Repost Space",
          info: "Веб-дизайн | Джуниор фронтенд разработчик",
        },
      ],
    },
    projects: {
      completed: 3,
      coffee: 5341,
      code: 15788,
      yearsExperience: 1.3,
    },
    skillsMe: [
      {
        id: 1,
        title: "JavaScript",
        color: "bg-yellow",
        icon: <MdWorkOutline />,
      },
      {
        id: 2,
        title: "React",
        color: "bg-blue",
        icon: <MdWorkOutline />,
      },
      {
        id: 3,
        title: "Next",
        color: "bg-dark",
        icon: <MdWorkOutline />,
      },
      {
        id: 4,
        title: "Redux-toolkit",
        color: "bg-pink",
        icon: <MdWorkOutline />,
      },
      {
        id: 5,
        title: "Scss",
        color: "bg-pink",
        icon: <MdWorkOutline />,
      },
      {
        id: 6,
        title: "Node",
        color: "bg-blue",
        icon: <MdWorkOutline />,
      },
      {
        id: 7,
        title: "Bootstrap",
        color: "bg-pink",
        icon: <MdWorkOutline />,
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
