<script setup>
import Bottom from "@/components/Bottom.vue";
</script>
<template>
  <div class="box">
    <div class="header">
      <span class="span1">RECRUIT</span>
      <span class="span2">採用情報</span>
    </div>
    <div class="content">
      <div class="item">
        <span class="span1">【募集ポジション】</span>
        <span class="span2">カスタマーサクセス</span>
      </div>
      <div class="item">
        <span class="span1">【雇用形態】</span>
        <span class="span2">正社員</span>
      </div>
      <div class="item">
        <span class="span1">【給与】</span>
        <span class="span2">想定月給30万円〜</span>
        <span class="span2">※別途、給与規定に従い、割増手当（深夜勤務手当・休日出勤手当・超過勤務手当）を支給します。</span>
        <span class="span2">※給与改定について</span>
        <span class="span2">定期賃金改定：年2回</span>
        <span class="span2">評価制度をもとに1月と7月に実施</span>
      </div>
      <div class="item">
        <span class="span1">【勤務地】</span>
        <span class="span2">東京、大阪</span>
      </div>
      <div class="item">
        <span class="span1">【応募方法】</span>
        <span class="span2">お問い合わせフォームよりご応募ください。</span>
        <span class="span2">※履歴書・職務経歴書のご提出をお願いします。</span>
      </div>
    </div>
    <Bottom/>
  </div>
</template>
<style scoped lang="less">
@import "../../global.less";
.box {
  .header {
    padding: 4rem 0 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .span1 {
      display: block;
      font-size: 2rem;
      font-weight: 700;
      line-height: 1.3;
      letter-spacing: .4rem;
    }

    .span2 {
      font-size: .8125rem;
    }
  }
  .content{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .item{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-bottom: 1.5rem;
      .span1{
        font-size: 1.2rem;
        font-weight: 700;
        margin-bottom: .5rem;
      }
      .span2{
        font-size: .8125rem;
        margin-bottom: .2rem;
      }
    }
  }
}
</style>