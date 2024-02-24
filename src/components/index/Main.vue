<template>
    <el-main class="main">
     <div style="height: 420px;">
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
       <div v-if="showChatBox" class="chat-container" ref="chatContainer" style="position: fixed; top: 80px; right: 0; padding: 10px; display: flex; flex-direction: column; align-items: flex-end; max-height: 56%; overflow-y: scroll;">
            <!-- 对话框 -->
            <div class="chat-box" v-for="(msg, index) in messages" :key="index" style="display: flex; align-items: center; margin-bottom: 10px;">
            <div class="bubble" :class="{ 'last-message': index === messages.length - 1 }" style="background-color: #fff; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); padding: 10px;">
                {{ msg }}
            </div>
            <!-- 头像 -->
            <div class="avatar">
                <img src="@/assets/chat_pictures/icon.png" alt="Avatar" style="width: 40px; height: 40px; border-radius: 30%;">
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
                            :action="'http://127.0.0.1:8001/sse/tongue/01886235-1249-446b-8df2-b0a9f2d2c326'"
                            :on-success="handleSuccess"
                            :on-error="handleError"
                            :limit="1"
                            :accept="'image/*'"
                            :show-file-list="false">
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
import { ref, onMounted, watch } from 'vue';
import axios from 'axios';
declare var webkitSpeechRecognition: any;

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
const messages = ref<string[]>([]) // 消息数组的类型为字符串数组
const showChatBox = ref(false) // 控制是否展示对话框部分的状态


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
const subscribeToChat = () => {
  const eventSource = new EventSource(`http://59.110.149.33:8001/sse/?JSESSIONID=9FEB5FF39E86FAD6227D6BE241EEE7C1`);
  eventSource.onmessage = (event) => {
    const data = JSON.parse(event.data);
    if (data.message) {
      messages.value.push(data.message);
      scrollToBottom();
      console.log('后端数据已经返回');
    }
  };
  eventSource.onerror = (error) => {
    console.error('订阅错误', error);
  };
};
onMounted(() => {
  subscribeToChat();
  recognition.continuous = true;
  recognition.interimResults = true;
  
  recognition.onresult = (event: any) => {
    const transcript = Array.from(event.results)
      .map(result => result[0].transcript)
      .join('');
    inputMessage.value = transcript; // 将语音识别结果赋值给输入框文本
  };
});

// document.cookie = `JSESSIONID=9FEB5FF39E86FAD6227D6BE241EEE7C1;`
// 向后端发送消息并获取回复
const fetchResponse = async (message: string) => {
  try {
    const response = await axios.post(
      'http://59.110.149.33:8001/sse/chat/{1aef6451-2f0e-48cf-b267-b3a31b828839}',
      { message },
      {
        headers: {
          'Content-Type': 'application/json',
          'Cookie': 'JSESSIONID=9FEB5FF39E86FAD6227D6BE241EEE7C1'
        }
      }
    );

    const data = response.data;
    if (data.message) {
      messages.value.push(data.message);
      scrollToBottom();
      console.log('后端数据已经返回');
    }
  } catch (error) {
    console.error(error);
  }
};
// 点击发送功能
const sendMessage = () => {
  if (inputMessage.value.trim() !== '') {
    messages.value.push(inputMessage.value)
    inputMessage.value = ''
    showChatBox.value = true
    fetchResponse(inputMessage.value)
    scrollToBottom();
  }
}
// 滚动到底部的方法
const scrollToBottom = () => {
  const chatContainer = document.querySelector('.chat-container')
  if (chatContainer) {
    chatContainer.scrollTop = chatContainer.scrollHeight
  }
}

// 监听消息数组的变化，自动滚动到底部
onMounted(() => {
  scrollToBottom();
  watch(messages, () => {
    scrollToBottom() // 每次更新消息都滚动到底部
  })
})

const handleUpload = (file: any) => {
  console.log('111', file);
  return true; // 返回 true 表示允许上传
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


</script>
