import UserLogin from "@/component/loginPage/UserLogin";
import { getUserInform } from "@/utils/API/CSRSetting";

const LoginPage = async () => {
  return (
    <main>
      <UserLogin />
    </main>
  );
};

export default LoginPage;
