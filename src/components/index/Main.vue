<template>
    <el-main class="main">
     <div class="scroll" style="height: 420px; overflow: hidden; overflow-y: scroll;">
        <div v-if="!showChatBox">
        <el-row class="main">
            <el-row class="main-header1" id="main-header1">
                <h1 >经方智谷</h1>
                <h4 >—您的私人AI中医诊疗助手—</h4>
            </el-row>

            <!-- 中间部分内容 -->
            <el-row class="content" id="content">
                <el-row :gutter="40" class="custom-row">
                    <el-col :xs="6" :sm="8" :md="10" :lg="12" :xl="14" >
                        <div class="rectangle">
                            <h4>【我想知道】</h4>
                            <p>药物属性是热是凉?这个生病能不能吃?</p>
                            <p>更多您想知道的，我们知无不言。</p>
                        </div>
                    </el-col>
                    <el-col :xs="6" :sm="8" :md="10" :lg="12" :xl="14">
                        <div class="rectangle">
                            <h4>【我要治病】</h4>
                            <p>我发现今天头有点晕，我生了什么病吗?</p>
                            <p>我突然开始咳嗽打喷嚏，我要吃什么药治疗?</p>
                        </div>
                    </el-col>
                </el-row>
                <el-row :gutter="40" class="custom-row">
                    <el-col :xs="6" :sm="8" :md="10" :lg="12" :xl="14">
                        <div class="rectangle">
                            <h4>【拍照诊疗】</h4>
                            <p>我不会描述病情，我想上传舌苔照片来分析诊治。</p>
                            <p></p>
                        </div>
                    </el-col>
                    <el-col :xs="6" :sm="8" :md="10" :lg="12" :xl="14">
                        <div class="rectangle">
                            <h4>【其他设备】</h4>
                            <p>我有智能手表可以提供身体健康数据。</p>
                            <p>我想绑定其他可穿戴设备来监测健康情况。</p>
                        </div>
                    </el-col>
                </el-row>
            </el-row>
            <el-row class="content2">
                <p style="margin:0 20px;font-size: 14px;">你可以问我：</p>
                <div class="content22" style="text-align: left;">
                    <el-button
                    v-for="button in buttons" :key="button.text" type="" text bg style="text-align: left;">{{ button.text }}
                    </el-button>
                </div>
            </el-row>
        </el-row>
       </div>
    
      <!-- 聊天框 -->
      <div v-if="showChatBox" v-for="(msg, index) in messages" :key="index"  class="chat-container" ref="chatContainer" style=" padding: 10px; display: flex; flex-direction: column; align-items: center; max-height: 66%;">
          <!-- 对话框 -->
          <div  v-if="msg.roleId === '1' || msg.roleId === 1" style="display: flex; justify-content: flex-end; margin-bottom: 10px; margin-left: auto;">
              <!-- 用户消息 -->
              <div class="chat-box" style="display: flex; justify-content: flex-end; align-items: center;" >
                  <div class="bubble user-bubble last-message" style="background-color: #DCF8C6; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); padding: 10px;">
                      {{ msg.content }}
                  </div>
                  <div class="avatar">
                      <img :src="imageUrl" alt="User Avatar" style="width: 40px; height: 40px; border-radius: 50%;">
                  </div>
              </div>
          </div>
          <div v-else-if="msg.roleId === '2' || msg.roleId === 2" style="display: flex; justify-content: flex-end; margin-bottom: 10px; margin-right: auto;">
              <!-- 助手消息 -->
              <div  class="chat-box" style="display: flex; justify-content: flex-start; margin-bottom: 10px; align-items: center;">
                  <div class="avatar">
                      <img src="@/assets/chat_pictures/icon.png" style="width: 40px; height: 40px; border-radius: 50%;">
                  </div>
                  <div class="bubble assistant-bubble last-message" style="background-color: #F2F2F2; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); padding: 10px;">
                      {{ msg.content }}
                  </div>
              </div>
          </div>
      </div>
    </div>
  
        <!-- 底部输入框 -->
        <el-row class="foot">
            <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick" :default-active="0">
                <el-tab-pane name="first">
                    <template #label>
                        <span class="custom-tabs-label">
                        <el-icon><Monitor/></el-icon>
                        <span>健康知识问答</span>
                        </span>
                    </template>
                    <template class="bottom">
                        <el-input
                            v-model="inputMessage"
                            :rows="4"
                            :resize="'none'"
                            type="textarea"
                            :autosize="false"
                            placeholder="输入任何您想咨询的健康问题，我们即刻为您解答"
                        />
                        <div class="button2">
                            <el-button type="primary" :icon="Microphone" round @click="startRecording" />
                            <el-button type="primary" :icon="Position" @click="sendMessage" round />
                        </div>

                    </template>
                </el-tab-pane>
                <el-tab-pane name="second">
                    <template #label>
                        <span class="custom-tabs-label">
                        <el-icon><ChatLineSquare/></el-icon>
                        <span>查看问答</span>
                        </span>
                    </template>
                    <template class="bottom">
                        <el-input
                            v-model="inputMessage"
                            :rows="4"
                            :resize="'none'"
                            :autosize="false"
                            type="textarea"
                            placeholder="输入任何您想咨询的健康问题，我们即刻为您解答"
                        />
                        <div class="button2">
                            <el-button type="primary" :icon="Microphone" round />
                            <el-button type="primary" :icon="Position" @click="sendMessage" round />
                        </div>
                    </template>
                </el-tab-pane>
                <el-tab-pane name="third">
                    <template #label>
                        <span class="custom-tabs-label">
                        <el-icon><Camera/></el-icon>
                        <span>舌苔问诊</span>
                        </span>
                    </template>
                    <template class="bottom">
                        <el-input
                            v-model="inputMessage"
                            :rows="4"
                            type="textarea"
                            :resize="'none'"
                            :autosize="false"
                            placeholder="输入任何您想咨询的健康问题，我们即刻为您解答"
                        />
                        <div class="button2">
                        <el-upload
                            class="upload-demo"
                            :before-upload="handleUpload"
                            :action="'http://59.110.149.33:8001/file/tongueImg'"
                            :on-success="handleSuccess"
                            :on-error="handleError"
                            :limit="1"
                            :accept="'image/*'"
                            :show-file-list="false"
                            :http-request="uploadImage">
                            <el-button type="primary" :icon="Camera" round />
                            </el-upload>                   
                            <el-button type="primary" :icon="Position" @click="sendMessage" round />
                        </div>
                        
                    </template>
                </el-tab-pane>
                <el-tab-pane name="forth">
                    <template #label>
                        <span class="custom-tabs-label">
                        <el-icon><DataAnalysis/></el-icon>
                        <span>数据侦察</span>
                        </span>
                    </template>
                    <template class="bottom">
                        <el-input
                            v-model="inputMessage"
                            :rows="4"
                            type="textarea"
                            :resize="'none'"
                            :autosize="false"
                            placeholder="输入任何您想咨询的健康问题，我们即刻为您解答"
                        />
                        <div class="button2">
                            <el-button type="primary" :icon="Microphone" round />
                            <el-button type="primary" :icon="Position" @click="sendMessage" round />
                        </div>
                    </template>
                </el-tab-pane>
            </el-tabs>
        </el-row>
    </el-main>
</template>

<style src="@/assets/main.css" >

</style>

<script setup lang="ts">
import { Position,Microphone,DataAnalysis,ChatLineSquare} from '@element-plus/icons-vue'
import { Monitor,Camera } from '@element-plus/icons-vue'
import type { TabsPaneContext } from 'element-plus'
import { ref, onMounted, watch, onUnmounted, reactive, nextTick, PropType } from 'vue';
import axios from 'axios';
import { token }from '@/config/requestConfig.js'
declare var webkitSpeechRecognition: any;
const imageUrl = ref('https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png')
const buttons = [
  { text: '我最近头痛伴着流鼻涕,该吃什么药?' },
  { text: '最近中医馆配的酸梅汤很火，请问可以当饮料喝吗？' },
  { text: '胃肠炎可以吃柚子吗？' },
] as const

const textarea = ref('')
const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
const inputMessage = ref('')

const showChatBox = ref(false) // 控制是否展示对话框部分的状态
const messages = ref([
      { roleId: "1", content: "历史对话1" },
      { roleId: "2", content: "历史对话2历史对话2历史对话2" }
    ]);
// 语音转文字功能
const recognition = new webkitSpeechRecognition();
recognition.lang = "zh-CN";
const recognitionActive = ref(false);

function startRecording() {
  if (!recognitionActive.value) {
    recognition.start();
    recognitionActive.value = true;
  } else {
    recognition.stop();
    recognitionActive.value = false;
  }
}

// 订阅请求
let messageContent = ''
const subscribeToChat = () => {
  const eventSource = new EventSource(`http://59.110.149.33:8001/sse/${chatId}`);
  eventSource.onmessage = (event) => {
  let data = JSON.parse(event.data);
  if (data["data"] && data["data"]["delta"]) {
      messageContent += data["data"]["delta"];
    }
  if (data["event"] === "end") {
      console.log(111111);
      const newMessage = {
        roleId: "2",
        content: messageContent
      };
      messages.value = [...messages.value,...newMessage];    
      messageContent = '';
      scrollToBottom();
    }
};
  eventSource.onerror = (error) => {
    console.error('订阅错误', error);
};
  // 在组件销毁或页面离开时关闭连接
  onUnmounted(() => {
    eventSource.close();
  });
};

onMounted(() => {
  
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.onresult = (event: any) => {
    const transcript = Array.from(event.results)
      .map(result => result[0].transcript)
      .join('');
    inputMessage.value = transcript; // 将语音识别结果赋值给输入框文本
  };
  let headUrl = localStorage.getItem('headimg')
  if(headUrl){
      imageUrl.value = headUrl
  }
});
const chatId = generateUUID()
// 发送问题获取响应
const fetchResponse = async (requestData) => {
  try {
    const response = await axios.post(
      `http://59.110.149.33:8001/sse/chat/${chatId}`,
      requestData,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token
        }
      }
    );
  } catch (error) {
    console.error(error);
  }
};

const sendMessage = () => {
  if (inputMessage.value.trim() !== '') {
    const requestDataToSend = {
      messageId: generateUUID(),
      text: inputMessage.value, // 发送用户输入的文本
      messages: [ { roleId: "1", content: inputMessage.value },
      { roleId: "2", content: '1' }],
      historyCounter: 2,
    };
    subscribeToChat();
    fetchResponse(requestDataToSend); // 发送动态创建的请求数据
    messages.value.push({
      roleId: '1',
      content: inputMessage.value
    }); // 将用户输入的消息添加到本地消息数组
    inputMessage.value = ''; // 清空输入框
    showChatBox.value = true; // 显示聊天框
  }
}
function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
// 滚动到底部的方法
const scrollToBottom = () => {
  const chatContainer = document.querySelector('.scroll')
  if (chatContainer) {
    chatContainer.scrollTop = chatContainer.scrollHeight
  }
}
// 监听消息数组的变化，自动滚动到底部
onMounted(() => {
  scrollToBottom();
})

watch(messages, async () => {
  console.log('messagesmessagesmessagesmessages变化了')
  await nextTick(); // 等待DOM更新
  scrollToBottom(); // 现在滚动到底部
},{
    immediate:true,deep:true
});

const handleUpload = (file: any) => {
  return true;
}

// TODO:处理上传成功有问题
const handleSuccess = (response: any, file: any) => {
  console.log('处理上传成功:', response, file);
  // 将图片路径或数据放入 textarea 中
  textarea.value = response.url;
}

const handleError = (error: any, file: any) => {
  console.error('处理上传失败:', error, file); 
}
const  uploadImage = (request) => {
    const formData = new FormData();
    formData.append('img', request.file);
    axios.post(request.action, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })
}

const updateMessage = (data)=>{
  if(!showChatBox.value){
    subscribeToChat();
    showChatBox.value = true; // 显示聊天框
  }
  let arr = data.data.chat.message
  messages.value = [...[
      { roleId: "1", content: "历史对话1" },
      { roleId: "2", content: "历史对话2历史对话2历史对话2" }
    ],...arr]
}

defineExpose({
  updateMessage
})

</script>
