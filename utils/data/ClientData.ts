import {
  IconDefinition,
  faBroadcastTower,
  faCalendarCheck,
  faCompactDisc,
  faGift,
  faStore,
} from "@fortawesome/free-solid-svg-icons";

interface CategoryType {
  icon: IconDefinition;
  bg: string;
}

interface IconType {
  broadcast: CategoryType;
  event: CategoryType;
  release: CategoryType;
  congrats: CategoryType;
  buy: CategoryType;
}

interface StepData {
  title: string;
  description: string;
}

/**header Avatar Data */

export const loginMenu = [
  {
    title: "로그인",
    link: "/login",
  },
  {
    title: "회원가입",
    link: "/signup/home",
  },
];

export const logoutMenu = [
  {
    title: "로그아웃",
    link: "/",
  },
  {
    title: "마이페이지",
    link: "/mypage",
  },
  {
    title: "스케줄 보기",
    link: "/",
  },
];

/**calendar Data */

export const icon: IconType = {
  broadcast: {
    icon: faBroadcastTower,
    bg: "#443c68",
  },
  event: { icon: faCalendarCheck, bg: "#537fe7" },
  release: {
    icon: faCompactDisc,
    bg: "#f16767",
  },
  congrats: { icon: faGift, bg: "#e7b10a" },
  buy: { icon: faStore, bg: "#609966" },
};

export const stepData: StepData[] = [
  { title: "이메일인증", description: "Contact Info" },
  { title: "회원가입", description: "Date & Time" },
  { title: "회원가입완료", description: "Select Rooms" },
];
