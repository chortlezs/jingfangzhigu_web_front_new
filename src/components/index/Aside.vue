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
          :default-opened="true"
      >
      <el-sub-menu index="1" popper-class="custom-sub-menu" >
          <template #title >
            <span>网页历史对话</span>
          </template>
          <el-scrollbar max-height="60vh" >
            <!-- 渲染对话列表 -->
            <el-menu-item v-for="(dialogue, index) in dialogues" :key="index">
              <div class="menu-item-text" @click="getMessagesByChatId(dialogue)">{{ dialogue.chatName }}</div>
              <!-- 这里要修改 -->
              <el-button type="danger" size="mini" @click="deleteChat(dialogue.chatId)">删除</el-button>
            </el-menu-item>
          </el-scrollbar>
        </el-sub-menu>
    </el-menu>
    </el-row>
  </el-aside>
</template>

<script lang="ts"  setup>
  import { ref, getCurrentInstance } from 'vue'
  import { Search } from '@element-plus/icons-vue'
  import axios from 'axios';
  import { token }from '@/config/requestConfig.js'
  const input2 = ref('')
  const instance = getCurrentInstance();
  const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
  const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }

  let dialogues = ref([])
  // 获取所有对话
  const getAllDialogues = async () => {
    try {
      const response = await axios.get('http://59.110.149.33:8001/chat/', {
        withCredentials: true,
        headers: {
          'Access-Control-Allow-Origin': '*',
          "Authorization": token
        }
      });
      // 返回是一个数组里面多个对象
      dialogues = response.data.data.chats;
    } catch (error) {
      console.error('获取所有对话失败:', error);
    }
  };

  const chatId = 'd8660e6d-1ff7-44d4-8d86-9dc96aad956b'
 
  // 获取某一个 chatId 的所有消息
  const getMessagesByChatId = async (chatId) => {
    try {
      const response = await axios.get(`http://59.110.149.33:8001/chat/${chatId.chatId}`, {
        withCredentials: true,
        headers: {
          'Access-Control-Allow-Origin': '*',
          "Authorization": token
        }
      });
      if (instance && response.data.code == 'SUCCESS') {
        instance.emit('messages-updated', response.data);
      }
      } catch (error) {
        console.error('Error fetching messages:', error);
        throw error; // 抛出错误以便调用方处理
      }
  };
  //调用所有对话的函数
  getAllDialogues();


// 获取当前id的所有消息
  getMessagesByChatId(chatId)
    .then(data => {
      // 将获取到的消息更新到 dialogues 中
      // dialogues.value = data.message;
      console.log(dialogues);
      
    })
    .catch(error => {
      console.error('获取消息失败:', error);
    });

 // 新建一个对话
 const createNewChat = async () => {
  try {
    const newChatId = generateUUID();
    const response = await axios.post('http://59.110.149.33:8001/chat/', {
      chatId: newChatId,
    }, {
      withCredentials: true,
      headers: {
          'Access-Control-Allow-Origin': '*',
          "Authorization": token
        }
    });
    getAllDialogues();
    location.reload();
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
          "Authorization": token
        }
      });
      alert('删除成功')
       // 删除对话成功后刷新对话列表
       getAllDialogues();
       location.reload();
    } catch (error) {}
  };

  function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
</script> 

<style src="@/assets/aside.css" >
</style>
