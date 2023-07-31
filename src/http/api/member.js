import http from "@/http";
import { log } from "@/utils";

const memberApi = {
  me() {
    return http.get("members/me");
  },
};

export default memberApi;
