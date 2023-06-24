import UserLogin from "@/component/loginPage/UserLogin";
import { getUserInform } from "@/utils/axios/AxiosSetting";

const LoginPage = async () => {
  return (
    <main>
      <UserLogin />
    </main>
  );
};

export default LoginPage;
