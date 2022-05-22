import { createSlice } from "@reduxjs/toolkit";
import {
  FaTelegram,
  FaNode,
  FaWhatsapp,
  FaFigma,
  FaVuejs,
  FaPhp,
  FaLaravel,
  FaNodeJs,
  FaDocker,
} from "react-icons/fa";
import jovidAvatar from "../../assets/avatar/jovid.jpg";
import gholibAvatar from "../../assets/avatar/gholib.jpg";
import { MdOutlineSchool, MdWorkOutline } from "react-icons/md";
import { FiGithub, FiFigma } from "react-icons/fi";
import navruzAva from "../../img/avatar-navruz.png";
import { IoLogoJavascript } from "react-icons/io";
import { FaCss3 } from "react-icons/fa";
import { AiOutlineHtml5 } from "react-icons/ai";
import { DiPhotoshop, DiMysql, DiDatabase } from "react-icons/di";
import {
  SiRedux,
  SiNextdotjs,
  SiReact,
  SiBootstrap,
  SiSass,
  SiMongodb,
  SiTypescript,
  SiNginx,
} from "react-icons/si";
import Work5 from "../../img/work-5.webp";
import Work2 from "../../img/work-2.webp";
import Work3 from "../../img/work-3.png";
import Work4 from "../../img/work-4.jpg";

import workj1 from "../../assets/work/payment.jpg";
import workj2 from "../../assets/work/todo.png";
import workj3 from "../../assets/work/vs.jpg";
// cv
import jovidcv from "../../assets/cv/jovid.pdf";
import navruzcv from "../../assets/cv/navruz.pdf";
import gholibcv from "../../assets/cv/gholib.pdf";

const initialState = [
  {
    name: "Jovid Masharipov",
    profession: "Front-End разработчик",
    contact: "https://t.me/+992881070990",
    userAvatar: jovidAvatar,
    username: "jovid",
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
        icon: <FaWhatsapp />,
        href: "https://wa.me/992881070990",
      },
    ],
    aboutMe:
      "Привет, меня зовут Джовид. Я фронтенд разработчик. Есть 1 год 2 мес коммерческого опыта , Уже 2 года прошло на изучение фронтенда - .Успел освоить: - адаптивную верстку; - работа с объектами, асинхронный JS, работа с DOM, localStorage; - Material UI, Bootstrap; - React, Redux, REST API; - Препроцессор SASS; - Node.js; -Express.js; -MongoDB;.",
    cv: jovidcv,
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
      code: 9987,
      yearsExperience: 1.2,
    },
    skillsMe: [
      {
        id: 1,
        title: "JavaScript",
        color: "bg-yellow",
        icon: <IoLogoJavascript />,
      },
      {
        id: 2,
        title: "React",
        color: "bg-blue",
        icon: <SiReact />,
      },
      {
        id: 3,
        title: "Next",
        color: "bg-dark",
        icon: <SiNextdotjs />,
      },
      {
        id: 4,
        title: "Redux-toolkit",
        color: "bg-pink",
        icon: <SiRedux />,
      },
      {
        id: 5,
        title: "Scss",
        color: "bg-pink",
        icon: <SiSass />,
      },
      {
        id: 6,
        title: "Node",
        color: "bg-blue",
        icon: <FaNode />,
      },
      {
        id: 7,
        title: "MongoDB",
        color: "bg-dark",
        icon: <SiMongodb />,
      },
      {
        id: 8,
        title: "Bootstrap",
        color: "bg-blue",
        icon: <SiBootstrap />,
      },
      {
        id: 9,
        title: "Css",
        color: "bg-pink",
        icon: <FaCss3 />,
      },
      {
        id: 10,
        title: "Express",
        color: "bg-yellow",
        icon: <FaNode />,
      },
      {
        id: 11,
        title: "Верстка",
        color: "bg-dark",
        icon: <FaCss3 />,
      },
    ],
    works: [
      {
        id: 1,
        title: "Много функциональный строительный сайт",
        href: "https://tojmemor.tj/",
        image: Work3,
      },
      {
        id: 2,
        title: "Cтроительный сайт",
        href: "https://vose-construction.tj/",
        image: workj3,
      },
      {
        id: 3,
        title: "Много функциональный строительный сайт",
        href: "https://armon.tj/",
        image: Work4,
      },
      {
        id: 4,
        title: "React payment system (UI-UX)",
        href: "https://payment.ofolio.ru/",
        image: workj1,
      },
      {
        id: 5,
        title: "Repost Space Agency",
        href: "https://repost.ofolio.ru/",
        image: Work2,
      },
      {
        id: 6,
        title: "React Todo List",
        href: "https://react-todo.ofolio.ru/",
        image: workj2,
      },
    ],
  },
  {
    name: "Navruzshoh Daleri",
    profession: "Frontend Developer",
    contact: "https://t.me/iamdigitalist",
    userAvatar: navruzAva,
    username: "navruz",
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
        icon: <FaFigma />,
        href: "https://www.figma.com/@thenawik",
      },
      {
        id: 4,
        icon: <FaWhatsapp />,
        href: "https://wa.me/",
      },
    ],
    aboutMe:
      "Привет, меня зовут Наврузшох. Я Frontend разработчик из России. У меня есть опыт в UI/UX дизайн и разработки веб-приложений. Также, я разработал несколько учебных веб-сайтов на React и хорошо разбираюсь в верстке.",
    cv: navruzcv,
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
        icon: <IoLogoJavascript />,
      },
      {
        id: 2,
        title: "React",
        color: "bg-blue",
        icon: <SiReact />,
      },
      {
        id: 3,
        title: "HTML",
        color: "bg-yellow",
        icon: <AiOutlineHtml5 />,
      },
      {
        id: 4,
        title: "CSS",
        color: "bg-blue",
        icon: <FaCss3 />,
      },
      {
        id: 5,
        title: "SCSS",
        color: "bg-yellow",
        icon: <SiSass />,
      },
      {
        id: 6,
        title: "Figma",
        color: "bg-blue",
        icon: <FiFigma />,
      },
      {
        id: 7,
        title: "Bootstrap",
        color: "bg-yellow",
        icon: <SiBootstrap />,
      },
      {
        id: 8,
        title: "Photoshop",
        color: "bg-blue",
        icon: <DiPhotoshop />,
      },
    ],
    works: [
      {
        id: 1,
        title: "Старница логин (минимализм)",
        href: "https://www.figma.com/community/file/1103268879672112747/Login-Page",
        image: Work2,
      },
      {
        id: 2,
        title: "Дизайн Фигма (Onepage)",
        href: "https://www.figma.com/community/file/1104321789433318797",
        image: Work5,
      },
      {
        id: 3,
        title: "Product page",
        href: "https://www.figma.com/community/file/1105181694772199591",
        image: Work3,
      },
      {
        id: 4,
        title: "Минималистичный блог",
        href: "https://minimo.ofolio.ru/",
        image: Work4,
      },
      {
        id: 5,
        title: "Repost Minimalist HTML5 Template",
        href: "https://repost-mini.ofolio.ru/",
        image: Work3,
      },
      {
        id: 6,
        title: "Repost Space Agency",
        href: "https://repost.ofolio.ru/",
        image: Work2,
      },
    ],
  },
  {
    name: "Gholib",
    profession: "Fullstack Developer",
    contact: "https://t.me/gholib1997",
    userAvatar: gholibAvatar,
    username: "gholib",
    social: [
      {
        id: 1,
        icon: <FaTelegram />,
        href: "https://t.me/gholib1997",
      },
      {
        id: 2,
        icon: <FiGithub />,
        href: "https://github.com/gholib",
      },
    ],
    aboutMe: "Любитель абстракции",
    cv: gholibcv,
    skills: [
      {
        id: 1,
        title: "JavaScript",
        color: "warning",
        progress: "90",
      },
      {
        id: 2,
        title: "Hard Skills",
        color: "danger",
        progress: "70",
      },
      {
        id: 3,
        title: "Soft Skills",
        color: "primary",
        progress: "60",
      },
    ],
    experience: {
      work: [
        {
          id: 1,
          icon: <MdOutlineSchool />,
          start: "2015-01-09",
          end: "2019-30-07",
          title: "МГУ имени Ломоносова",
          info: "Нанотехнология",
        },
        {
          id: 2,
          icon: <MdOutlineSchool />,
          start: "2020-01-08",
          end: "2022-30-08",
          title: "Славянский Университет",
          info: "Информационные технологии и программирования",
        },
      ],
      studies: [
        {
          id: 1,
          icon: <MdWorkOutline />,
          start: "2018",
          end: "2021",
          title: "Скрыто",
          info: "Fullstack Developer & Merchandiser Frontend Team",
        },
        {
          id: 2,
          icon: <MdWorkOutline />,
          start: "2021",
          end: "2022",
          title: "Скрыто",
          info: "Fullstack & JS Developer",
        },
      ],
    },
    projects: {
      completed: "25+",
      coffee: 2241,
      code: 100788,
      yearsExperience: 3,
    },
    skillsMe: [
      {
        id: 1,
        title: "JavaScript",
        color: "bg-yellow",
        icon: <IoLogoJavascript />,
      },
      {
        id: 2,
        title: "React",
        color: "bg-blue",
        icon: <SiReact />,
      },
      {
        id: 3,
        title: "HTML",
        color: "bg-yellow",
        icon: <AiOutlineHtml5 />,
      },
      {
        id: 4,
        title: "CSS",
        color: "bg-blue",
        icon: <FaCss3 />,
      },
      {
        id: 5,
        title: "SCSS",
        color: "bg-yellow",
        icon: <SiSass />,
      },
      {
        id: 6,
        title: "Figma",
        color: "bg-blue",
        icon: <FiFigma />,
      },
      {
        id: 7,
        title: "Bootstrap",
        color: "bg-yellow",
        icon: <SiBootstrap />,
      },
      {
        id: 8,
        title: "Vue",
        color: "bg-blue",
        icon: <FaVuejs />,
      },
      {
        id: 9,
        title: "PHP",
        color: "bg-yellow",
        icon: <FaPhp />,
      },
      {
        id: 10,
        title: "Laravel",
        color: "bg-blue",
        icon: <FaLaravel />,
      },
      {
        id: 11,
        title: "MySQL",
        color: "bg-yellow",
        icon: <DiMysql />,
      },
      {
        id: 12,
        title: "NodeJS",
        color: "bg-blue",
        icon: <FaNodeJs />,
      },
      {
        id: 13,
        title: "Typescript",
        color: "bg-yellow",
        icon: <SiTypescript />,
      },
      {
        id: 14,
        title: "Redux",
        color: "bg-blue",
        icon: <SiRedux />,
      },
      {
        id: 15,
        title: "ClickHouse",
        color: "bg-yellow",
        icon: <DiDatabase />,
      },
      {
        id: 16,
        title: "Docker",
        color: "bg-blue",
        icon: <FaDocker />,
      },
      {
        id: 17,
        title: "NGINX",
        color: "bg-yellow",
        icon: <SiNginx />,
      },
    ],
    works: [
      {
        id: 1,
        title: "Repost Space Agency",
        href: "https://repost.ofolio.ru/",
        image: Work2,
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
