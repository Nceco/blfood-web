<script setup>
import { ref } from 'vue'
import { useRouter } from "vue-router";
import { LAYOUT_MENU } from "@/utils/common.js";

const router = useRouter()

const menu = ref(LAYOUT_MENU)
const handleNavClick = item => router.replace(item.path)
</script>
<template>
  <div class="layout_bottom">
    <div class="img">
    </div>
    <div class="nav">
      <div
          v-for="item in menu"
          :key="item.path"
          class="nav_item"
          @click="() => handleNavClick(item)"
      >
        {{item.name}}
      </div>
    </div>
    <div class="copyright">
      <small>© 2022 - 2024 Bridge Lang.</small>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import "../global.less";
.layout_bottom{
  padding-top: 160px;
  .img{
    width: 100%;
    height: 200px;
    background: aliceblue;
  }
  .nav{
    margin-top: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 0 2.5rem;
    &_item{
      padding: 12px 0;
      color: @text_color;
      cursor: pointer;
      margin-left: 26px;
      font-size: .8125rem;
      &:hover{
        color:@primary_color;
      }
    }
  }
  .copyright{
    text-align: center;
    margin: 8rem 0 4rem 0;
    small{
      color: #999;
    }
  }
}

@media screen and (max-width:991px) {
  .layout_bottom{
    padding-top: 48px;
    .nav{
      margin-top: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-start;
      padding: 0;
      &_item{
        color: @text_color;
        cursor: pointer;
        margin-left: 1rem;
        font-size: .8125rem;
        &:hover{
          color: @primary_color;
        }
      }
    }
    .copyright{
      text-align: center;
      margin: 2rem 0 3rem 0;
      small{
        color: #999;
      }
    }
  }
}

</style>