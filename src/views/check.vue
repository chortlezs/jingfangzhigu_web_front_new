<script>
import { useRouter } from 'vue-router';
const router = useRouter();
function goChat(){
    router.push({path:'/chat'})
}
export default {
  data () {
    return {
      username: '',
      checknumber: '',
      error: ''
    }
  },
  methods: {
    sendVerificationCode() {
      const params = {
         username: this.username
      };
      
      // 发起POST请求到服务器
      axios.post('/user/sendSms', params)
        .then(response => {
           console.log('成功发送验证码');
        })
        .catch(error => {
           console.error('发送验证码失败', error);
        });
   },
    async check () {
      try {
        const response = await axios.post('/user/smsLogin', {
          username: this.username,
          checknumber: this.checknumber
        })
        this.$router.push('/chat')
      } catch (error) {
        this.error = error.response.data.message
      }
    }
  }
}
</script>

<template>
<div class="body">
  <form @submit.prevent="check">
    <div class="container">
  <div class="content">
    <h1>欢迎回来！</h1>
    <p>验证码登录</p >
    <input type="text" placeholder="请输入您的账号..." v-model="username" required />
    <button class="btn-second" @click="sendVerificationCode">获取验证码</button>
    <br>
    <input type="password" placeholder="请输入验证码..." v-model="checknumber" required />
    <br>
    <button class="btn-first" @click="goChat">登录</button>
  </div>
</div>
</form>
</div>
</template>

<style scoped>
  .container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;  
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;  
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('/src/assets/login_pictures/chat_background.png');
    
  }
  .content {
    text-align: center;
    padding: 50px;
    border-radius: 12px;
  }
  h1{
  margin-left: 20px;
  
  }
 input[type="password"] {
    padding: 10px;
    margin: 10px;
    width: 300px;
    border-radius: 12px;
    border:2px solid #ccc;
    margin-bottom: 10px;
  }
   input[type="text"]{
   padding: 10px;
    margin:  10px;
    width: 210px;
    border-radius: 12px;
    border:2px solid #ccc;
    margin-bottom: 10px;
   }
  .btn-second{
    padding: 10px 7px;
    background-color: #689AFB;
    color: white;
    border: none;
    border-radius: 12px;
    font-size: 14px
  }
  .btn-first{
    margin-top:10px ;
    padding: 10px 30px;
    background-color: #689AFB;
    color: white;
    border: none;
    border-radius: 12px;
    font-size: 16px
  }
  .btn-first:hover {
    background-color: #76BDB3;
  }
  .btn-second:hover {
    background-color: #76BDB3;
  }
</style>