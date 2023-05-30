import SocialLogin from "@/component/loginPage/SocialLogin";
import UserLogin from "@/component/loginPage/UserLogin";

const LoginPage = async () => {
  return (
    <>
      <UserLogin />
      <SocialLogin />
    </>
  );
};

export default LoginPage;
