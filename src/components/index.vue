<script lang="ts" setup>
import {ref,onMounted} from 'vue'
import Aside from './index/Aside.vue'
import Main from './index/Main.vue'
import { useRouter } from 'vue-router';

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
    if(headUrl){
        imageUrl.value = headUrl
    }
})


// 处理子组件发出的自定义事件
const handleMessagesUpdated = (data) => {
  console.log('收到历史记录',data);
  mainRef.value.updateMessage(data)
  console.log(data);
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
        <Aside @messages-updated="handleMessagesUpdated"/>
        <Main :headUrl="headUrl" ref="mainRef"/>
      </el-container>
    </el-container>
  </template>

<style src="@/assets/index.css" >

</style>