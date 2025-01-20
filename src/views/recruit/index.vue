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
          <strong>【職種】</strong>
        </div>
        <div class="item_2">フィールドセールス</div>
      </div>
      <div class="item">
        <div class="item_1">
          <strong>【仕事内容】</strong>
        </div>
        <div class="item_2">
          インバウンド市場の拡大に伴い、訪日外国人観光客と日本の事業者様をつなぐ多様なソリューション提案をお任せいたします。<br/>
          １、飲食店・宿泊施設様向けインバウンド集客支援サービスの提案営業 └ 中国SNS運用代行やメディア広告など、多様な集客支援サービスの提案<br/>
          ２、飲食店様向け自社開発インバウンド対応システムの提案営業 └ 順番待ち・モバイルオーダー・セルフ決済をワンストップで提供する最新システムの導入提案<br/>
          ３、宿泊施設様向け海外OTAサイト運用代行サービスの提案・導入サポート └ CtripやBooking.comなどの運用代行で、集客力向上と業務効率化をサポート<br/>
          ※ご経験・ご希望に応じて、1つの業務に専念することも、複数の業務に挑戦することも可能です！
        </div>
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
          ※別途、給与規定に基づき割増手当（深夜勤務・休日出勤・超過勤務）支給<br/>
          ※年2回の定期賃金改定（1月・7月、評価制度に基づく）
        </div>
      </div>
      <div class="item">
        <div class="item_1">
          <strong>【勤務地】</strong>
        </div>
        <div class="item_2">東京／大阪</div>
      </div>
      <div class="item">
        <div class="item_1">
          <strong>【応募資格】</strong>
        </div>
        <div class="item_2">
          ・営業経験（業界不問）歓迎<br/>
          ・旅行・外食に興味がある方<br/>
          ・英語・中国語スキルを活かしたい方、さらに伸ばしたい方歓迎
        </div>
      </div>
      <div class="item">
        <div class="item_1">
          <strong>【福利厚生】</strong>
        </div>
        <div class="item_2">
          ・各種社会保険完備<br/>
          ・交通費全額支給<br/>
          ・賞与年2回（業績による）<br/>
          ・社内イベント・研修制度あり
        </div>
      </div>
      <div class="item">
        <div class="item_1">
          <strong>【応募方法】</strong>
        </div>
        <div class="item_2">エントリーフォームよりご応募ください。</div>
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
        flex: 1;
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
