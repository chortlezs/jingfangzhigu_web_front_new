<script lang="ts" setup>
<<<<<<< HEAD
import { ref } from 'vue';
=======
import { ref,onMounted } from 'vue';
>>>>>>> ee6af49a9eb69963e93147f32a1be7d9213b6593
import { useRouter } from 'vue-router';
import { UserOutlined } from '@ant-design/icons-vue';
import { SettingOutlined } from '@ant-design/icons-vue';
import { ElMessage } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'
import type { UploadProps } from 'element-plus'
<<<<<<< HEAD
=======
import { token }from '@/config/requestConfig.js'
import axios from 'axios'
>>>>>>> ee6af49a9eb69963e93147f32a1be7d9213b6593
const radio2 = ref('1')
const input2 = ref('')
const imageUrl = ref('')
const value = ref('')
const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]

<<<<<<< HEAD
=======
const header = ref({
  'Authorization': token
})

>>>>>>> ee6af49a9eb69963e93147f32a1be7d9213b6593
const handleAvatarSuccess: UploadProps['onSuccess'] = (
  response,
  uploadFile
) => {
  imageUrl.value = URL.createObjectURL(uploadFile.raw!)
}

const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
  if (rawFile.type !== 'image/jpeg') {
    ElMessage.error('Avatar picture must be JPG format!')
    return false
<<<<<<< HEAD
  } else if (rawFile.size / 1024 / 1024 > 2) {
=======
  } else if (rawFile.size / 1024 / 1024 > 5) {
>>>>>>> ee6af49a9eb69963e93147f32a1be7d9213b6593
    ElMessage.error('Avatar picture size can not exceed 2MB!')
    return false
  }
  return true
}
<<<<<<< HEAD
=======

const userInfo = ref({})
const userInfoBefore = ref({})

>>>>>>> ee6af49a9eb69963e93147f32a1be7d9213b6593
const menuData = [
  {
    key: 'personal',
    title: '个人信息',
    path: '/setting/personal',
  },
  {
    key: 'history',
    title: '历史记录',
    path: '/setting/history',
  },
  {
    key: 'help',
    title: 'Help&FAQ',
    path: '/setting/help',
  },
];
const openKeys = ref(['personal']); // 更新为匹配 'user' 键
const selectedKeys = ref(['personal']); // 更新为匹配 'user' 键

const router = useRouter();

const selectItem = ({ item, key }) => {
  router.push({ path: key });
};
const handleMenuClick = (key) => {
  selectedKeys.value = [key];
  selectItem({ key });
};
<<<<<<< HEAD
=======

const getUserInfo = () => {
    axios.get('http://59.110.149.33:8001/user/info', {
        headers: {
            Authorization: token
        }
    }).then(res => {
        console.log(res)
        if(res.data && res.data.code == "SUCCESS"){
            userInfo.value = {...res.data.data.userInfo}
            userInfoBefore.value =  {...res.data.data.userInfo}
        }
    })
}

onMounted(()=>{
    getUserInfo()
})

const handleUserInfoUpload = ()=>{
  let formObj = new FormData()
  formObj.append('avatar', userInfo.value.avatar)
  formObj.append('username', userInfo.value.username)
  formObj.append('address', userInfo.value.address)
  formObj.append('gender', userInfo.value.gender)
  formObj.append('role', 1)
  formObj.append('age', userInfo.value.age)
  formObj.append('height', userInfo.value.height)
  formObj.append('weight', userInfo.value.weight)
  formObj.append('anamnesis', userInfo.value.anamnesis)
  axios.post(
    `http://59.110.149.33:8001/user/info`,
    formObj,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': token
      }
    }
  ).then(res=>{
    console.log(res)
    if(res.data && res.data.code == 'SUCCESS'){
      userInfoBefore.value.avatar = userInfo.value.avatar
      localStorage.setItem('headimg',userInfo.value.avatar)
    }
  })
}

const handleFileUpload = (fileObj) => {
  let formObj = new FormData()
  formObj.append('avatar', fileObj.file)
  axios.post(
    `http://59.110.149.33:8001/file/avatar`,
    formObj,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': token
      }
    }
  ).then(res=>{
    console.log(res)
    if(res.data && res.data.code == 'SUCCESS'){
      let data = res.data.data
      userInfo.value.avatar = data.avatarUrl
      window.localStorage.setItem('headimg',data.avatarUrl)
    }
  })
}

let headUrl = localStorage.getItem('headimg')
  if(headUrl){
    userInfo.value.avatar = headUrl
  }


>>>>>>> ee6af49a9eb69963e93147f32a1be7d9213b6593
</script>

<template>
  <div class="outer-container">
    <div class="center-container">
      <!-- 左侧导航栏 -->
      <div class="sidebar">
        <div class="avatar">
          <div class="avatar-info">
            <a-avatar :size="64">
<<<<<<< HEAD
              <template #icon><UserOutlined /></template>
            </a-avatar>
            <span class="user-tag">患者用户</span>
          </div>
          <p class="username">loopy，China,19</p>
        </div>
        <div class="menu">
          <div class="menu-name">
            <setting-outlined style="color: #1890ff; font-size: 20px; margin-right: 5px;" /> 
            个人中心
          </div>
          <a-menu
            v-model:selectedKeys="selectedKeys"
            :open-keys="openKeys"
            @select="selectItem"
            mode="vertical"
            theme="#fff">
            <a-menu-item
              v-for="item in menuData"
              :key="item.key"
              :icon="item.icon"
=======
              <template #icon>
                <img v-if="userInfo.avatar" :src="userInfo.avatar" class="avatarleft" />
                <UserOutlined v-else />;
              </template>
            </a-avatar>
            <span class="user-tag">患者用户</span>
          </div>
          <p class="username">{{ userInfoBefore.username }}</p>
        </div>
        <div class="menu">
          <div class="menu-name">
            <setting-outlined style="color: #1890ff; font-size: 20px; margin-right: 5px;" />
            个人中心
          </div>
          <a-menu v-model:selectedKeys="selectedKeys" :open-keys="openKeys" @select="selectItem" mode="vertical"
            theme="#fff">
            <a-menu-item v-for="item in menuData" :key="item.key" :icon="item.icon"
>>>>>>> ee6af49a9eb69963e93147f32a1be7d9213b6593
              @click="() => handleMenuClick(item.key)">
              {{ item.title }}
            </a-menu-item>
          </a-menu>
        </div>
      </div>

      <!-- 右侧内容区域 -->
      <div class="content">
        <div class="user-settings">
          <span class="user-name">个人信息</span>
        </div>
        <div class="separator"></div>
        <div class="user-information">
          <div class="user-basic">
            <div class="list">
              <span class="sub-titie">头像</span>
<<<<<<< HEAD
              <el-upload
                class="avatar-uploader"
                action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
              >
                <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
=======
              <el-upload class="avatar-uploader" :http-request="handleFileUpload" :show-file-list="false"
                :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                <img v-if="userInfo.avatar" :src="userInfo.avatar" class="avatarright" />
                <el-icon v-else class="avatar-uploader-icon">
                  <Plus />
                </el-icon>
>>>>>>> ee6af49a9eb69963e93147f32a1be7d9213b6593
              </el-upload>
              <span class="avatar-change">点击修改</span>
            </div>
            <div class="list">
              <span class="sub-titie">用户名</span>
<<<<<<< HEAD
              <el-input v-model="input2" style="flex: 1;" placeholder="loopy" />
            </div>
            <div class="list">
              <span class="sub-titie">地点</span>
              <el-select
                v-model="value"
                class="m-2"
                placeholder="Select"
                style="flex: 1;"
              >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </div>
            <div class="list">
              <span class="sub-titie">身份</span>
              <el-select
                v-model="value"
                class="m-2"
                placeholder="Select"
                style="flex: 1;"
              >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
=======
              <el-input v-model="userInfo.username" style="flex: 1;" placeholder="用户名" />
            </div>
            <div class="list">
              <span class="sub-titie">地点</span>
              <el-input v-model="userInfo.address" style="flex: 1;" placeholder="地址" />
            </div>
            <div class="list">
              <span class="sub-titie">身份</span>
              <el-select v-model="userInfo.role" class="m-2" placeholder="Select" style="flex: 1;">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
>>>>>>> ee6af49a9eb69963e93147f32a1be7d9213b6593
              </el-select>
            </div>
          </div>
          <div class="user-body">
            <div class="list">
              <span class="sub-titie" style="margin-top: 0px;">体质档案</span>
            </div>
            <div class="list">
              <span class="sub-titie">性别</span>
<<<<<<< HEAD
                <el-radio-group v-model="radio2" class="ml-4">
                  <el-radio label="1">男</el-radio>
                  <el-radio label="2">女</el-radio>
                </el-radio-group>
            </div>
            <div class="list">
              <span class="sub-titie">年龄</span>
              <el-input v-model="input2" style="flex: 1;" placeholder="19" />
            </div>
            <div class="list">
              <span class="sub-titie">身高</span>
              <el-input v-model="input2" style="flex: 1;" placeholder="180cm" />
            </div>
            <div class="list">
              <span class="sub-titie">体重</span>
              <el-input v-model="input2" style="flex: 1;" placeholder="65kg" />
            </div>
            <div class="list">
              <span class="sub-titie">既往病史</span>
              <el-input v-model="input2" style="flex: 1;" placeholder="暂无" />
            </div>
          </div>
        </div>
        <div class="imformation-change"> 
          <el-button type="primary">更新信息</el-button>
        </div>
       
=======
              <el-radio-group v-model="userInfo.gender" class="ml-4">
                <el-radio label="male">男</el-radio>
                <el-radio label="female">女</el-radio>
              </el-radio-group>
            </div>
            <div class="list">
              <span class="sub-titie">年龄</span>
              <el-input v-model="userInfo.age" style="flex: 1;" placeholder="19" />
            </div>
            <div class="list">
              <span class="sub-titie">身高</span>
              <el-input v-model="userInfo.height" style="flex: 1;" placeholder="180cm" />
            </div>
            <div class="list">
              <span class="sub-titie">体重</span>
              <el-input v-model="userInfo.weight" style="flex: 1;" placeholder="65kg" />
            </div>
            <div class="list">
              <span class="sub-titie">既往病史</span>
              <el-input v-model="userInfo.anamnesis" style="flex: 1;" placeholder="暂无" />
            </div>
          </div>
        </div>
        <div class="imformation-change">
          <el-button @click="handleUserInfoUpload" type="primary">更新信息</el-button>
        </div>

>>>>>>> ee6af49a9eb69963e93147f32a1be7d9213b6593
      </div>

    </div>
  </div>
</template>

<style scoped>
.avatar-uploader .avatar {
  width: 80px;
  height: 80px;
  display: block;
<<<<<<< HEAD
}

</style>
<style>
=======
  
}
</style>
<style>

>>>>>>> ee6af49a9eb69963e93147f32a1be7d9213b6593
body {
  margin: 0;
  height: 100vh;
  background-image: url('/src/assets/login_pictures/chat_background.png');
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}

<<<<<<< HEAD
=======
.avatarright {
  width: 80px; /* 或者具体的像素值 */
  height: 80px; /* 确保宽度和高度相等 */
  object-fit: cover; /* 保持图片比例，超出部分裁剪 */
}
>>>>>>> ee6af49a9eb69963e93147f32a1be7d9213b6593
.center-container {
  width: 800px;
  height: 500px;
  display: flex;
<<<<<<< HEAD
  align-items: center; /* 垂直居中 */
}
.avatar {
  display: flex;
  flex-direction: column; /* 垂直方向排列 */
  align-items: center; /* 水平居中 */
=======
  align-items: center;
  /* 垂直居中 */
}

.avatar {
  display: flex;
  flex-direction: column;
  /* 垂直方向排列 */
  align-items: center;
  /* 水平居中 */
>>>>>>> ee6af49a9eb69963e93147f32a1be7d9213b6593
  margin-top: 20px;
}

.avatar-info {
  display: flex;
<<<<<<< HEAD
  align-items: center; /* 水平垂直居中 */
}

.user-tag {
	color: white;
  margin-right: -40px;
  padding: 2px;
  background-color:rgba(255, 255,255, 0.2);
=======
  align-items: center;
  /* 水平垂直居中 */
}

.avatarleft {
  width: 80px;
  height: 80px;
  display: block;
}

.user-tag {
  color: white;
  margin-right: -40px;
  padding: 2px;
  background-color: rgba(255, 255, 255, 0.2);
>>>>>>> ee6af49a9eb69963e93147f32a1be7d9213b6593
  border-radius: 5px;
  margin-top: 30px;
}

.username {
  margin-top: 2px;
  height: 30px;
  font-size: 16px;
  line-height: 40px;
  color: white;
  padding: 0 10px;
  border-radius: 5px;
}

.menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  left: -20px;
  width: 200px;
  height: 348px;
  border-radius: 18px;
  background-color: #fff;
}

.menu-name {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 80px;
  width: 170px;
  padding-left: 10px;
  font-size: 16px;
  font-weight: bold
}

.sidebar {
  width: 200px;
  background-color: #689AFB;
  padding: 20px;
  height: 500px;
  border-radius: 18px;
}

.content {
  width: 650px;
  height: 500px;
  padding: 10px;
  margin-left: 20px;
  border-radius: 18px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
}
<<<<<<< HEAD
.user-settings {
	height: 70px;
	display: flex;
	align-items: center;
	margin-left: 18px;
}
.user-name {
	font-size: 20px;
	font-weight: bold;
	margin-top: 20px;
}
.separator {
  height: 2px;
  width:100%;
  background: linear-gradient(to right, #689AFB, #dadfe1); /* 渐变效果 */
}
.user-information{
  display: flex;
	align-items: center;
=======

.user-settings {
  height: 70px;
  display: flex;
  align-items: center;
  margin-left: 18px;
}

.user-name {
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;
}

.separator {
  height: 2px;
  width: 100%;
  background: linear-gradient(to right, #689AFB, #dadfe1);
  /* 渐变效果 */
}

.user-information {
  display: flex;
  align-items: center;
>>>>>>> ee6af49a9eb69963e93147f32a1be7d9213b6593
  width: 100%;
  justify-content: center;
  margin-top: 10px
}
<<<<<<< HEAD
.user-basic{
	align-items: center;
	margin-right: 10px;
  width: 45%;
}
.user-body{
	align-items: center;
	margin-left: 10px;
  width: 45%;
}
.list{
=======

.user-basic {
  align-items: center;
  margin-right: 10px;
  width: 45%;
}

.user-body {
  align-items: center;
  margin-left: 10px;
  width: 45%;
}

.list {
>>>>>>> ee6af49a9eb69963e93147f32a1be7d9213b6593
  display: flex;
  padding: 10px;
  align-items: center;
  width: 100%;
}
<<<<<<< HEAD
.list .sub-titie{
  width: 60px;
}
.avatar-change {
	color: grey;
  padding: 2px;
  margin-top: 60px;
}
=======

.list .sub-titie {
  width: 60px;
}

.avatar-change {
  color: grey;
  padding: 2px;
  margin-top: 60px;
}

>>>>>>> ee6af49a9eb69963e93147f32a1be7d9213b6593
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 50%;
  cursor: pointer;
<<<<<<< HEAD
  position: relative;
=======
  position: related;
>>>>>>> ee6af49a9eb69963e93147f32a1be7d9213b6593
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 80px;
  height: 80px;
  text-align: center;
}
<<<<<<< HEAD
.imformation-change{
=======

.imformation-change {
>>>>>>> ee6af49a9eb69963e93147f32a1be7d9213b6593
  display: flex;
  justify-content: center;
  margin-top: auto;
  margin-bottom: 30px;
}
</style>
