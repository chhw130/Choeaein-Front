import { PasswordFormType } from "@/UI/Modal/ModifyPasswordModal";
import { PostDataType } from "@/UI/Modal/ReportModal";
import axios from "axios";
import Cookies from "js-cookie";
import { FindIDFormType } from "@/component/findPage/findId/FindID";
import { ReportPkType } from "@/UI/Modal/ScheduleRegisterModal";

export const instance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_DEV_BASE_URL}/api/v2`,
  headers: {
    "X-CSRFToken": Cookies.get("csrftoken") || "",
  },
  withCredentials: true,
});

export const verifyEmail = (email: object) =>
  instance
    .post(`/oauth/signup/step1/`, {
      email: "527coco@naver.com",
    })
    .then((res) => res.data);

/**회원가입 */
export const postSignUp = (signUpInform: any) =>
  instance
    .post(`/oauth/signup/step2/41/EmailVerificationToken/`, signUpInform)
    .then((res) => res.data);

/**로그인 */
export const postLogin = (loginInform: any) =>
  instance.post(`/oauth/login/`, loginInform).then((res) => res.data);

/**ID찾기 */
export const findID = (data: FindIDFormType) =>
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

/**유저 pick 변경 */
export const putUserPick = (data: any) =>
  instance
    .put("/users/edit/pick/", data, {
      headers: {
        "X-CSRFToken": Cookies.get("csrftoken") || "",
      },
      withCredentials: true,
    })
    .then((res) => res.data);

/**유저 password 변경 */

export const putUserPassword = (data: PasswordFormType) =>
  instance
    .put("/oauth/changePW/", data, {
      headers: {
        "X-CSRFToken": Cookies.get("csrftoken") || "",
      },
      withCredentials: true,
    })
    .then((res) => res.data);

/**유저 제보 스케줄 */
export const getMyReportSchedules = () =>
  instance.get(`/users/mypage/myreport`).then((res) => res.data);

export const getSearchData = (keyword: string | null | undefined) =>
  instance.get(`/search/?q=${keyword}`).then((res) => res.data);

/**특정 아이돌 스케줄(카테고리별로) */
export const getIdolSchedule = (postData: any, idol: string) =>
  instance
    .post(`/idols/${idol}/schedule/`, postData, {
      headers: {
        "X-CSRFToken": Cookies.get("csrftoken") || "",
      },
      withCredentials: true,
    })
    .then((res) => res.data);

/**특정 아이돌 다가오는 스케줄 */
export const getUpcomingSchedule = (idol: string) =>
  instance.get(`/idols/${idol}/upcoming/`).then((res) => res.data);

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
export const postUserReportSchedule = async (data: PostDataType) =>
  await instance
    .post(`/users/reports/`, data, {
      headers: {
        "X-CSRFToken": Cookies.get("csrftoken") || "",
      },
    })
    .then((res) => res.data);

export const getUserReportSchedule = async () =>
  instance.get("/users/reports/").then((res) => res.data);

/**유저 일정 디테일 */
export const getUserReportDetail = async (schedulePk: number) =>
  instance.get(`/users/reports/${schedulePk}/`).then((res) => res.data);

/**유저 report 등록하기 */
export const postUserReport = async (reportPk: ReportPkType) =>
  instance.post(`/users/register`, reportPk).then((res) => res.data);

/**유저 일정 수정하기 */
export const putUserReportDetail = async (
  formData: PostDataType,
  schedulePk: number
) =>
  instance
    .put(`/users/reports/${schedulePk}`, formData)
    .then((res) => res.data);

/**유저 일정 삭제하기 */
export const deleteUserReportSchedule = async (schedulePk: number) =>
  instance.delete(`/users/reports/${schedulePk}/`).then((res) => res.data);

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
