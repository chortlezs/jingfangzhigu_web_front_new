<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
function goLogin(){
    router.push({path:'/goLogin'})
}


</script>

<template>
<div class="body">
    <div class="container">
  <div class="content">
    <h1>开始创建您的个人账户吧！</h1>
    <a>您可以使用手机号或邮箱作为您的账户</a>
    <p>请输入您的账号和密码</p >
    <div>
    <input type="text" placeholder="请输入您的账号...">
    <button class="btn-second" onclick="location.href='somethingelse.html'">获取验证码</button>
    </div>
    <div>
    <input type="identify" placeholder="请输入验证码...">
    </div>
    <div>
    <input type="password" placeholder="请输入您的密码...">
    </div>
    <div>
    <input type="password" placeholder="请再次输入您的密码...">
    </div>
    <button class="btn-first" >注册患者</button>
    <button class="btn-third" >注册医师</button>
    <div>·已注册过账号？<a @click="goLogin">-点此登录-</a></div>
  </div>
</div>
</div>
</template>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;    
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
 
  }
  p{
  color:#000000;
  font-weight:bold;
  font-size:18px;
  }
  a{
  font-size:14px;
  }

 input[type="identify"] {
    padding: 10px;
    margin: 10px;
    width: 300px;
    border-radius: 12px;
    border:2px solid #ccc;
    margin-bottom: 10px;
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
    margin-right:70px;
    padding: 10px 30px;
    background-color: #689AFB;
    color: white;
    border: none;
    border-radius: 12px;
    font-size: 16px

  }

  .btn-third{
    margin-top:10px ;
    padding: 10px 30px;
    background-color: #76BDB3;
    color: white;
    border: none;
    border-radius: 12px;
    font-size: 16px

  }
  .btn-first:hover {
    background-color: #D3D3D3;
    color: #000000;
  }
  .btn-second:hover {
    background-color:  #D3D3D3;
    color: #000000;
  }
   .btn-third:hover {
    background-color:   #D3D3D3;
    color: #000000;
  }
</style>
