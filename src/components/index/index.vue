<script lang="ts" setup>
import {ref} from 'vue'
import Aside from '../Aside.vue'
import Main from '../Main.vue'
let title = ref('首页111')
</script>

<template>
    <el-container class="background">
      <el-header class="el-header" >
            <img class='logoimg' src="@/assets/chat_pictures/logo.png"/>
        <div class="search">
          <el-dropdown>
            <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" class='avator' />
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>个人中心</el-dropdown-item>
                <el-dropdown-item>设置</el-dropdown-item>
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
        <Aside />
        <Main />
      </el-container>
    </el-container>
  </template>

<style src="@/assets/index.css" >

</style>