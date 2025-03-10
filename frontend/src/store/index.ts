import { defineStore } from "pinia"; // 确保正确导入

export const useMainStore = defineStore("main", {
  state: () => ({
    user: null,
    isAuthenticated: false,
  }),
  actions: {
    setUser(user: any) {
      this.user = user;
      this.isAuthenticated = true;
    },
    logout() {
      this.user = null;
      this.isAuthenticated = false;
    },
  },
});
