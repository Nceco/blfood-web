<script setup>
</script>
<template>
  <div class="mu_box">
    <div class="mu_header">
      <span class="span1">導入事例</span>
<!--      <span class="span2">代表あいさつ</span>-->
    </div>
    <div class="content">

    </div>
  </div>
</template>
<style scoped lang="less">
.mu_box{
  padding: 0 24rem;
  .mu_header{
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
  .content{
    text-align: left;
    p{
      line-height: 1.875rem;
      font-size: 0.9375rem;
    }
  }
}
@media screen and (max-width:1500px) {
  .mu_box{
    padding: 0 6rem;
  }
}
@media screen and (max-width:991px) {
  .mu_box{
    padding: 0 1rem;
    .mu_header{
      padding: 2rem 0 1.5rem;
      text-align: center;
      .span1{
        margin-bottom: 1.5rem;
        display: block;
        font-size: 1.5rem;
        font-weight: 700;
        line-height: 1.3;
        letter-spacing: .4rem;
      }
      .title{
        font-size: 1.5rem;
        font-family: Roboto Condensed, sans-serif;
        font-weight: 700;
        line-height: 1.5;
        text-align: center;
      }
    }
    .content{
      p{
        font-size: 0.875rem;
      }
    }
  }
}
</style>