<script>
import $ from 'jquery'
import { useRouter } from 'vue-router';
const router = useRouter();
function goCheck(){
    router.push({path:'/Check'})
}
$(document).ready(function(){
   $("#loginbtn").click(function(){
      var username = $("#username").val();
      var password = $("#password").val();
      
      // 假设登录成功后，跳转到主页
      if(username === "admin" && password === "123456"){
         window.location.href = "/index";
      } else {
         alert("用户名或密码错误，请重新输入");
      }
   });
});
</script>

<template>
<div class="body">
    <div class="container">
        <div class="content">
        <h1>欢迎回来！</h1>
        <p>登录您的账户</p >
        <input type="text" id="username" placeholder="请输入您的账号...">
        <br>
        <input type="password" id="password" placeholder="请输入您的密码...">
        <br>
        <button id="loginbtn">登录</button>
        <p><a @click="goCheck">忘记密码？</a></p >
         </div>
         <div id="result"></div>
    </div>
</div>
</template>


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