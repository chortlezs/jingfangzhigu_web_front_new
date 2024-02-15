<template>  
  <el-aside class="aside">
    <el-row class="newchat">
      <el-button class="newchat" type="primary" plain>新建对话</el-button>
    </el-row>
    <el-row class="search-history">
      <el-input
        v-model="input2"
        class="search-history"
        placeholder="搜索历史记录"
        :prefix-icon="Search"
        style="color: white;"
      />
    </el-row>
    <el-row class="history">
      <el-menu
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          :default-openeds="['1']" 
      >
      <el-sub-menu index="1" popper-class="custom-sub-menu">
          <template #title >
            <span>网页历史对话</span>
          </template>
          <el-scrollbar max-height="60vh" >
           <el-menu-item>
            <div class="menu-item-text">你好</div>
          </el-menu-item>
          <el-menu-item>
            <div class="menu-item-text">我最近头疼伴着流鼻涕，该怎么办呢？</div>
          </el-menu-item>
          <el-menu-item>
            <div class="menu-item-text">我最近头疼伴着流鼻涕，该怎么办呢？</div>
          </el-menu-item>
          <el-menu-item>
            <div class="menu-item-text">我最近头疼伴着流鼻涕，该怎么办呢？</div>
          </el-menu-item><el-menu-item>
            <div class="menu-item-text">我最近头疼伴着流鼻涕，该怎么办呢？</div>
          </el-menu-item>
          <el-menu-item>
            <div class="menu-item-text">我最近头疼伴着流鼻涕，该怎么办呢？</div>
          </el-menu-item><el-menu-item>
            <div class="menu-item-text">我最近头疼伴着流鼻涕，该怎么办呢？</div>
          </el-menu-item>
          <el-menu-item>
            <div class="menu-item-text">我最近头疼伴着流鼻涕，该怎么办呢？</div>
          </el-menu-item><el-menu-item>
            <div class="menu-item-text">我最近头疼伴着流鼻涕，该怎么办呢？</div>
          </el-menu-item>
          <el-menu-item>
            <div class="menu-item-text">我最近头疼伴着流鼻涕，该怎么办呢？</div>
          </el-menu-item><el-menu-item>
            <div class="menu-item-text">我最近头疼伴着流鼻涕，该怎么办呢？</div>
          </el-menu-item>
          
          </el-scrollbar>

      </el-sub-menu>
      </el-menu>
    </el-row>
  </el-aside>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import { Search } from '@element-plus/icons-vue'
  const input2 = ref('')
  const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script> 

<style src="@/assets/aside.css" >
</style>