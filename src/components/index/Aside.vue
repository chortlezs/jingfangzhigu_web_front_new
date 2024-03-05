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
              <div class="menu-item-text" @click="selectChat(dialogue.chatId)">{{ dialogue.chatName }}</div>
              <img src="@/assets/chat_pictures/delete.png" 
                    style="display: inline-block; height: 18px; width: 18px;"
                    @click.stop="deleteChat(dialogue.chatId)">
            </el-menu-item>
          </el-scrollbar>
      </el-sub-menu>
    </el-menu>
    </el-row>
  </el-aside>

</template>

<script lang="ts"  setup>
  import { ref, getCurrentInstance, reactive,defineProps, defineEmits } from 'vue'
  import { Search } from '@element-plus/icons-vue'
  import axios from 'axios';
  const input2 = ref('')
  const instance = getCurrentInstance();
  const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

  let dialogues = reactive([
  {
        chatId: "1",
        userId: "1",
        chatName: "测试对话",
        createTime: "2023-11-17T11:58:58.000+00:00",
        updateTime: "2023-11-17T11:59:02.000+00:00",
        is_delete: 0,
        message: null
  }
])
const props = defineProps({
  dialogues: Array
});

  const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiZXhwIjoxNzEwMDYwOTE2fQ.Vw_EdKzprG3PCNKtGfU19XwvCyyY0WihSaf7NRuuYJc";
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
      console.log(dialogues,'dialogues');
      
    } catch (error) {
      console.error('获取所有对话失败:', error);
    }
  };
  const emits = defineEmits(['select-chat','message-updated']);
  const selectChat = (chatId) => {
    // 这里可以调用获取对应聊天信息的方法
    getMessagesByChatId(chatId);
    // 向父组件发出事件
    emits('select-chat', chatId);
  };
 
  // 获取某一个 chatId 的所有消息
  const getMessagesByChatId = async (chatId) => {
    try {
      const response = await axios.get(`http://59.110.149.33:8001/chat/${chatId}`, {
        withCredentials: true,
        headers: {
          'Access-Control-Allow-Origin': '*',
          "Authorization": token
        }
      });
      let messageArry = response.data.data.chat.message;
      if (instance) {
      instance.emit('messages-updated', messageArry);
      }
    } catch (error) {
      console.error('', error);
      throw error; // 抛出错误以便调用方处理
    }
  };
  //调用所有对话的函数
  getAllDialogues();

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
    // 创建对话成功后再更新对话列表
    await getAllDialogues();
    // 添加新对话到对话列表
    const newChat = {
      chatId: newChatId,
      userId: '',
      chatName: '新建对话',
      createTime: '',
      updateTime: '', 
      is_delete: 0,
       message: null, 
      // 其他属性根据实际情况添加
    };
    dialogues.push(newChat);
    console.log(newChatId, 'newChatId');
  } catch (error) {
    console.error('创建对话失败:', error);
  }
};

  // 删除某一个对话
const deleteChat = async (chatId) => {
  try {
    const currentIndex = dialogues.findIndex(dialogue => dialogue.chatId === chatId);
    const response = await axios.delete(`http://59.110.149.33:8001/chat/${chatId}`, {
      withCredentials: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
        "Authorization": token
      }
    });
    // 删除对话成功后直接更新对话列表
    dialogues.splice(currentIndex, 1);

    if (dialogues.length > 0) {
      // 获取下一个对话的 chatId
      const nextChatId = dialogues[0].chatId;
      // 调用 selectChat 函数加载下一个对话信息
      selectChat(nextChatId);
    } else {
      // 若没有下一个对话，则清空信息（可根据需求处理）
    }
  } catch (error) {
    console.error('删除对话失败:', error);
  }
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
