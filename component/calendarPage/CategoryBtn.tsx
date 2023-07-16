"use client";
import React, { useState } from "react";
import styles from "./Calendar.module.scss";
import {
  faBroadcastTower,
  faCalendarCheck,
  faCompactDisc,
  faGift,
  faStore,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface CategoryBtnProps {
  idolId: number;
}

const CategoryBtn = ({ idolId }: CategoryBtnProps) => {
  const userPick = 1;

  const buttons =
    Number(idolId) === userPick
      ? [
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
          { pk: 6, category: "my", content: "My", icon: faUser },
        ]
      : [
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
  const initActiveButtons =
    Number(idolId) === userPick
      ? ["broadcast", "event", "release", "congrats", "buy", "my"]
      : ["broadcast", "event", "release", "congrats", "buy"];

  const [activeButtons, setActiveButtons] = useState(initActiveButtons);

  /**클릭한 버튼 toggle 함수 */
  const handleClick = (buttonPk: string) => {
    if (activeButtons.length === 1 && activeButtons.includes(buttonPk)) {
      return;
    }
    const index = activeButtons.indexOf(buttonPk);

    if (index === -1) {
      setActiveButtons([...activeButtons, buttonPk]);
    } else {
      setActiveButtons([
        ...activeButtons.slice(0, index),
        ...activeButtons.slice(index + 1),
      ]);
    }

    console.log(activeButtons);
  };
  return (
    <div className={styles.categoryContainer}>
      {buttons.map((btn) => (
        <Button
          fontSize={[11, 13, 15]}
          w={[40, 80, 150]}
          h={[10, 14, 16]}
          className={`${
            activeButtons.includes(btn.category)
              ? styles.active
              : styles.inactive
          } 
           ${styles.buttonss}
          `}
          key={btn.category}
          onClick={() => handleClick(btn.category)}
        >
          <FontAwesomeIcon className={styles.icons} icon={btn.icon} />
          {btn.content}
        </Button>
      ))}
    </div>
  );
};

export default CategoryBtn;
