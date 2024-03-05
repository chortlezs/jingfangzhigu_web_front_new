<script setup>
import {ref,onMounted} from 'vue'
import axios from 'axios';
import { token }from '@/config/requestConfig.js'
const imageUrl = ref('')

const getUserInfo = () => {
    axios.get('http://59.110.149.33:8001/user/info', {
        headers: {
            Authorization: token
        }
    }).then(res => {
        console.log(res)
        if(res.data && res.data.code == "SUCCESS"){
            let userInfo = res.data.data.userInfo
            if(userInfo.avatar){
                localStorage.setItem('headimg',userInfo.avatar)
            }
        }
    })
}

onMounted(()=>{
    let headUrl = localStorage.getItem('headimg')
    if(headUrl){
        imageUrl.value = headUrl
    }
    getUserInfo()
})
</script>

<template>
    <router-view />
</template>

<style scoped>

</style>
