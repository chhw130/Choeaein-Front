declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_SERVICE_ID: string;
      NEXT_PUBLIC_ACCESS_KEY: string;
      NEXT_PUBLIC_SECRET_KEY: string;
      NEXT_PUBLIC_GITHUB_ID: string;
      NEXT_PUBLIC_GITHUB_SECRET: string;
      NEXT_PUBLIC_KAKAO_ID: string;
      NEXT_PUBLIC_KAKAO_SECRET: string;
      NEXT_PUBLIC_NAVER_ID: string;
      NEXT_PUBLIC_NAVER_SECRET: string;
      NEXT_PUBLIC_BASE_URL: string;
      NEXT_PUBLIC_DEV_BASE_URL: string;
      NODE_ENV: "development" | "production";
    }
  }
}

declare module "*.png";

export {};
