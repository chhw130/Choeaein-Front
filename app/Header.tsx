"use client";
import React, { useState, useEffect } from "react";
import "./Header.scss";
import { Input, InputGroup, InputRightAddon } from "@chakra-ui/react";
import { GoSearch } from "react-icons/go";
import Link from "next/link";

const Header = () => {
  const [navSize, setnavSize] = useState("6rem");
  const [navColor, setnavColor] = useState("transparent");

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#ffff") : setnavColor("transparent");
    window.scrollY > 10 ? setnavSize("3rem") : setnavSize("5rem");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  /**로그아웃 */
  // const LogoutHandler = async () => {
  //   axios
  //     .post(`${BASE_URL}users/logout/`, "", {
  //       withCredentials: true,
  //     })
  //     .then((res) => res)
  //     .then((data) => data);
  //   dispatch(authActions.logOut());
  //   removeCookie("isLogin");
  //   window.location.reload();
  //   navigate("/");
  // };

  return (
    <>
      <div
        className="header"
        style={{
          backgroundColor: navColor,
          height: navSize,
          transition: "all 1s",
        }}
      >
        <div className="headerNav">
          <div className="navItems">
            <div className="navItem">
              <Link href="/">
                <img
                  className="navImg"
                  src="https://velog.velcdn.com/images/view_coding/post/6e4d7220-8bc8-4e88-9d4b-f3dd9e09b523/image.png"
                  alt=""
                />
              </Link>
            </div>
            <div className="navItem navSpan">
              {true ? (
                <Link href="/" prefetch={false}>
                  <span className="navItem_span">스케줄 보기</span>
                </Link>
              ) : null}
            </div>
          </div>

          <div className="navItems">
            <InputGroup marginRight="10px">
              <Input placeholder="아이돌을 검색해보세요." fontSize="0.9rem" />
              <InputRightAddon children={<GoSearch />} padding="0px 8px" />
            </InputGroup>
            <div className="navItem">
              {/* {isAdmin ? (
              <>
                <Link href="/admin/">
                  <button className="navBtn">
                    <span>관리자페이지</span>
                  </button>
                </Link>
                <button className="navBtn" onClick={LogoutHandler}>
                  <span>로그아웃</span>
                </button>
              </>
            ) : !isLogin ? (
              <Link href="/login">
                <button className="navBtn">
                  <span>로그인</span>
                </button>
              </Link>
            ) : (
              <>
                <button className="navBtn">
                  <Link to="/edituser">
                    <span>내 정보</span>
                  </Link>
                </button>
                <button className="navBtn" onClick={LogoutHandler}>
                  <span>로그아웃</span>
                </button>
              </>
            )} */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
