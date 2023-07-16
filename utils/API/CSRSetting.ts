import axios from "axios";

import Cookies from "js-cookie";

export const instance = axios.create({
  baseURL: "/api/v2/",
  headers: {
    "X-CSRFToken": Cookies.get("csrftoken") || "",
  },
  withCredentials: true,
});

export const SSRInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_DEV_BASE_URL,
  headers: {
    "X-CSRFToken": Cookies.get("csrftoken") || "",
  },
  withCredentials: true,
});

/**회원가입 */
export const postSignUp = (signUpInform: any) =>
  instance.post(`/users/`, signUpInform).then((res) => res.data);

/**로그인 */
export const postLogin = (loginInform: any) =>
  instance.post(`/oauth/login/`, loginInform).then((res) => res.data);

/**ID찾기 */
export const findID = (data: any) =>
  instance.post(`/oauth/findID`, data).then((res) => res.data);

/**로그아웃 */
export const postLogout = () =>
  instance
    .post(
      "/oauth/logout/",
      {},
      {
        headers: {
          "X-CSRFToken": Cookies.get("csrftoken") || "",
        },
        withCredentials: true,
      }
    )
    .then((res) => res.data);

/**유저정보*/
export const getUserInform = () =>
  instance
    .get("/users/me/", {
      withCredentials: true,
    })
    .then((res) => res.data);

export const getSearchData = (keyword: string | null | undefined) =>
  instance.get(`/search/?q=${keyword}`).then((res) => res.data);

/**특정 아이돌 스케줄(month) */
export const getIdolSchedule = (postData: any, idol: string) =>
  instance.post(`/idols/${idol}/schedule/`, postData).then((res) => res.data);

/**특정 아이돌 스케줄(day)*/
// export const getIdolDaySchedule = () =>
// instance.post(`/idols/${idol}/schedule`)

/**사진을 업로드 할 url 가져오는 함수. */
export const getUploadUrl = async (img: any) => {
  let resData: any = "";
  await instance
    .post(`/media/photos/get-url/`, img.file)
    .then((data) => {
      resData = uploadImg(data, img);
      return resData;
    })
    .catch(() => {
      resData = false;
      return resData;
    });

  return resData;
};

/**받아온 url에 img를 넣어주기 */
export const uploadImg = async (data: any, img: any) => {
  let resData = "";
  const form = new FormData();
  form.append("file", img.file[0]);
  await axios
    .post(data.data.uploadURL, form, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: false,
    })
    .then((res) => {
      resData = res.data.result;
      return res.data.result;
    });

  return resData;
};

/**유저 이미지를 넣은 url post 하기 */
export const postProfileImg = async (profileImg: any) => {
  await instance
    .put(`/users/mypage/`, profileImg, {
      withCredentials: true,
    })
    .then((res) => res)
    .catch((res) => res);
};

/**유저가 제보한 아이돌 일정 */
export const getUserReportSchedule = async () =>
  await instance.get(`/users/reports/`).then((res) => res.data);

/**유저 일정 등록 */

export const postUserCalendar = async (data: any) =>
  await instance.post(`/users_calendar/`, data, {
    withCredentials: true,
  });

/**유저 일정 수정 */

export const putUserCalendar = async (data: any, schedulePk: any) => {
  await instance.put(`/users_calendar/${schedulePk}/`, data, {
    withCredentials: true,
  });
};
