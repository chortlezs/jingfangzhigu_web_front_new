<template>
  <div class="Mocontainer">
  <div v-if="true" class="mod" style="z-index: 9999;">
    <span v-if="true" class="detail"><b>病历详情</b></span>
    <div class="header">
      <span class="word"><b>面部特征：</b>
        <li v-for="(item, index) in faceDiagnosis[index].faceAnalysis.FacialFeatures" :key="index">
      {{ item.type }} (概率: {{ item.probability * 100 }}%)
    </li>
      </span>
    </div>
    <div class="body-item-0">
      <span class="summary"><b>中医诊断结果：</b>{{faceDiagnosis[index].diagnosis}}</span>
      <div v-for="(item, index) in faceDiagnosis[index].faceAnalysis.DiagnosticResults" :key="index">
    <li>{{ item.completion }}</li>
    <p>{{ item.diet }}</p>
  </div>
    </div>
    <button @click="notifyParent" class="goback">返回</button>
  </div>
</div>
</template>
<script>
export default {
components: {},
// props: ['index'],
data() {
  return {
    index:1,
    constants: {},
    faceDiagnosis: JSON.parse(localStorage.getItem('faceDiagnosis'))
  }
},

methods: {
  notifyParent() {
    this.$emit('notify', 'Hello from child!');
  }
},
}
</script>

<style src="./toDetail.css" />
