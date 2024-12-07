<script setup>
import Bottom from "@/components/Bottom.vue";
</script>
<template>
  <div class="box">
    <div class="container">
      <div class="header">
        <span class="span1">CONTACT</span>
        <span class="span2">お問い合わせ</span>
      </div>
      <p class="desc">下記項目にご入力いただき、個人情報の取り扱いにご同意の上、送信してください。</p>
      <div class="desc1">
        <p>※ 営業目的でのお問い合わせは一切受け付けておりません。</p>
        <p>※ 一般のお客様からの個別のご予約についての質問・変更・キャンセルは、弊社では対応いたしかねます。予約をされたお店に直接ご連絡をお願いいたします。</p>
        <p>Notice: To change or cancel your reservation, please contact the restaurant directly.</p>
      </div>
      <div class="content">
        <div class="contactForm__item">
          <label class="contactForm__label">
            <span class="contactForm__labelTitle">会社名</span>
            <input type="text" id="company_name" name="company_name" size="60" placeholder="株式会社トレタ">
          </label>
        </div>
        <div class="contactForm__item">
          <label class="contactForm__label">
            <span class="contactForm__labelTitle">部署</span>
            <input type="text" id="department" name="department" size="60" placeholder="営業部">
          </label>
        </div>
        <div class="contactForm__item form-group has-error has-danger">
          <label class="contactForm__label">
            <span class="contactForm__labelTitle control-label">お名前</span>
            <span class="contactForm__requireMark">[必須]</span>
            <input type="text" id="inquirer_name" name="inquirer_name" class="form-control" size="60" placeholder="三方　良子" data-error="お名前が未記入です。" required="">
          </label>
          <div class="contactForm__errorText help-block with-errors" v-if="false"><ul class="list-unstyled"><li>お名前が未記入です。</li></ul></div>
        </div>
        <div class="contactForm__item form-group has-error has-danger">
          <label class="contactForm__label">
            <span class="contactForm__labelTitle control-label">ふりがな</span>
            <span class="contactForm__requireMark">[必須]</span>
            <input type="text" id="inquirer_name_kana" name="inquirer_name_kana" class="form-control" size="60" placeholder="さんぽう よしこ" data-error="ふりがなが未記入です。" required="">
          </label>
          <div class="contactForm__errorText help-block with-errors" v-if="false"><ul class="list-unstyled"><li>ふりがなが未記入です。</li></ul></div>
        </div>
        <div class="contactForm__item form-group has-error has-danger">
          <label class="contactForm__label">
            <span class="contactForm__labelTitle control-label">メールアドレス</span>
            <span class="contactForm__requireMark">[必須]</span>
            <input type="email" id="mail_address" name="mail_address" class="form-control" size="60" placeholder="info@toreta.in" data-error="メールアドレスが未記入、またはメールアドレスの形式と異なります。" required="">
          </label>
          <div class="contactForm__errorText help-block with-errors" v-if="false"><ul class="list-unstyled"><li>メールアドレスが未記入、またはメールアドレスの形式と異なります。</li></ul></div>
        </div>
        <div class="contactForm__item form-group">
          <label class="contactForm__label control-label">
            <span class="contactForm__labelTitle">電話番号</span>
            <input type="tel" id="phone_number" name="phone_number" size="60" placeholder="03-6431-9006">
          </label>
        </div>
        <div class="contactForm__item form-group">
          <label class="contactForm__label">
            <span class="contactForm__labelTitle trol-label">お問い合わせ種別</span>
            <span class="contactForm__requireMark">[必須]</span>
          </label>
          <span class="radio-field horizontal-item">
          <label>
            <input type="radio" name="inquiry_type" value="サービスについて" checked="checked" required="">
            <span class="radio-field-text">サービスについて</span>
          </label>
        </span>
          <span class="radio-field horizontal-item">
          <label>
            <input type="radio" name="inquiry_type" value="代理店ご希望" required="">
            <span class="radio-field-text">代理店ご希望</span>
          </label>
        </span>
          <span class="radio-field horizontal-item">
          <label>
            <input type="radio" name="inquiry_type" value="協業について" required="">
            <span class="radio-field-text">協業について</span>
          </label>
        </span>
          <span class="radio-field horizontal-item">
          <label>
            <input type="radio" name="inquiry_type" value="取材について" required="">
            <span class="radio-field-text">取材について</span>
          </label>
        </span>
          <span class="radio-field horizontal-item">
          <label>
            <input type="radio" name="inquiry_type" value="採用について" required="">
            <span class="radio-field-text">採用について</span>
          </label>
        </span>
          <span class="radio-field horizontal-item">
          <label>
            <input type="radio" name="inquiry_type" value="その他" required="">
            <span class="radio-field-text">その他</span>
          </label>
        </span>
        </div>
        <div class="contactForm__item form-group has-error has-danger">
          <label class="contactForm__label">
            <span class="contactForm__labelTitle control-label">お問い合わせ内容</span>
            <span class="contactForm__requireMark">[必須]</span>
            <textarea id="inquiry_description" name="inquiry_description" cols="50" rows="5" data-error="お問い合わせ内容が未記入です。" required=""></textarea>
          </label>
          <div class="contactForm__errorText help-block with-errors" v-if="false"><ul class="list-unstyled"><li>お問い合わせ内容が未記入です。</li></ul></div>
        </div>
        <div class="contactForm__submit">
          <button type="submit" name="送信する" value="send" class="btn ripple center-block disabled">送信する</button>
        </div>
      </div>
    </div>
    <Bottom/>
  </div>
</template>
<style scoped lang="less">
@import "../../global.less";
.box{
  .container{
    width: 60%;
    margin: 0 auto;
  }
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
  p{
    margin: 0;
  }
  .desc{
    margin-bottom: 2rem;
    line-height: 1.875rem;
    font-size: 14px;
    margin-left: 16%;
  }
  .desc1{
    margin-left: 16%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 2rem;
    font-size: 14px;
  }
  .content{
    .contactForm__item{
      margin-bottom: 2rem;
    }
    .contactForm__label{
      display: block;
      font-size: 1rem;
      font-weight: 400;
      max-width: 100%;
      margin-bottom: 5px;
    }
    .contactForm__labelTitle{
      display: inline-block;
      padding-bottom: .25em;
    }
    .contactForm__item input, .contactForm__item select, .contactForm__item textarea {
      display: block;
      background: #fff;
      width: 100%;
      border-radius: .25rem;
      border: 1px solid #d3d3d3;
      height: 3rem;
      line-height: 3rem;
      padding: 0 .875rem;
      font-size: 1rem;
    }
  }
  .help-block {
    display: block;
    margin-top: 5px;
    margin-bottom: 10px;
    color: #737373;
  }
  .contactForm__requireMark {
    margin-left: .375rem;
    color: #ff5040;
  }
  .form-control {
    width: 100%;
    height: 34px;
    padding: 6px 12px;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
    transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
  }
  .has-error .form-control {
    border-color: #a94442;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
  }
  .list-inline, .list-unstyled {
    padding-left: 0;
    list-style: none;
  }

  ol, ul {
    margin: 0;
    padding: 0;
  }

  .contactForm__item .radio-field {
    display: block;
    font-weight: 400;
    margin-bottom: .3125rem;
  }
  .contactForm__item .radio-field-text {
    vertical-align: middle;
  }
  .contactForm__item input[type=checkbox], .contactForm__item input[type=radio] {
    display: inline-block;
    width: 1rem;
    height: 1rem;
  }

  .contactForm__item textarea {
    height: 10rem !important;
  }
  .contactForm__submit {
    text-align: center;
  }
  .contactForm__submit>button {
    font-size: .9375rem;
    color: #fff;
    background: @primary_color;
    line-height: 3rem;
    padding: 0 3.125rem;
    border: none;
    border-radius: .25rem;
  }
}
</style>