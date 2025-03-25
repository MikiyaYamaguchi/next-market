import { Metadata } from "next";
import MyPage from "./myPage";

export const metadata: Metadata = {
  title: "ユーザー登録",
  description: "Next Marketのユーザー登録ページです。",
};

const Register = () => {
  return <MyPage />;
};

export default Register;
