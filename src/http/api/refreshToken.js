import http from "@/http";

const tokenApi = {
  getAccessToken() {
    return http.get("refresh");
  },
  delete() {
    return http.delete("refresh");
  },
};

export default tokenApi;
