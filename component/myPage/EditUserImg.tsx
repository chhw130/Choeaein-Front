"use client";
import { useForm } from "react-hook-form";
import styles from "./EditUserImg.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const EditUserImg = () => {
  const { register, handleSubmit } = useForm();

  const imgSubmit = () => {};

  return (
    <div className={styles.profileDiv}>
      <h2>프로필 정보</h2>
      <img alt="" />
      <form className={styles.uploadForm} onSubmit={handleSubmit(imgSubmit)}>
        <div className={styles.uploadFile}>
          <input type="file" {...register("file")} accept="image/*" />
          <FontAwesomeIcon
            icon={faCamera}
            style={{ color: "white" }}
            fixedWidth
          />
        </div>
        <button type="submit">변경하기</button>
        {/* {isUploadError ? <p>이미지를 다시 올려주세요.</p> : null} */}
      </form>
    </div>
  );
};

export default EditUserImg;
