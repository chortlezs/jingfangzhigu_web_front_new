  
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

  </style>