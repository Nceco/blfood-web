<script setup>
import Bottom from "@/components/Bottom.vue";
</script>
<template>
  <div class="mu_box">
    <div class="mu_header">
      <span class="span1">RECRUIT</span>
      <span class="span2">採用情報</span>
    </div>
    <div class="content">
      <div class="item">
        <div class="item_1">
          <strong>【募集ポジション】</strong>
        </div>
        <div class="item_2">カスタマーサクセス</div>
      </div>
      <div class="item">
        <div class="item_1">
          <strong>【雇用形態】</strong>
        </div>
        <div class="item_2">正社員</div>
      </div>
      <div class="item">
        <div class="item_1">
          <strong>【給与】</strong>
        </div>
        <div class="item_2">
          想定月給30万円〜<br/>
          ※別途、給与規定に従い、割増手当（深夜勤務手当・休日出勤手当・超過勤務手当）を支給します。<br/>
          ※給与改定について<br/>
          定期賃金改定：年2回<br/>
          評価制度をもとに1月と7月に実施
        </div>
      </div>
      <div class="item">
        <div class="item_1">
          <strong>【勤務地】</strong>
        </div>
        <div class="item_2">東京、大阪</div>
      </div>
      <div class="item">
        <div class="item_1">
          <strong>【応募方法】</strong>
        </div>
        <div class="item_2">
          お問い合わせフォームよりご応募ください。<br/>
          ※履歴書・職務経歴書のご提出をお願いします。
        </div>
      </div>
    </div>
  </div>
  <Bottom/>
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
    width: 60%;
    margin: 0 auto;
    .item{
      display: flex;
      flex-direction: row;
      align-items: center;
      border-bottom: 1px solid #e8ebee;
      &_1{
        width: 220px;
        padding: 20px 0;
        font-size: 0.9375rem;
        font-weight: 700;
      }
      &_2{
        padding: 20px 0;
        font-size: 0.9375rem;

      }
    }
  }
}
@media screen and (max-width:1500px) {
  .mu_box{
    padding: 0 6rem;
  }
}
@media screen and (max-width:1800px) {
  .mu_box{
    padding: 0 6rem;
    .content{
      width: 80%;
    }
  }
}
@media screen and (max-width:991px) {
  .mu_box{
    padding: 0 1rem;
    .mu_header{
      padding: 2rem 0 1.5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .span1{
        display: block;
        font-size: 1.5rem;
        font-weight: 700;
        line-height: 1.3;
        letter-spacing: .4rem;
      }
      .span2{
        font-size: .7125rem;
      }
    }
    .content{
      width: 100%;
      margin: 0 auto;
      .item{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        border-bottom: 1px solid #e8ebee;
        &_1{
          width: 220px;
          padding: 14px 0;
          font-size: 0.875rem;
          font-weight: 700;
        }
        &_2{
          padding: 0 0 14px 0;
          font-size: 0.875rem;
        }
      }
    }
  }
}
</style>