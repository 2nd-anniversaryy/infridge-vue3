import { ref } from "vue";
import { defineStore } from "pinia";

import memberApi from "@/http/api/member";
import { log } from "@/utils/log";

export const useMemberStore = defineStore("member", () => {
  const initialState = {
    id: null,
    username: null,
    profileImage: null,
    role: [],
  };
  const member = ref({ ...initialState });

  const resetMember = () => {
    member.value = { ...initialState };
  };

  const getMember = async () => {
    try {
      const fetchMember = await memberApi.me();
      if (fetchMember) member.value = { ...fetchMember };
    } catch (e) {}
  };

  const isAuthentication = () => {
    return member.value.id !== null;
  };

  return {
    member,
    getMember,
    isAuthentication,
    resetMember,
  };
});
