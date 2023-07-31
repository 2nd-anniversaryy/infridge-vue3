import { createPinia } from "pinia";
// import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

/** vue store 세팅 */
export const setupStore = (app: any) => {
  const store = createPinia();
  // 로컬 스토리지 플러그인 세팅
  //   store.use(piniaPluginPersistedstate);
  app.use(store);
};

export * from "./member";
export * from "./token";
