<script setup>
import {onMounted, ref, watch} from 'vue'
import { useRouter, useRoute } from "vue-router";
import { LAYOUT_MENU } from "@/utils/common.js";

const router = useRouter()
const route = useRoute()

const menu = ref(LAYOUT_MENU)
const currentRoute = ref('news')
const goToHome = () => router.push('/')
const handleNavClick = (item) => {
  currentRoute.value = item.path
  router.push({
    path: item.path
  })
}
onMounted(() => {currentRoute.value = route.fullPath})
watch(route,() => currentRoute.value = route.fullPath)
</script>

<template>
  <div class="main_layout">
    <div class="header">
      <div class="logo" @click="goToHome">
        <span class="logo_title">Bridge Land</span>
      </div>
      <div class="nav">
        <div
            v-for="item in menu"
            :key="item.path"
            :class="{'nav_item': true,'current': currentRoute.includes(item.path)}"
            @click="() => handleNavClick(item)"
        >
          {{item.name}}
        </div>
      </div>
    </div>
    <div>
      <router-view/>
    </div>
  </div>
</template>

<style scoped lang="less">
@import "../global.less";
.main_layout{
  position: relative;
  padding-top: 6.1rem;
  .header{
    position: fixed;
    top: 0;
    left: 0;
    padding: 0 2.5rem;
    height: 6rem;
    width: 100vw;
    background: @white_color;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    .logo{
      &_title{
        font-size: 1.2rem;
        font-weight: bold;
        color: @primary_color;
      }
      &:hover{
        cursor: pointer;
      }
    }
    .nav{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      &_item{
        margin-left: 2.5rem;
        position: relative;
        font-weight: 700;
        color: @text_color;
        font-size: .9375rem;
        &:hover{
          cursor: pointer;
          &::after,&::before{
            width: 50%;
          }
        }
        &::before{
          left: 50%;
        }
        &::after{
          right: 50%;
        }
        &::before,&::after{
          display: block;
          position: absolute;
          width: 0;
          height: 2px;
          background: @text_color;
          content: "";
          bottom: -12px;
          transition: .3s;
          z-index: 999;
        }
      }
      .current{
        &:after,&:before{
          width: 50%;
        }
      }
    }
  }
}
</style>