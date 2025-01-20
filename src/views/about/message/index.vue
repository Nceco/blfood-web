<script setup>
</script>
<template>
  <div class="mu_box">
    <div class="mu_header">
      <span class="span1">MESSAGE</span>
      <span class="span2">代表あいさつ</span>
    </div>
    <div class="content">
      <p>私は、かつて農業高校の実習教員として、日本の農業教育に携わっておりました。現場で多くの課題に直面し、「教育だけでは限界がある。現場の仕組みそのものを変えなければならない」という思いが日に日に強くなりました。</p>
      <p>その想いから教員を辞め、大先輩のご指導のもと、農業の課題解決を目指して食肉ビジネスを立ち上げました。</p>
      <p>しかし、飲食店やさまざまな施設との関わりの中で、日本の豊かな食文化や美しい風景、歴史といった誇るべき資源が、国内市場だけでは十分に活かされていないことに気づきました。</p>
      <p>「これらの価値を世界へ発信し、多くの方々に直接体験してもらうことこそが、日本の農業や地域全体の活性化につながる」と確信しました。</p>
      <p>そこで次のステップとして、インバウンド事業に軸足を移し、世界中の方々に日本の魅力を体感していただく活動をスタートしました。</p>
      <p>こうした挑戦の中で、日本の素晴らしい資源を最大限に活用し、地域と世界をつなぎ、ともに成長する事業を展開しております。地域の未来を次世代へとつなげるため、これからも果敢に挑戦を続けてまいります。</p>
      <p>今後とも、変わらぬご支援とご愛顧を賜りますよう、心よりお願い申し上げます。</p>
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
