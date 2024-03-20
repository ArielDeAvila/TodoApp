import { defineStore } from "pinia";

export const useErrorsStore = defineStore({
  id: "errors",
  state: () => ({
    errors: [],
  }),
  getters: {
    getErrors(): any {
      return this.errors;
    },
  },
  actions: {
    setErrors(errors: any) {
      this.errors = errors;
    },
    cleanErrors() {
      this.errors = [];
    },
  },
});
