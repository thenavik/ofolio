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
    name: "Navruzshoh Daleri",
    profession: "Frontend",
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
      "Привет, меня зовут Наврузшох. Я Junor Веб разработчик из России. У меня есть опыть в UI/UX дизайн и разработки веб-приложений. Также, я разрабатоал несколько учебных веб сайтов на React и хорошо разбираюсь в верстке.",
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
          info: "Онлайн маркетолог/Администрация сайта",
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
