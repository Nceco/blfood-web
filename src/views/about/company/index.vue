<script setup>
</script>
<template>
  <div class="box">
    <div class="header">
      <span class="span1">COMPANY</span>
      <span class="span2">企業情報</span>
    </div>
    <div class="content">
      <div class="item">
        <div class="item_1">
          <strong>会社名</strong>
        </div>
        <div class="item_2">株式会社ブリッジランド</div>
      </div>
      <div class="item">
        <div class="item_1">
          <strong>住所</strong>
        </div>
        <div class="item_2">〒665-0874<br/>
          兵庫県宝塚市中筋6丁目13番20</div>
      </div>
      <div class="item">
        <div class="item_1">
          <strong>電話番号</strong>
        </div>
        <div class="item_2">0797-89-8829</div>
      </div>
      <div class="item">
        <div class="item_1">
          <strong>代表者</strong>
        </div>
        <div class="item_2">池畑浩太朗</div>
      </div>
      <div class="item">
        <div class="item_1">
          <strong>設立</strong>
        </div>
        <div class="item_2">平成28年3月16日</div>
      </div>
      <div class="item">
        <div class="item_1">
          <strong>資本金</strong>
        </div>
        <div class="item_2">1000万円</div>
      </div>
      <div class="item">
        <div class="item_1">
          <strong>取引銀行</strong>
        </div>
        <div class="item_2">西兵庫信用金庫</div>
      </div>
      <div class="item">
        <div class="item_1">
          <strong>事業内容</strong>
        </div>
        <div class="item_2">• 飲食店向け管理システムの企画・開発・販売<br/>
          • インバウンド集客支援</div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
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
  .content{
    margin-left: 16%;
    .item{
      display: flex;
      flex-direction: row;
      align-items: center;
      border-bottom: 1px solid #e8ebee;
      &_1{
        width: 220px;
        padding: 20px 0;
        font-size: 15px;
        font-weight: 700;
      }
      &_2{
        padding: 20px 0;
        font-size: 15px;
      }
    }
  }
}
</style>