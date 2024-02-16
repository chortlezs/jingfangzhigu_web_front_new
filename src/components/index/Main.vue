<template>
    <el-main class="main">
        <el-row class="main">
            <el-row class="main-header1" id="main-header1">
                <h1 >经方智谷</h1>
                <h4 >—您的私人AI中医诊疗助手—</h4>
            </el-row>

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
                    v-for="button in buttons"
                    :key="button.text"
                    type=""
                    text
                    bg
                    style="text-align: left;"
                    >{{ button.text }}</el-button
                    >
                </div>
            </el-row>
        </el-row>
            <!--<div class="box"></div>-->
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
                            v-model="textarea"
                            :rows="4"
                            :resize="'none'"
                            type="textarea"
                            :autosize="false"
                            placeholder="输入任何您想咨询的健康问题，我们即刻为您解答"
                        />
                        <div class="button2">
                            <el-button type="primary" :icon="Microphone" round />
                            <el-button type="primary" :icon="Position"  round />
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
                            v-model="textarea"
                            :rows="4"
                            :resize="'none'"
                            :autosize="false"
                            type="textarea"
                            placeholder="输入任何您想咨询的健康问题，我们即刻为您解答"
                        />
                        <div class="button2">
                            <el-button type="primary" :icon="Microphone" round />
                            <el-button type="primary" :icon="Position"  round />
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
                            v-model="textarea"
                            :rows="4"
                            type="textarea"
                            :resize="'none'"
                            :autosize="false"
                            placeholder="输入任何您想咨询的健康问题，我们即刻为您解答"
                        />
                        <div class="button2">
                            <el-button type="primary" :icon="Microphone" round />
                            <el-button type="primary" :icon="Position"  round />
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
                            v-model="textarea"
                            :rows="4"
                            type="textarea"
                            :resize="'none'"
                            :autosize="false"
                            placeholder="输入任何您想咨询的健康问题，我们即刻为您解答"
                        />
                        <div class="button2">
                            <el-button type="primary" :icon="Microphone" round />
                            <el-button type="primary" :icon="Position"  round />
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
import { ref } from 'vue'
const textarea = ref('')
const buttons = [
  { text: '我最近头痛伴着流鼻涕,该吃什么药?' },
  { text: '最近中医馆配的酸梅汤很火，请问可以当饮料喝吗？' },
  { text: '胃肠炎可以吃柚子吗？' },
] as const
import type { TabsPaneContext } from 'element-plus'
const activeName = ref('first')
const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
import { Search,Edit,Position,Microphone,DataAnalysis,ChatLineSquare} from '@element-plus/icons-vue'
const input2 = ref('')
import { Monitor,Camera } from '@element-plus/icons-vue'
</script>