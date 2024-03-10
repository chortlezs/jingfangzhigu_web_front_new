<template>
  <el-main class="main">
    <div
        class="scroll"
        style="height: 420px; overflow: hidden; overflow-y: scroll"
    >
      <div v-if="!showChatBox">
        <el-row class="main">
          <el-row class="main-header1" id="main-header1">
            <h1>经方智谷</h1>
            <h4>—您的私人AI中医诊疗助手—</h4>
          </el-row>

          <!-- 中间部分内容 -->
          <el-row class="content" id="content">
            <el-row :gutter="40" class="custom-row">
              <el-col :xs="6" :sm="8" :md="10" :lg="12" :xl="14">
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
            <p style="margin: 0 20px; font-size: 14px">你可以问我：</p>
            <div class="content22" style="text-align: left">
              <el-button
                  v-for="button in buttons"
                  :key="button.text"
                  type=""
                  text
                  bg
                  style="text-align: left"
              >{{ button.text }}
              </el-button>
            </div>
          </el-row>
        </el-row>
      </div>

      <!-- 聊天框 -->
      <div
          v-if="showChatBox"
          v-for="(msg, index) in messages"
          :key="index"
          class="chat-container"
          ref="chatContainer"
          style="
          padding: 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          max-height: 66%;
        "
      >
        <!-- 对话框 -->
        <div
            v-if="msg.roleId === 1"
            style="
            display: flex;
            justify-content: flex-end;
            margin-bottom: 10px;
            margin-left: auto;
          "
        >
          <!-- 用户消息 -->
          <div
              class="chat-box"
              style="
              display: flex;
              justify-content: flex-end;
              align-items: center;
            "
          >
            <div
                class="bubble user-bubble last-message"
                style="
                background-color: #5b93ff;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                padding: 10px;
              "
            >
              {{ msg.content }}
            </div>
            <div class="avatar">
              <img
                  src="@/assets/chat_pictures/icon.png"
                  alt="User Avatar"
                  style="width: 40px; height: 40px; border-radius: 50%"
              />
            </div>
          </div>
        </div>
        <div
            v-if="msg.roleId === 2"
            style="
            display: flex;
            justify-content: flex-end;
            margin-bottom: 10px;
            margin-right: auto;
          "
        >
          <!-- 助手消息 -->
          <div
              class="chat-box"
              style="
              display: flex;
              justify-content: flex-start;
              margin-bottom: 10px;
              align-items: center;
            "
          >
            <div class="avatar">
              <img
                  src="@/assets/chat_pictures/icon.png"
                  style="width: 40px; height: 40px; border-radius: 50%"
              />
            </div>
            <div
                class="bubble assistant-bubble last-message"
                style="
                background-color: #ffffff;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                padding: 10px;
              "
            >
              {{ msg.content ? msg.content : messageContent }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部输入框 -->
    <el-row class="foot">
      <el-tabs
          v-model="activeName"
          class="demo-tabs"
          @tab-click="handleClick"
          :default-active="0"
      >
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
              <el-button
                  type="primary"
                  :icon="Microphone"
                  round
                  @click="startRecording"
              />
              <el-button
                  type="primary"
                  :icon="Position"
                  @click="sendMessage"
                  round
              />
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
              <el-button type="primary" :icon="Microphone" round/>
              <el-button
                  type="primary"
                  :icon="Position"
                  @click="sendMessage"
                  round
              />
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
                  :action="' /file/tongueImg'"
                  :limit="1"
                  :accept="'image/*'"
                  :show-file-list="false"
                  :http-request="uploadImage"
              >
                <el-button type="primary" :icon="Camera" round/>
              </el-upload>
              <el-button
                  type="primary"
                  :icon="Position"
                  @click="sendMessage"
                  round
              />
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
              <el-button type="primary" :icon="Microphone" round/>
              <el-button
                  type="primary"
                  :icon="Position"
                  @click="sendMessage"
                  round
              />
            </div>
          </template>
        </el-tab-pane>
      </el-tabs>
    </el-row>
  </el-main>
</template>

<style src="@/assets/main.css"></style>

<script setup lang="ts">
import {
  Position,
  Microphone,
  DataAnalysis,
  ChatLineSquare,
} from "@element-plus/icons-vue";
import {Monitor, Camera} from "@element-plus/icons-vue";
import type {TabsPaneContext} from "element-plus";
import {
  ref,
  onMounted,
  watch,
  onUnmounted,
  reactive,
  nextTick,
  defineProps,
  watchEffect,
  toRefs,
  toRaw,
  PropType,
} from "vue";
import axios from "axios";
// import { token }from '@/config/requestConfig.js'
declare var webkitSpeechRecognition: any;
const imageUrl = ref(
    "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
);

const buttons = [
  {text: "我最近头痛伴着流鼻涕,该吃什么药?"},
  {text: "最近中医馆配的酸梅汤很火，请问可以当饮料喝吗？"},
  {text: "胃肠炎可以吃柚子吗？"},
] as const;

const activeName = ref("first");
let isNewChat = ref(false);

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event);
};

interface Message {
  messageId: string;
  chatId: string;
  roleId: number;
  createTime: string;
  content: string;
}

const chatId = ref("");
let isFirstMessageInChat = ref(true); //跟踪是否是当前chatId下的第一次发送消息
let messages = reactive<Message[]>([]);
const props = defineProps({
  messageArray: Array as PropType<Message[]>,
  selectedChatId: String,
});

watch(
    () => props.messageArray,
    (newVal, oldVal) => {
      if (newVal && newVal.length > 0) {
        filterMessages();
        chatId.value = props.selectedChatId as string;
        showChatBox.value = true;
      } else {
        showChatBox.value = false;
      }
    }
);

watch(
    () => props.selectedChatId,
    (newVal, oldVal) => {
      if (newVal !== oldVal && newVal) {
        chatId.value = newVal; // 更新当前chatId
        subscribeToChat(); // 重新订阅新的chatId
        isFirstMessageInChat.value = true;
      }
    }
);

function filterMessages() {
  messages.splice(0, messages.length);
  let rawMessageArray: any = toRaw(props.messageArray);
  if (Array.isArray(rawMessageArray)) {
    rawMessageArray.forEach((item) => {
      // 确保item的属性
      if (item) {
        messages.push({
          messageId: item.messageId,
          chatId: item.chatId,
          roleId: item.roleId,
          createTime: item.createTime,
          content: item.content,
        });
      }
    });
  }
}

const inputMessage = ref("");

const showChatBox = ref(false); // 控制是否展示对话框部分的状态
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
let messageContent = ref("");
let currentEventSource: EventSource | null = null;
const subscribeToChat = () => {
  // 如果已经有一个订阅，先关闭它
  if (currentEventSource) {
    currentEventSource.close();
    currentEventSource = null;
  }
  // 创建新的EventSource订阅
  const eventSource = new EventSource(`http://59.110.149.33:8080/api/sse/${chatId.value}`);
  currentEventSource = eventSource; // 更新当前订阅

  eventSource.addEventListener("message", function (event) {
    let data = JSON.parse(event.data);
    if (data["data"] && data["data"]["delta"]) {
      messageContent.value += data["data"]["delta"];
    }
    // let historyCounter = data["data"]["historyCounter"];
    // localStorage.setItem("historyCounter", historyCounter.toString());
    if (data["data"]["flag"]) {
      let flag = data["data"]["flag"];
      if (flag) {
        // 处理flag逻辑（如果有）
      }
    }
  });

  // TODO: 把错误文字显示到界面上
  eventSource.addEventListener("error", function (event) {
    if (event.data) {
      let data = JSON.parse(event.data);
      if (data.data) {
        messageContent.value += data.data;
      }
    }
  });

  eventSource.addEventListener("end", function (event) {
    let endData = JSON.parse(event.data);
    if (messageContent.value) {
      let length = messages.length - 1;
      messages[length].content = endData["data"]["totalMessage"];
      messageContent.value = ""; // 重置累积的消息内容
      scrollToBottom();
    }
    currentEventSource.close();
  });
  // 在组件销毁或页面离开时关闭连接
  onUnmounted(() => {
    if (currentEventSource) {
      currentEventSource.close();
    }
  });
};

const emit = defineEmits(["update-chat-name"]);
const sendMessage = () => {
  if (inputMessage.value.trim() !== "" && props.messageArray) {
    if (
        props.selectedChatId !== undefined &&
        chatId.value === props.selectedChatId
    ) {
      if (
          isFirstMessageInChat.value &&
          (!props.messageArray || props.messageArray.length === 0)
      ) {
        messages.splice(0, messages.length); // 清空当前消息数组
        isFirstMessageInChat.value = false;
        emit("update-chat-name", inputMessage.value, chatId.value);
        updateChatName(chatId.value, inputMessage.value);
      }
      const currentChatId = props.selectedChatId;
      chatId.value = currentChatId;
      const requestDataToSend = {
        messageId: generateUUID(),
        text: inputMessage.value,
        messages: toRaw([...messages]),
      };
      subscribeToChat();
      setTimeout(() => {
        fetchResponse(requestDataToSend);
        // 发送消息后触发事件，将第一条消息内容作为参数传递
        messages.push(
            {
              chatId: currentChatId,
              content: inputMessage.value,
              createTime: "",
              messageId: generateUUID(),
              roleId: 1,
            },
            {
              chatId: currentChatId,
              content: "",
              createTime: "",
              messageId: generateUUID(),
              roleId: 2,
            }
        ); // 将用户输入的消息添加到本地消息数组
        inputMessage.value = ""; // 清空输入框
        showChatBox.value = true; // 显示聊天框
      }, 500)
    }
  }
};
const updateChatName = async (chatId, newChatName) => {
  try {
    const response = await axios.post(
        `/chat/name`,
        {
          chatId: chatId,
          chatName: newChatName,
        },
        {
          withCredentials: true,
          headers: {
            'Access-Control-Allow-Origin': '*',
            "Authorization": token
          }
        }
    );
    console.log('Chat name updated successfully:', response);
    // 可以在这里调用获取所有对话的函数，以更新UI
    getAllDialogues();
  } catch (error) {
    console.error('Failed to update chat name:', error);
  }
};
const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiZXhwIjoxNzEwMDYwOTE2fQ.Vw_EdKzprG3PCNKtGfU19XwvCyyY0WihSaf7NRuuYJc";
// 发送问题获取响应
const fetchResponse = async (requestData) => {
  try {
    const response = await axios.post(
        `/sse/chat/${chatId.value}`,
        requestData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
    );
  } catch (error) {
    console.error(error);
  }
};

function generateUUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
        v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

// 滚动到底部的方法
const scrollToBottom = () => {
  const chatContainer = document.querySelector(".scroll");
  if (chatContainer) {
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }
};
// 监听消息数组的变化，自动滚动到底部
onMounted(() => {
  scrollToBottom();
});

watch(
    messages,
    async () => {
      console.log("messagesmessagesmessagesmessages变化了");
      await nextTick(); // 等待DOM更新
      scrollToBottom(); // 现在滚动到底部
    },
    {
      immediate: true,
      deep: true,
    }
);

const uploadImage = (request) => {
  const formData = new FormData();
  formData.append("img", request.file);
  axios
      .post(request.action, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("接口返回的数据:", response.data.data["url"]);
        let imgUrl = response.data.data["url"];
        inputMessage.value = imgUrl;
      });
};
</script>
