<script setup>
import { ref } from 'vue';
import { UserOutlined } from '@ant-design/icons-vue';

const menuData = [
    {
      key: 'user',
      title: '用户设置',
      path: '/user',
    },
    {
      key: 'customization',
      title: '界面定制',
      path: '/customization',
    },
    {
      key: 'notification',
      title: '通知设置',
      path: '/notification',
    },
    {
      key: 'data',
      title: '数据管理',
      path: '/data',
    },
  ]
    const openKeys = ref(["1"]); // 菜单展开的keys
	const selectedKeys = ref(["key1"]); // 当前选中的keys

	const selectItem = ({ item, key, selectedKeys }) => {
  router.push({ path: key }); // 点击菜单项时导航到相应路径
	}

</script>

<template>
	
	<div class="outer-container">
	  <div class="center-container">
		<!-- 左侧导航栏 -->
		<div class="sidebar">
			<div class="avatar">
			<a-avatar :size="64">
				<template #icon><UserOutlined /></template>
			</a-avatar>
			<p>loopy</p>
			</div>
			<div class="menu">
				<a-menu
					v-model:selectedKeys="selectedKeys"
					:open-keys="openKeys"
					@select="selectItem"
					mode="vertical"
					theme="#fff"
					>
					<a-menu-item
						v-for="item in menuData"
						:key="item.key"
						:icon="item.icon"
						@click="() => handleMenuClick(item.key)"
					>
						{{ item.title }}
					</a-menu-item>
				</a-menu>
			</div>
			

		</div>

		<!-- 右侧内容区域 -->
		<div class="content">
		  <router-view></router-view>
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
	/* background-color: #e6f7ff; */
	display: flex;
	align-items: center; /* 垂直居中 */
	}
  .avatar{
	margin-left: 40px;
  }
  .menu {
	position: relative;
	left: -20px;
	width: 200px;
	height: 300px;
  }
  .sidebar {
	width: 200px;
	background-color: #60a7e9; 
	padding: 20px; 
	height: 500px;
	border-radius: 18px;
  }
  
  .content {
	width: 500px;
	height: 500px;
	margin-left: 20px;
	border-radius: 18px;
	background-color: #e6f7ff;
  }
  </style>
  
  
  
  