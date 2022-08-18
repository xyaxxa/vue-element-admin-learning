<!-- 注册页面目前是复制的登录页面还需修改 -->

<template>
  <div class="page">
    <div class="main-container">
        <div class="tab-container">
            <div>
                <router-link :to="{name:'LoginPage'}"><el-button type="text">登录</el-button></router-link>
            </div>
            <div>
            <el-button type="text" style="color:black;border-bottom: 1px solid #03045E;">注册</el-button>
            </div>
        </div>
            <div class="login-container">
                <el-form ref="loginForm" :model="loginForm" :rules="loginRules">
                    <el-form-item prop="username">
                        <el-input 
                        ref="username"
                        v-model="loginForm.username"
                        name="username"
                        type="text"
                        placeholder="输入您的学号"
                        prefix-icon="el-icon-user"
                        ></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input
                        ref="password"
                        type="password" 
                        v-model="loginForm.password"
                        name="password"
                        placeholder="输入您的密码"
                        prefix-icon="el-icon-lock"
                        :show-password="true"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button 
                        type="primary"
                        :loading="loading"
                        :round="true"
                        @click.native.prevent="handleLogin">登录</el-button>
                    </el-form-item>
                </el-form>
            </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        // 这里写校验用户名的函数
        const validateUsername = (rule,value,callback) => {
            if(value === ''){
                callback(new Error('输入学号'));
            }else{
                callback();
            }
        }
        // 这里写校验密码的函数
        const validatePassword = (rule,value,callback) => {
            if(value.length < 6){
                callback(new Error('输入正确的密码'));
            }else{
                callback();
            }
        }
        return {
            loginForm: {
                username: '',
                password: '',
            },
            loginRules: {
                username: [{trigger: 'blur', validator: validateUsername}],
                password: [{trigger: 'blur', validator: validatePassword}],
            },
            loading: false,
        }
    },
    methods: {
        handleLogin() {
            //这里写点击登录后验证用户密码是否有效的逻辑，要发送给服务端验证，用到axios。并且涉及状态存储，用到vuex
        }
    }
}
</script>

<style scoped lang="scss">
.page {
    height:100%;
    width:100%;
    padding: 5rem;
    background-color: #ADE8F4;
}
.main-container {
    width:30rem;
    margin:0 auto;
    padding: 1rem;
    display: flex;
    background-color:white;
    flex-direction: column;
    border-radius:10px;
    box-shadow:0px 0px 5px 0 #0096c7;    

    .tab-container {
        display:flex;
        justify-content: space-around;
        margin-bottom:2rem;
        
        div {
            width:50%;
            display:flex;
            justify-content:center;
        }
        .el-button {
            font-size:18px;
            width:80%;
        }
    }

    .login-container {
        padding:1rem;
        .el-button {
            width:100%;
            margin-top: 1rem;
        }
    }

}
</style>