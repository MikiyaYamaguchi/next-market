import { Metadata } from "next";
import MyPage from "./myPage";

export const metadata: Metadata = {
  title: "アイテム作成",
  description: "Next Marketのアイテム作成ページです。",
};

const Register = () => {
  return <MyPage />;
};

export default Register;
