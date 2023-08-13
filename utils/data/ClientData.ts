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

/**calendar Category */

export const categoryData = [
  {
    pk: 1,
    category: "broadcast",
    content: "방송",
    icon: faBroadcastTower,
  },
  { pk: 2, category: "event", content: "행사", icon: faCalendarCheck },
  { pk: 3, category: "release", content: "발매", icon: faCompactDisc },
  { pk: 4, category: "congrats", content: "축하", icon: faGift },
  { pk: 5, category: "buy", content: "구매", icon: faStore },
];

export const categoryPickData = [
  {
    pk: 1,
    category: "broadcast",
    content: "방송",
    icon: faBroadcastTower,
  },
  { pk: 2, category: "event", content: "행사", icon: faCalendarCheck },
  { pk: 3, category: "release", content: "발매", icon: faCompactDisc },
  { pk: 4, category: "congrats", content: "축하", icon: faGift },
  { pk: 5, category: "buy", content: "구매", icon: faStore },
];

/**calendar Data */

export const days = ["일", "월", "화", "수", "목", "금", "토"];

export const icon: IconType = {
  broadcast: {
    icon: faBroadcastTower,
    bg: "#B677FF",
  },
  event: { icon: faCalendarCheck, bg: "#537fe7" },
  release: {
    icon: faCompactDisc,
    bg: "#f16767",
  },
  congrats: { icon: faGift, bg: "#e7b10a" },
  buy: { icon: faStore, bg: "#609966" },
};

/**singup Data */

export const stepData: StepData[] = [
  { title: "이메일", description: "Contact Info" },
  { title: "회원가입", description: "Date & Time" },
  { title: "가입완료", description: "Select Rooms" },
];
