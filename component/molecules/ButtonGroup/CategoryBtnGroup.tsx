"use client";
import React from "react";
import styles from "./CategoryBtnGroup.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRecoilState } from "recoil";
import { categoryState } from "@/utils/RecoilStore/CategoryState";
import ButtonAtom from "../../atoms/Button/ButtonAtom";
import { ButtonGroup } from "@chakra-ui/react";
import { categoryData, categoryPickData } from "@/utils/data/ClientData";

interface CategoryBtnProps {
  idolId: number;
}

const CategoryBtnGroup = ({ idolId }: CategoryBtnProps) => {
  const userPick = 1;

  const buttons = Number(idolId) === userPick ? categoryData : categoryPickData;

  const [category, setCategory] = useRecoilState(categoryState);

  /**클릭한 버튼 toggle 함수 */
  const handleClick = (buttonPk: string) => {
    if (category.length === 1 && category.includes(buttonPk)) {
      return;
    }
    const index = category.indexOf(buttonPk);

    if (index === -1) {
      setCategory([...category, buttonPk]);
    } else {
      setCategory([...category.slice(0, index), ...category.slice(index + 1)]);
    }
  };

  return (
    <ButtonGroup
      justifyContent={"center"}
      spacing={1}
      padding={["5px", "10px", "30px"]}
    >
      {buttons.map((btn) => (
        <ButtonAtom
          fontSize={[11, 16, 20]}
          w={"100%"}
          h={[10, 14, 20]}
          className={`${
            category.includes(btn.category) ? styles.active : styles.inactive
          } 
           ${styles.buttonss}
          `}
          key={btn.category}
          onClick={() => handleClick(btn.category)}
        >
          <FontAwesomeIcon className={styles.icons} icon={btn.icon} />
          {btn.content}
        </ButtonAtom>
      ))}
    </ButtonGroup>
  );
};

export default CategoryBtnGroup;
