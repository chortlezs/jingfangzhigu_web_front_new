<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
function Login(){
    router.push({path:'/login'})
}

</script>

<template>
<div class="body">
    <div class="header">
    <a @click="goLogin">经方智谷小程序</a>
    <a @click="goLogin">功能反馈</a>
    <a @click="User"><img src="/src/assets/login_pictures/profile_photo.jpg" alt="user" class="user"></a>
  </div>
  <div class="main">
    <div class="left">
        <img src="/src/assets/login_pictures/logo.png" alt="Logo" class="logo">
        <h1>欢迎来到<span class="highlight">经方智谷</span></h1>
        <h2>开启您的中医诊疗之旅吧</h2>
        <p>——您的私人ai中医诊疗助手——</p >
    </div>
    <div class="container">
      <div class="center-bottom"><a @click="Login">开始问询！</a></div >
       <div class="arrow-container">
        <img src="/src/assets/login_pictures/arrow_down.png" alt="arrow" class="arrow">
      </div>
     </div>
    </div>
</div>
</template>

<style scoped>
html{
  font-size: 16px;
}
.body {  
  background: linear-gradient(to bottom, transparent 70%, white 100%), url('/src/assets/login_pictures/welcome_background.png');  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;  
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center; 
}
/* 当宽度大于700px时 */
@media (min-width: 700px) {
  .container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 170vh;
  }
  .left h1
{
  position: absolute;
  top: 18rem;
  left: 2rem;
}
.left h2{
  position: absolute;
  top: 23rem;
  left: 1rem;
}
p{
position: absolute;
top: 30em;
left: 6rem;
font-size: 1rem;
}
.header{
  font-size: 1.25rem;
  width: 58rem;
}
.center-bottom{
  font-size: 50px;
}
}
/* 宽度小于700px 改布局 */
@media(max-width: 700px){
  /* 调整“开始问询”按钮位置 */
  .container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 150vh;
  }
  /* 换了新的背景图，避免文字和底图重叠 */
  .body{
    background-size: cover; 
    background-image: linear-gradient(to bottom, transparent 70%, white 100%),url('/src/assets/login_pictures/rebuild_welcome.png');
  }
  /* 改了字体大小 */
  .left h1
  {
    position: absolute;
    top:10vh;
    left: 3vh;
    font-size: 28px;
  }
  .left span{
    font-size: 45px;
  }
  .left h2{
    position: absolute;
    top:18vh;
    left: 2vh;
    font-size: 28px;
  }
  p{
    position: absolute;
    top: 25vh;
    left: 5vh;
  }
  .header{
    font-size: 0.75rem;
    width: 20rem;
  }
  .center-bottom{
    font-size: 30px;
  }
  .container{
    margin-left: -2vh;
  }
}
.logo {
position: absolute;
top: 0.625rem;
left: 0.625rem;
width: 5.625rem; /* 设置图片的宽度 */
height: auto; /* 让高度按比例自动调整 */
}

.header {
  position: fixed;
  background-color:#f7f7f7;
  padding: 0.3rem;
  right:1.25rem;
  top:1.25rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-radius:1.9rem;
  box-shadow: 0px 4px 4px -2px rgba(0, 0, 0, 0.5); /* 添加下阴影 */

}

.user {
  width: 3.125rem;
  height: 3.125rem;
  border-radius:50%;
  margin-right:0.625rem;
  display: flex;
}

.main {
  display: flex;
  height: 100vh;
}
.left img{
  display: flex;
}
.left {
  width: 40%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1 {
  text-align: center;
  font-size: 2.5rem;
  color: #689AFB;
  margin-bottom:0.3rem;
}

h2{
font-size: 3.125rem;
color: #689AFB;
margin-top:0.625rem;
margin-bottom:0.625rem;
}

a{
text-decoration: none;
color: #689AFB;
font-weight:bold;
margin-right:30px;
}

.center-bottom { 
  width: 100%;
}

.arrow{
  margin-left:-3rem;
}

.highlight {
  font-size: 3.75rem;
}


.center {
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>