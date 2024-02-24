<template>  
  <el-aside class="aside">
    <el-row class="newchat">
      <el-button class="newchat" type="primary" plain @click="createNewChat">新建对话</el-button>
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
      <!-- <el-sub-menu index="1" popper-class="custom-sub-menu">
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

      </el-sub-menu> -->
      <el-sub-menu index="1" popper-class="custom-sub-menu">
          <template #title >
            <span>网页历史对话</span>
          </template>
          <el-scrollbar max-height="60vh" >
            <!-- 渲染对话列表 -->
            <el-menu-item v-for="(dialogue, index) in dialogues" :key="index">
              <div class="menu-item-text">{{ dialogue }}</div>
              <!-- 这里要修改 -->
              <el-button type="danger" size="mini" @click="deleteChat(dialogue)">删除</el-button>
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
  import axios from 'axios';
  const input2 = ref('')
  const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

  const dialogues = ref([])

  // 获取所有对话
  const getAllDialogues = async () => {
    try {
      const response = await axios.get('http://59.110.149.33:8001/chat/', {
        withCredentials: true,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Cookie': 'JSESSIONID=9FEB5FF39E86FAD6227D6BE241EEE7C1'
        }
      });
      dialogues.value = response.data.data;
    } catch (error) {
      console.error('获取所有对话失败:', error);
    }
  };

  // 获取某一个 chatId 的所有消息
  const getMessagesByChatId = async (chatId) => {
    try {
      const response = await axios.get(`http://59.110.149.33:8001/chat/${chatId}`, {
        withCredentials: true,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Cookie': 'JSESSIONID=9FEB5FF39E86FAD6227D6BE241EEE7C1'
        }
      });
      return response.data; // 返回获取到的消息数据
    } catch (error) {
      console.error('Error fetching messages:', error);
      throw error; // 抛出错误以便调用方处理
    }
  };

  //调用所有对话的函数
  getAllDialogues();

  const chatId = '1aef6451-2f0e-48cf-b267-b3a31b828839';

// 获取当前id的所有消息
  getMessagesByChatId(chatId)
    .then(messages => {
      // 将获取到的消息更新到 dialogues 中
      dialogues.value = messages;
    })
    .catch(error => {
      console.error('获取消息失败:', error);
    });

 // 新建一个对话
 const createNewChat = async () => {
    try {
      const response = await axios.post('http://59.110.149.33:8001/chat/', {}, {
        withCredentials: true,
      });
      // 新建对话成功后刷新对话列表
      getAllDialogues();
      console.log('新建对话成功:', response.data);
    } catch (error) {
      console.error('新建对话失败:', error);
    }
  };
  // 删除某一个对话
  const deleteChat = async (chatId) => {
    try {
      const response = await axios.delete(`http://59.110.149.33:8001/chat/${chatId}`, {
        withCredentials: true,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Cookie': 'JSESSIONID=9FEB5FF39E86FAD6227D6BE241EEE7C1'
        }
      });
       // 删除对话成功后刷新对话列表
       getAllDialogues();
      console.log('删除对话成功:', response.data);
    } catch (error) {
      console.error('删除对话失败:', error);
    }
  };

</script> 

<style src="@/assets/aside.css" >
</style>