  
<script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps(['content']);
</script>

<template>
    <div class="popup" @click="$emit('close')">
      <img src="@/assets/setting_pictures/tap.png" class="tap-picture">
      <div class="popup-name">
        <span style="font-size: 20px; color: #689AFB;">{{ props.content }}</span>
      </div>
      <div class="popup-content">
        <span style="margin-left: 20px;">经方智谷助手将把您与助手的对话</span>
        <span style="margin-left: 40px;">记录和您的健康数据发送到</span> 
        <p style="margin: 5px 0px 5px 70px; color: #689AFB;">*******@***.com邮箱</p>
        <span style="margin-left: 75px;">请您确认信息无误！</span>
        <button style="margin:20px 42px ;">修改</button>
        <button style="margin:20px 35px;">确认</button>
      </div>
    </div>
  </template>

  <style scoped>
.popup {
    position: fixed;
    width: 500px;
    height: 421px;
    top: 50%;
    left: 53%;
    transform: translate(-50%, -50%);
    background-image: url('@/assets/setting_pictures/popup.png');
}

  .tap-picture {
    position: relative;
    left: 473px;
    top: 86px;

  }
  .popup-name {
    position: absolute;
    width: 120px;
    height: 29px;
    top: 115px;
    left: 210px;
  }

  .popup-content {
    position: absolute;
    width: 311px;
    height: 123px;
    left: 110px;
    top: 200px;
    font-size: 18px;
    button{
        width: 78px;
        height: 40px;
        background-color: #689AFB;
        color: #fff;
        border-radius: 10px;
        border: none;
        font-size: 20px;
    }
  }
  
  </style>