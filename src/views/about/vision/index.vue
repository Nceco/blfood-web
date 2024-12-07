<script setup>
</script>
<template>
  <div class="box">
    <section class="header">
      <p class="span1">VISION</p>
      <p class="title">日本を訪れる人々と日本全国を元気にする架け橋となる</p>
    </section>
    <div class="content">
      <p>我々は日本という国の歴史、文化、人々との触れ合いを通じ、「本物の日本」を実感していただき、再び訪れたくなるような感動や一生の思い出を作っていただけるような体験を創出します</p>
    </div>
  </div>
</template>
<style scoped lang="less">
@import '../../../global.less';
.box{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  .header{
    padding: 4rem 0 2.5rem;
    text-align: center;
    .span1{
      margin-bottom: 2.5rem;
      display: block;
      font-size: 2rem;
      font-weight: 700;
      line-height: 1.3;
      letter-spacing: .4rem;
    }
    .title{
      font-size: 2.5rem;
      font-family: Roboto Condensed, sans-serif;
      font-weight: 700;
      line-height: 1.5;
      text-align: center;
    }
  }
  .content{
    max-width: 750px;
    text-align: left;
    p{
      font-size: 14px;
      line-height: 1.875rem;
    }
  }
}
</style>