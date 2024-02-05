<script setup>
import { ExclamationCircleOutlined,SwitcherOutlined } from '@ant-design/icons-vue';
</script>

<template>
<div class="content">
    <div class="user-settings">
      <span class="user-name">用户设置</span>
    </div>
   <div class="separator"></div>
	<ul class="list">
		<li class="list-item">对话历史记录和AI训练 
			<ExclamationCircleOutlined style="color: #1890ff;"/>
		</li>
		<li class="list-item">对外匿名
			<ExclamationCircleOutlined style="color: #1890ff;"/>
		</li>
	</ul>
</div>

</template>

<style scoped>
.content {
	width: 500px;
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

.list-item {
  height: 50px;
  padding: 20px;
  font-size: 16px;
}

</style>