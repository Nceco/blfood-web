<script setup>
import Bottom from "@/components/Bottom.vue";
</script>
<template>
  <div class="mu_box">
    <div class="mu_header">
      <span class="span1">NEWS</span>
      <span class="span2">お知らせ</span>
    </div>
    <div class="content">
      <div class="item">
        <div class="items">
          <p class="item_1">2019年7月</p>
          <p class="item_2">「プレスリリース」</p>
        </div>
        <p class="item_3">飲食店向け自動順番待ち・モバイルオーダーシステムソフトローンチを開始</p>
      </div>
      <div class="item">
        <div class="items">
          <p class="item_1">2019年8月</p>
          <p class="item_2">「プレスリリース」</p>
        </div>
        <p class="item_3">「Ctrip」に特化したマーケティングサービスを開始</p>
      </div>
      <div class="item">
        <div class="items">
          <p class="item_1">2019年8月</p>
          <p class="item_2">「プレスリリース」</p>
        </div>
        <p class="item_3">旅行商品（飲食、交通、エンターテインメント、ショッピング）のOTAサイト、旅行代理店における運用代行サービスを開始</p>
      </div>
      <div class="item">
        <div class="items">
          <p class="item_1">2019年9月</p>
          <p class="item_2">「プレスリリース」</p>
        </div>
        <p class="item_3">「大衆点評」に特化したマーケティングサービスを開始</p>
      </div>
      <div class="item">
        <div class="items">
          <p class="item_1">2021年6月</p>
          <p class="item_2">「プレスリリース」</p>
        </div>
        <p class="item_3">宿泊業界特化のコンサルティング業務を開始</p>
      </div>
      <div class="item">
        <div class="items">
          <p class="item_1">2023年1月</p>
          <p class="item_2">「プレスリリース」</p>
        </div>
        <p class="item_3">「Ctrip」と協力的パートナーシップ契約を締結</p>
      </div>
      <div class="item">
        <div class="items">
          <p class="item_1">2023年1月</p>
          <p class="item_2">「プレスリリース」</p>
        </div>
        <p class="item_3">宿泊施設向け「Ctrip」、「Booking.com」運用代行サービスを開始</p>
      </div>
      <div class="item">
        <div class="items">
          <p class="item_1">2024年1月</p>
          <p class="item_2">「お知らせ」</p>
        </div>
        <p class="item_3">飲食店向け再開発のインバウンド対応順番待ち、モバイルオーダー、セルフ決済ワンストップシステムV1.0完成</p>
      </div>
      <div class="item">
        <div class="items">
          <p class="item_1">2024年2月</p>
          <p class="item_2">「プレスリリース」</p>
        </div>
        <p class="item_3">大阪民泊の運用代行サービスを開始</p>
      </div>
      <div class="item">
        <div class="items">
          <p class="item_1">2024年2月</p>
          <p class="item_2">「プレスリリース」</p>
        </div>
        <p class="item_3">大阪民泊の運用代行サービスを開始</p>
      </div>
      <div class="item">
        <div class="items">
          <p class="item_1">2024年7月</p>
          <p class="item_2">「お知らせ」</p>
        </div>
        <p class="item_3">飲食店向け再開発のインバウンド対応順番待ち、モバイルオーダー、セルフ決済ワンストップシステムV2.0完成</p>
      </div>
      <div class="item">
        <div class="items">
          <p class="item_1">2024年8月</p>
          <p class="item_2">「プレスリリース」</p>
        </div>
        <p class="item_3">中国最大口コミサイト「大衆点評」と日本代理店契約を締結</p>
      </div>
      <div class="item">
       <div class="items">
        <p class="item_1">2024年10月</p>
        <p class="item_2">「プレスリリース」</p>
       </div>
        <p class="item_3">Ctrip傘下中国プレミアム旅行ブランド「鸿鹄逸游」と業務提携</p>
      </div>
    </div>
  </div>
  <Bottom/>
</template>
<style scoped lang="less">
@import "../../global.less";
.mu_box {
  padding: 0 16rem;
  .mu_header {
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
    p{
        margin: 0;
      }
    .item{
      display: flex;
      flex-direction: row;
      align-items: center;
      transition: .3s;
      border-bottom: 1px solid #e8ebee;
      padding: 1.25rem 0;
      cursor: pointer;
      .items{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        width: 260px;
        .item_1{
          font-size: .75rem;
          color: #999;
          margin-right: .5rem;
        }
        .item_2{
          width: 150px;
          text-align: center;
          padding: .3125rem .3125rem .1875rem;
          border: 1px solid @primary_color;
          color: @primary_color;
          font-size: .8125rem;
          margin-left: 1rem;
        }
      }
      &:hover{
        opacity: .7;
      }
      &_3{
        flex: 1;
        font-size: .9375rem;
        margin-left: .5rem;
      }
    }
  }
}
@media screen and (max-width:1800px) {
  .mu_box{
    padding: 0 6rem;
  }
}
@media screen and (max-width:991px) {
  .mu_box{
    padding: 0 1rem;
    .mu_header {
      padding: 2rem 0 1.5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .span1 {
        display: block;
        font-size: 1.5rem;
        font-weight: 700;
        line-height: 1.3;
        letter-spacing: .4rem;
      }

      .span2 {
        font-size: .7125rem;
      }
    }
    .content{
      p{
          margin: 0;
        }
      .item{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        transition: .3s;
        border-bottom: 1px solid #e8ebee;
        padding: 1.25rem 0;
        cursor: pointer;
        .items{
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          .item_1{
            font-size: .75rem;
            color: #999;
            margin-right: .5rem;
          }
          .item_2{
            width: 150px;
            text-align: center;
            padding: .3125rem .3125rem .1875rem;
            border: 1px solid @primary_color;
            color: @primary_color;
            font-size: .8125rem;
            margin-left: 1rem;
          }
        }
        &:hover{
          opacity: .7;
        }
        &_3{
          margin-top: 1rem;
          flex: 1;
          font-size: .9375rem;
          margin-left: 0;
        }
      }
    }
  }
}
</style>