<script setup>
import { ref } from 'vue'
import { useRouter } from "vue-router";
import { LAYOUT_MENU } from "@/utils/common.js";
import Bottom from "@/components/Bottom.vue";

const router = useRouter()

const menu = ref(LAYOUT_MENU)
const goToHome = () => router.push('/')
const handleNavClick = item => {
  router.push({
    path: item.path
  })
}
</script>

<template>
  <div class="mu_contanier">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <div class="logo" @click="goToHome">
          <img src="@/assets/logo.png" alt="logo" width="32" height="32" />
          <span class="logo_title">Bridge Land</span>
        </div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item" v-for="item in menu" :key="item.path" @click="() => handleNavClick(item)">
              <span class="nav-link active" aria-current="page">{{item.name}}</span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="content">
      <img src="@/assets/home_logo.jpg" alt="logo" class="home_logo"/>
    </div>
    <Bottom :show-image="false"/>
  </div>
</template>

<style scoped lang="less">
@import "../../global.less";
.home_logo{
  width: 100%;
  height: auto;
}
.container-fluid .logo{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
}
.container-fluid .logo .logo_title{
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  color: @primary_color;
  margin-left: .5rem;
}

.navbar{
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  background-color: #fff !important;
  box-shadow: 0 10px 10px -10px rgba(0, 0, 0, .07);
}

.navbar-collapse{
  justify-content: flex-end;
}

.navbar-nav{
  position: relative;
}

.nav-item{
  cursor: pointer;
  position: relative;
  margin-left: 1rem;
  font-size: .9375rem;
  font-weight: 700;
  &:hover{
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
    width:0;
    height: 2px;
    background: @text_color;
    content: "";
    bottom: -2px;
    transition: .3s;
    z-index: 999;
  }
}
.mu_contanier{
    padding-top: 56px;
}

.content{
  margin-bottom: 0;
}

@media screen and (min-width:991px) {
  .container-fluid{
    padding: 0 2.5rem;
  }
  .navbar{
    height: 6rem;
  }
  .mu_contanier{
    padding-top: 6rem;
  }
  .content{
    margin-bottom: -160px;
  }
}
</style>