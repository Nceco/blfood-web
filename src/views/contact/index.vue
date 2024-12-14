<script setup>
import {reactive,ref} from 'vue'
import Bottom from "@/components/Bottom.vue";
const formRef = ref()
const formState = reactive({
  name1: '',
  name2: '',
  name3: '',
  name4: '',
  name5: '',
  phone: '',
  desc: '',
  resource: '1'
});
const onSubmit = async () => {
  await formRef.value.validateFields()
};
const emailValidator = async (_rule, value) => {
  if(!(/^[^@]+@[^@]+\.[^@]+$/.test(value))){
    return Promise.reject('メールアドレスが未記入、またはメールアドレスの形式と異なります。');
  }
  return Promise.resolve();
}
</script>
<template>
  <a-config-provider
      :theme="{
        token: {
          colorPrimary: '#0169B9',
        },
      }"
  >
    <div class="mu_box">
      <div class="mu_container">
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
          <a-form
              :model="formState"
              layout="vertical"
              size="large"
              ref="formRef"
          >
            <a-form-item label="会社名" name="name1">
              <a-input v-model:value="formState.name1" />
            </a-form-item>
            <a-form-item label="部署" name="name2">
              <a-input v-model:value="formState.name2" />
            </a-form-item>
            <a-form-item label="お名前" name="name3" :rules="[{ required: true, message: 'お名前が未記入です。' }]">
              <a-input v-model:value="formState.name3"/>
            </a-form-item>
            <a-form-item label="ふりがな" name="name4" :rules="[{ required: true, message: 'ふりがなが未記入です。' }]">
              <a-input v-model:value="formState.name4" />
            </a-form-item>
            <a-form-item
                label="メールアドレス"
                name="name5"
                :rules="[{ required: true,validator:emailValidator}]">
              <a-input v-model:value="formState.name5"/>
            </a-form-item>
            <a-form-item label="電話番号" name="phone">
              <a-input v-model:value="formState.phone"/>
            </a-form-item>
            <a-form-item label="お問い合わせ種別" name="resource" :rules="[{ required: true, message: 'メールアドレスが未記入、またはメールアドレスの形式と異なります。' }]">
              <a-radio-group v-model:value="formState.resource">
                <a-radio value="1">サービスについて</a-radio>
                <a-radio value="2">代理店ご希望</a-radio>
                <a-radio value="3">協業について</a-radio>
                <a-radio value="4">取材について</a-radio>
                <a-radio value="5">採用について</a-radio>
                <a-radio value="6">その他</a-radio>
              </a-radio-group>
            </a-form-item>
            <a-form-item label="お問い合わせ内容 " name="desc" :rules="[{ required: true, message: 'お問い合わせ内容が未記入です。' }]">
              <a-textarea v-model:value="formState.desc" />
            </a-form-item>
          </a-form>
          <div class="form_footer">
            <button @click="onSubmit">送信する</button>
          </div>
        </div>
      </div>
    </div>
  </a-config-provider>
  <Bottom/>
</template>
<style scoped lang="less">
@import "../../global.less";
.mu_box{
  padding: 0 48rem;
  .mu_container{
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
    text-align: center;
  }
  .desc1{
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 2rem;
    font-size: 14px;
  }
  .content{
    margin: 0 auto;
    :deep(.ant-form-item-control-input .ant-form-item-control-input-content .ant-radio-group){
      display: flex;
      flex-direction: column;
    }
    :deep(.ant-form-item-control-input .ant-form-item-control-input-content .ant-radio-group .ant-radio-wrapper:not(:first-child)){
      margin-top: .5rem;
    }
    :deep(.ant-form-item .ant-form-item-label >label){
      color: #333;
    }
    :deep(.ant-radio-wrapper span){
      color: #333;
    }
    :deep(input){
      height: 48px;
    }
    :deep(.ant-form-item .ant-form-item-label >label.ant-form-item-required:not(.ant-form-item-required-mark-optional)::before){
      display: inline-block;
      margin-inline-end: 4px;
      color: #ff4d4f;
      font-size: 14px;
      font-family: SimSun, sans-serif;
      line-height: 1;
      content: "[必須]";
    }
    .form_footer{
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 1rem;
      button{
        font-size: .9375rem;
        color: #fff;
        background: @primary_color;
        line-height: 3rem;
        padding: 0 3.125rem;
        border: none;
        border-radius: .25rem;
      }
    }
  }

}
@media screen and (max-width:2000px) {
  .mu_box{
    padding: 0 24rem;
  }
}
@media screen and (max-width:1500px) {
  .mu_box{
    padding: 0 12rem;
  }
}
@media screen and (max-width:991px) {
  .mu_box{
    padding: 0 1rem;
  }
}
</style>