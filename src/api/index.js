import requests from "./request";

//http://gmall-h5-api.atguigu.cn/

///api/product/getBaseCategoryList
export const reqCategoryList = () => {
  // Becasue we already have '/api' from the requests.js, so we do not need it here.
  return requests.get("/product/getBaseCategoryList");
};
