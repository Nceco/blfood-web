<script setup>
import Bottom from "@/components/Bottom.vue";
</script>
<template>
  <div class="box">
    <div class="header">
      <span class="span1">ACHIEVEMENT</span>
      <span class="span2">導入事例</span>
    </div>
    <Bottom/>
  </div>
</template>
<style scoped lang="less">
@import "../../global.less";
.box{
  .header{
    padding: 4rem 0 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .span1{
      display: block;
      font-size: 2rem;
      font-weight: 700;
      line-height: 1.3;
      letter-spacing: .4rem;
    }
    .span2{
      font-size: .8125rem;
    }
  }
}
</style>