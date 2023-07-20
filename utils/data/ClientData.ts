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
