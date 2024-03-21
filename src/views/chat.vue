<script lang="ts" setup>
import {ref,onMounted} from 'vue'
import Aside from '@/components/chat/Aside.vue'
import Main from '@/components/chat/Main.vue'
import { useRouter } from 'vue-router';
import store from '@/store/index.js'
const router = useRouter();
function goPersonal(){
    router.push({path:'/personal'})
}
function goUser(){
    router.push({path:'/user'})
}

const mainRef = ref(null)
const imageUrl = ref('https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png')
onMounted(()=>{
    let headUrl = localStorage.getItem('headimg')
    console.log(store.state.token, '这是我的token')
    if(headUrl){
        imageUrl.value = headUrl
    }
})

let messageArray = ref([]);
// 处理子组件发出的自定义事件
const handleMessagesUpdated = (data) => {
  messageArray.value = data;
};
const dialogues = ref([]);

let selectedChatId = ref('');
const selectChat = (chatId) => {
  selectedChatId.value = chatId;
};
const newChatName = ref('');
const handleUpdateChatName = (newChatNameValue, chatId) => {
  newChatName.value = newChatNameValue;
  console.log(newChatName,'newChatName');
};
</script>

<template>
    <el-container class="background">
      <el-header class="el-header" >
            <img class='logoimg' src="@/assets/chat_pictures/logo.png"/>
        <div class="search">
          <el-dropdown>
            <el-avatar :src="imageUrl" class='avator' />
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item @click="goPersonal">个人中心</el-dropdown-item>
                <el-dropdown-item @click="goUser">设置</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
            
            <el-button class="search-choice">
                <h4 >功能反馈</h4>
                <img src="@/assets/chat_pictures/remark.png" />
            </el-button> 
            <el-button class="search-choice">
                <h4 >经方智谷小程序</h4>
                <img src="@/assets/chat_pictures/program.png" />
            </el-button>            
        </div>
      </el-header>
      <el-container class="leftandright">
        <Aside :dialogues="dialogues" @messages-updated="handleMessagesUpdated" @select-chat="selectChat" :newChatName="newChatName"/>
        <Main  :messageArray = "messageArray" :selectedChatId="selectedChatId" @update-chat-name="handleUpdateChatName"/>
      </el-container>
    </el-container>
  </template>

<style src="@/views/chat.css" >

</style>