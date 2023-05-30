declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_GITHUB_ID: string;
      NEXT_PUBLIC_GITHUB_SECRET: string;
      NEXT_PUBLIC_KAKAO_ID: string;
      NEXT_PUBLIC_KAKAO_SECRET: string;
      NODE_ENV: "development" | "production";
    }
  }
}

declare module "*.png";

export {};
