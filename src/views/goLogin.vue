
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
import axios from 'axios';
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
      try {
        // 向后端发送登录请求
        const response = await axios.post('/user/passwordLogin', {
          username: this.username,
          password: this.password
        });
        // 登录成功，跳转到聊天页面
        this.$router.push('/chat');
      } catch (error) {
        // 处理登录失败的情况
        if (error.response) {
          this.error = error.response.data.message;
        } else {
          this.error = '登录失败，请重试';
        }
      }
    }
  }
//   methods: {
//   login() {
//     const formData = new FormData();
//     formData.append('username', this.username);
//     formData.append('password', this.password);
    
//     axios.post('/user/passwordLogin', formData)
//       .then(response => {
//         if (response.status === 200 && response.data.success) {
//           this.$router.push('/chat');
//           // 登录成功，根据业务需求进行相应的页面跳转或其他操作
//         } else {
//           console.log("登录失败");
//         }
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }
// }
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