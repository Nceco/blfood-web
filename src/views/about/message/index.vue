<script setup>
</script>
<template>
  <div class="mu_box">
    <div class="mu_header">
      <span class="span1">MESSAGE</span>
      <span class="span2">代表あいさつ</span>
    </div>
    <div class="content">
      <p>私は、もともと農業高校の実習教員として、日本の農業教育に携わっていました。その中で、農業の現場が抱える課題を目の当たりにし、「教育だけでは限界がある。現場の仕組みを根本から変えなければならない」という思いが強くなりました。その想いから教員を辞め、大先輩の指導を受けながら、農業の課題解決を目指して食肉ビジネスを立ち上げました。</p>
      <p>しかし、飲食店や様々な施設と関わる中で日本の豊かな食文化、美しい風景、歴史、といった誇りに思う資源が、国内市場だけでは十分に活かされていないことに気づきました。「これらの価値をグローバルに発信し、多くの方に体験してもらうことこそが、日本の農業や地域全体を活性化させる道ではないか」と考えるようになりました。</p>
      <p>そこで、次のステップとして、インバウンド事業に軸足を移し、世界中の方々に日本の魅力を直接体感していただく活動をスタートしました。こうした転換を経て、日本の素晴らしい資源を最大限に活用し、地域と世界を繋ぎ、共に成長する事業を展開してまいります。地域の未来を次世代に繋げる挑戦を続けています。</p>
      <p>引き続きご支援を賜りますよう、どうぞよろしくお願い申し上げます。</p>
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