import { defineStore } from "pinia";
import { reqCategoryList } from "@/api/index";

export const useHomeStore = defineStore("HomeStore", {
  state: () => ({
    // Make sure your data type is based on the return type
    categoryList: [],
  }),
  getters: {},
  actions: {
    async getCategoryList() {
      let result = await reqCategoryList();
      if (result.code === 200) this.categoryList = result.data;
    },
  },
});
