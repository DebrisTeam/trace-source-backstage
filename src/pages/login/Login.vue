<template>
    <div class="login-wrap">
        <div class="login-content">
            <div class="login">
                <img src="../../assets/logo-blue.png" width="80">
                <el-form class="form" :model="formData" ref="formData" :rules="rules">
                    <el-form-item prop="userName">
                        <el-input v-model="formData.userName" placeholder="用户名/手机号"></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input :type="inputType" v-model="formData.password" placeholder="登陆密码"></el-input>
                        <span class="show-password icon" v-bind:class="{ 'icon-eye-open': !eyeClose,'icon-eye-close': eyeClose }" v-on:click="showPassword"></span>
                    </el-form-item>
                </el-form>
                <div class="block">
                    <el-button type="primary" :loading="loading" style="width: 100%;" @click="signinFn(formData)">{{ loginBtnText }}</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data() {
            let checkUserName = (rule, value, callback) => {
                const result = /^1[34578]\d{9}$/.test(value);
                result ? callback() : callback(new Error(rule.message));
            };

            let checkpassword = (rule, value, callback) => {
                const result = /^\w{6,15}$/.test(value);
                result ? callback() : callback(new Error(rule.message));
            };

            return {
                formData: {
                    userName: '',
                    password: '',
                },

                inputType: 'password',
                eyeClose: false,
                loading: false,
                loginBtnText: '登陆',

                rules: {
                    userName: [{
                            required: true,
                            message: '用户名不能为空',
                            trigger: 'blur'
                        },
                        {
                            validator: checkUserName,
                            message: '用户名不正确',
                            trigger: 'blur, change'
                        }
                    ],
                    password: [{
                            required: true,
                            message: '密码不能为空',
                            trigger: 'blur'
                        },
                        {
                            validator: checkpassword,
                            message: '密码应该是6-15位的数字、字母或者下滑线',
                            trigger: 'blur, change'
                        }
                    ],
                }
            }
        },
        methods: {
            // 显示隐藏密码
            showPassword() {
                const className = event.target.className;
                if(className === 'show-password icon icon-eye-open') {
                    this.inputType = 'text';
                    this.eyeClose = true;
                } else {
                    this.inputType = 'password';
                    this.eyeClose = false;
                }
            },

            // 登陆按钮状态处理
            loginBtnStatus(loading, txt) {
                this.loading = loading;
                this.loginBtnText = txt;
            },

            signinFn(formData) {
                console.log(formData)
                console.log(this.$refs)
                this.$refs['formData'].validate((valid) => {
                    if(valid) {
                        this.loginBtnStatus(true, '正在登陆...')
                        axios.post('/api/login', formData).then(function(response) {
                            console.log(response)
                            if (response.data.status === 0) {
                                this.$message({
                                    message: response.data.info,
                                    type: 'error'
                                });
                                this.loginBtnStatus(false, '登陆')
                                return false;
                            }
                            
                            this.$message({
                                message: response.data.info,
                                type: 'success'
                            });
                            
                            this.$store.commit('USER_LOGIN');
                            this.$store.commit('GET_USER_INFO');
                            this.loginBtnStatus(false, '登陆')
                            this.$router.push('/');
                            
                        }.bind(this)).catch(function (err) {
                            this.$message({
                                message: err,
                                type: 'error'
                            });
                        }.bind(this));
                    } else {
                        console.error('error');
                        return false;
                    }
                });

            }
        }
    }
</script>

<style scoped="scoped">
    .login-wrap {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background-color: #424f63;
        z-index: 200;
    }
    
    .login-content {
        display: flex;
        width: 100%;
        height: 100%;
        align-content: center;
        align-items: center;
        justify-content: center;
    }
    
    .login {
        width: 350px;
        padding: 20px 50px 50px 50px;
        background-color: #fff;
        text-align: center;
        border-radius: 5px;
    }
    
    .form {
        margin-top: 20px;
    }
    
    .show-password {
        position: absolute;
        top: 0;
        right: 0;
        padding: 0 10px;
        cursor: pointer;
        color: #777;
        font-size: 20px;
    }
</style>