<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { UserOutlined } from '@ant-design/icons-vue';
import { SettingOutlined } from '@ant-design/icons-vue';

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
</script>

<template>
  <div class="outer-container">
    <div class="center-container">
      <!-- 左侧导航栏 -->
      <div class="sidebar">
        <div class="avatar">
          <div class="avatar-info">
            <a-avatar :size="64">
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
        
        </div>

    </div>
  </div>
</template>

<style>
body {
  margin: 0;
  height: 100vh;
  background-image: url('/src/assets/login_pictures/chat_background.png');
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}

.center-container {
  width: 800px;
  height: 500px;
  display: flex;
  align-items: center; /* 垂直居中 */
}
.avatar {
  display: flex;
  flex-direction: column; /* 垂直方向排列 */
  align-items: center; /* 水平居中 */
  margin-top: 20px;
}

.avatar-info {
  display: flex;
  align-items: center; /* 水平垂直居中 */
}

.user-tag {
	color: white;
    margin-right: -40px;
    padding: 2px;
    background-color: rgb(83, 161, 202);
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
  background-color: #60a7e9;
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
}
.user-settings {
	height: 70px;
	display: flex;
	align-items: center;
	margin-left: 18px;
}
.user-name {
	font-size: 20px;
	font-weight: bold;
	margin-top: 30px;
}
.separator {
  height: 2px;
  width: 450px;
  background: linear-gradient(to right, #2191f9, #dadfe1); /* 渐变效果 */
}
</style>
