import { Metadata } from "next";
import MyPage from "./myPage";

export const metadata: Metadata = {
  title: "ログイン",
  description: "Next Marketのログインページです。",
};

const Register = () => {
  return <MyPage />;
};

export default Register;
