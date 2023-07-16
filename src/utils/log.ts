/** 개발 환경에서만 출력되는 로그 함수 */
export const log = (message: any) => {
  if (import.meta.env.DEV) console.log(message);
};
