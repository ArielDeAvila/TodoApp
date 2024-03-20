import { defineStore } from "pinia";

export const useAuthStore = defineStore({
  id: "auth",
  state: () =>
    ({
      auth: null,
    } as { auth: string | null }),
  getters: {
    getToken(): any {
      return this.auth;
    },
  },
  actions: {
    setToken(token: string): void {
      this.auth = token;
    },
    cleanToken() {
      this.auth = null
    }
  },
  persist: true,
});