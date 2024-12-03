<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { NEWS_SUB_MENU } from "@/utils/common.js";
import Bottom from "@/components/Bottom.vue";
const router = useRouter()

const sub_menu = ref(NEWS_SUB_MENU)
const currentIndex = ref(0)
const handleSubMenuClick = (item,index) => {
  currentIndex.value = index
  // router.push({
  //   path: item.path
  // })
}
</script>
<template>
  <div class="container">
    <div class="header">
      <div
          v-for="(item,index) in sub_menu"
          :key="item.path"
          :class="{'sub_item': true,'current': currentIndex === index}"
          @click="() => handleSubMenuClick(item,index)"
      >
        {{item.name}}
      </div>
    </div>
    <Bottom/>
  </div>
</template>
<style scoped lang="less">
@import "../../global.less";
.container{
  height: 100rem;
  .header{
    background: @primary_color;
    display: flex;
    align-items: center;
    justify-content: center;
    .sub_item{
      padding: 1.0625rem 0;
      color: @white_color;
      font-size: .8125rem;
      margin-right: 2.5rem;
      position: relative;
      &:hover{
        cursor: pointer;
        opacity: .7;
      }
    }
    .current::before{
      content: "";
      display: block;
      position: absolute;
      bottom: 0;
      left: 50%;
      margin-left: -.3125rem;
      width: 0;
      height: 0;
      border-color: transparent transparent #fff;
      border-style: solid;
      border-width: 0 .3125rem .25rem;
    }
  }
}
</style>