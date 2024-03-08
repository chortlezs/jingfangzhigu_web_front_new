<template>
  <div class="body">
    <form @submit.prevent="register">
      <div class="container">
        <div class="content">
          <h1>开始创建您的个人账户吧！</h1>
          <a>您可以使用手机号或邮箱作为您的账户</a>
          <p>请输入您的账号和密码</p>
          <div>
            <input
              type="text"
              placeholder="请输入您的账号..."
              v-model="username"
              required
            />
            <button class="btn-second" @click="sendVerificationCode">
              获取验证码
            </button>
          </div>
          <div>
            <input
              type="identify"
              placeholder="请输入验证码..."
              v-model="check"
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="请输入您的密码..."
              v-model="password"
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder=" 请再次输入您的密码..."
              v-model="re_password"
              required
            />
          </div>
          <button class="btn-first">注册患者</button>
          <button class="btn-third">注册医师</button>
          <div>
            ·已注册过账号？<a @click="$router.push('/goLogin')">-点此登录-</a>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import { useRouter } from "vue-router";
const router = useRouter();
export default {
  data() {
    return {
      username: "",
      check: "",
      password: "",
      re_password: "",
      error: "",
    };
  },
  methods: {
    async sendVerificationCode() {
      try {
        // 向后端发送登录请求
        const token =
          "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiZXhwIjoxNzEwMDYwOTE2fQ.Vw_EdKzprG3PCNKtGfU19XwvCyyY0WihSaf7NRuuYJc";
        const response = await axios.post(
          "/user/sendSms",
          {
            phone: this.username,
          },
          {
            withCredentials: true,
            headers: {
              "Access-Control-Allow-Origin": "*",
              Authorization: token,
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        if (response.data.code === "SUCCESS") {
          console.log(response);
        } else {
          alert("发送验证码失败，请重试") ;
          console.log(response);
        }
      } catch (error) {
        if (error.response) {
          this.error = error.response.data.message;
        } else {
          this.error = "登录失败，请重试";
        }
      }
    },
    async register(){
      try {
        // 向后端发送登录请求
        const token =
          "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiZXhwIjoxNzEwMDYwOTE2fQ.Vw_EdKzprG3PCNKtGfU19XwvCyyY0WihSaf7NRuuYJc";
        const response = await axios.post(
          "/user/register",
          {
            phone: this.username,
            code: this.check,
            pwd: this.password,
            role: 1,
          },
          {
            withCredentials: true,
            headers: {
              "Access-Control-Allow-Origin": "*",
              Authorization: token,
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        if (response.data.code === "SUCCESS") {
          console.log(response);
        } else {
          // 登录失败，弹出提示框
          alert(response.data.message);
          console.log(response);
        }
      } catch (error) {
        if (error.response) {
          this.error = error.response.data.message;
        } else {
          alert("注册失败，请重试");
        }
      }
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("/src/assets/login_pictures/chat_background.png");
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
.content {
  text-align: center;
  padding: 50px;
  border-radius: 12px;
}
h1 {
  margin-left: 20px;
}
p {
  color: #000000;
  font-weight: bold;
  font-size: 18px;
}
a {
  font-size: 14px;
}

input[type="identify"] {
  padding: 10px;
  margin: 10px;
  width: 300px;
  border-radius: 12px;
  border: 2px solid #ccc;
  margin-bottom: 10px;
}
input[type="password"] {
  padding: 10px;
  margin: 10px;
  width: 300px;
  border-radius: 12px;
  border: 2px solid #ccc;
  margin-bottom: 10px;
}
input[type="text"] {
  padding: 10px;
  margin: 10px;
  width: 210px;
  border-radius: 12px;
  border: 2px solid #ccc;
  margin-bottom: 10px;
}

.btn-second {
  padding: 10px 7px;
  background-color: #689afb;
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 14px;
  cursor: pointer;
}

.btn-first {
  margin-top: 10px;
  margin-right: 70px;
  padding: 10px 30px;
  background-color: #689afb;
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 16px;
}

.btn-third {
  margin-top: 10px;
  padding: 10px 30px;
  background-color: #76bdb3;
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 16px;
}
.btn-first:hover {
  background-color: #d3d3d3;
  color: #000000;
  cursor: pointer;
}
.btn-second:hover {
  background-color: #d3d3d3;
  color: #000000;
  cursor: pointer;
}
.btn-third:hover {
  background-color: #d3d3d3;
  color: #000000;
  cursor: pointer;
  
}
</style>
