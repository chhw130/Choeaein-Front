import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import KakaoProvider from "next-auth/providers/kakao";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.NEXT_PUBLIC_GITHUB_ID,
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET,
    }),
    KakaoProvider({
      clientId: process.env.NEXT_PUBLIC_KAKAO_ID,
      clientSecret: process.env.NEXT_PUBLIC_KAKAO_SECRET,
    }),
  ],

  secret: "3125412dwqdf3",
};
export default NextAuth(authOptions);
