
<template>
<div class="body">
  <form @submit.prevent="login">
    <div class="container">
        <div class="content">
        <h1>欢迎回来！</h1>
        <p>登录您的账户</p>
        <input type="text" placeholder="请输入您的账号..." v-model="username" required />
        <br>
        <input type="password" placeholder="请输入您的密码..." v-model="password" required />
        <br>
        <button type="submit">登录</button>
        <p><a @click="$router.push('/check')">忘记密码？</a></p>
         </div>
         <div id="result"></div>
    </div>
  </form>
</div>
</template>

<script>
import $ from 'jquery'
import { useRouter } from 'vue-router';
const router = useRouter();
export default {
  data () {
    return {
      username: '',
      password: '',
      error: ''
    }
  },
  methods: {
    async login () {
      //连接后端
      try {
        await this.$store.dispatch('login', {
          username: this.username,
          password: this.password
        })
        this.$router.push('/chat')
      } catch (error) {
        this.error = error.response.data.message
      }
    }
  }
}
</script>

<style scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-image: url('/src/assets/login_pictures/chat_background.png');
   
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;  
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;  
  }
  .content {
    text-align: center;
    padding: 50px;
    border-radius: 12px;
  }
  h1{
  margin-left: 20px;
  font-weight:bold;
  }
  input[type="text"], input[type="password"] {
    padding: 10px;
    margin: 10px;
    width: 300px;
    border-radius: 12px;
    border:2px solid #ccc;
    margin-bottom: 10px;
  }
  button {
    padding: 10px 20px;
    background-color: #689AFB;
    color: white;
    border: none;
    border-radius: 12px;
    font-size: 16px
  }
  button:hover {
    background-color: #76BDB3;
  }
</style>