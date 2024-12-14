import { createApp } from 'vue'
import {Form,FormItem,Radio,RadioGroup,Textarea,Input,ConfigProvider} from 'ant-design-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import App from './App.vue'
import router from './router'

createApp(App)
    .use(router)
    .use(Form)
    .use(FormItem)
    .use(Radio)
    .use(RadioGroup)
    .use(Textarea)
    .use(Input)
    .use(ConfigProvider)
    .mount('#app')