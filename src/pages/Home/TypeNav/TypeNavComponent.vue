<template>
  <div class="type-nav">
    <div class="container">
      <div @mouseleave="leaveShow" @mouseenter="enterShow">
        <h2 class="all">全部商品分类</h2>
        <Transition name="sort">
          <div class="sort" v-show="isShow">
            <div class="all-sort-list2" @click="goSearch">
              <div
                class="item"
                v-for="c1 in categoryList"
                :key="c1.categoryId"
                :class="{ curr: currentId === c1.categoryId }">
                <h3 @mouseenter="changeId(c1.categoryId)">
                  <a
                    :data-categoryName="c1.categoryName"
                    :data-category1Id="c1.categoryId"
                    >{{ c1.categoryName }}</a
                  >
                  <!-- But it can be slow as its getting too many requests from the api
              So we do not recommend to use router-link
              <router-link to="/search">{{ c1.categoryName }}</router-link> -->
                </h3>
                <div
                  class="item-list clearfix"
                  v-show="currentId === c1.categoryId">
                  <div
                    class="subitem"
                    v-for="c2 in c1.categoryChild"
                    :key="c2.categoryId">
                    <dl class="fore">
                      <dt>
                        <a
                          :data-categoryName="c2.categoryName"
                          :data-category2Id="c2.categoryId"
                          >{{ c2.categoryName }}</a
                        >
                        <!-- <router-link to="/search">{{
                      c2.categoryName
                    }}</router-link> -->
                      </dt>
                      <dd>
                        <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                          <a
                            :data-categoryName="c3.categoryName"
                            :data-category3Id="c3.categoryId"
                            >{{ c3.categoryName }}</a
                          >
                          <!-- <router-link to="/search">{{
                        c3.categoryName
                      }}</router-link> -->
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed, ref } from "vue";
import { useHomeStore } from "@/store/HomeStore";
//import { storeToRefs } from "pinia";
import useThrottle from "@/hooks/useThrottle";
import { useRoute, useRouter } from "vue-router";

const currentId = ref(-1);
const isShow = ref(true);
const homeStore = useHomeStore();
const route = useRoute();
const router = useRouter();
const categoryList = computed(() => {
  return homeStore.categoryList;
});
//const { categoryList } = storeToRefs(homeStore);

const changeId = useThrottle((id) => {
  currentId.value = id;
}, 50);

function goSearch() {
  //console.log(event.target);
  let { categoryname, category1id, category2id, category3id } =
    event.target.dataset;

  if (categoryname) {
    let location = { name: "search" };
    let query = { categoryName: categoryname };
    if (category1id) {
      query.category1id = category1id;
    } else if (category2id) {
      query.category2Id = category2id;
    } else if (category3id) {
      query.category3id = category3id;
    }

    if (route.params) {
      location.params = route.params;
      location.query = query;
      router.push(location);
    }

    // No need to get $router from the goSearch(), can directly use router from useRouter()
    // $router.push(location);
  }
}

function enterShow() {
  if (route.path !== "/home") {
    isShow.value = true;
  }
}
function leaveShow() {
  currentId.value = -1;
  if (route.path !== "/home") {
    isShow.value = false;
  }
}

onMounted(() => {
  if (route.path !== "/home") isShow.value = false;
});
</script>

<style scoped lang="less">
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
      cursor: pointer;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;
      cursor: pointer;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            // display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;
            cursor: pointer;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;
                  cursor: pointer;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }
        }

        .curr {
          background-color: skyblue;
        }
      }
    }

    //Starting the transtion
    .sort-enter-from {
      height: 0px;
    }

    //Ending the transtions
    .sort-enter-to {
      height: 461px;
    }

    //Define the transtion time and speed .sort-enter-active,
    .sort-enter-active {
      transition: all 0.5s linear;
    }
  }
}
</style>
