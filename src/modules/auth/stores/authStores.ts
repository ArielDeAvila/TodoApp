import { defineStore } from "pinia";
import { UserRequestDto, LoginRequestDto } from '../types/Index';
import api from "@/services/Api";
import { BaseResponse } from "@/types/TypeStore";
import { makeRequest } from "@/helpers/makeRequest";


const useAuthStore = defineStore({
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
    async register(body: UserRequestDto) {
      const request = {
        endpoint: api.UserEndpoint.registerUser,
        body
      }

      try {
        const data: BaseResponse = await makeRequest(request)
        return data
      } catch (error) {
        throw error
      }
    },
    async login(body: LoginRequestDto) {
      const request = {
        endpoint: api.LoginEnpoint,
        body
      }

      try {
        const data: BaseResponse = await makeRequest(request)
        this.auth = data.data
        return data
      } catch (error) {
        throw error
      }
    },
    setToken(token: string): void {
      this.auth = token;
    },
    cleanToken() {
      this.auth = null;
    },
  },
  persist: true,
});

export default useAuthStore
