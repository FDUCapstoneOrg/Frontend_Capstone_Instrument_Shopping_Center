<template>
    <div>
        <div class="login-container">
            <el-card class="login-card" shadow="hover">
                <h2 class="login-title">Welcome to be a new user!</h2>

                <el-form :model="loginForm" ref="loginForm" :rules="rules" label-width="150px">
                    <!-- 用户名输入框 -->
                    <el-form-item label="Username" prop="username">
                        <el-input v-model="loginForm.username" placeholder="Enter your username"></el-input>
                    </el-form-item>

                    <!-- 密码输入框 -->
                    <el-form-item label="Password" prop="password">
                        <el-input v-model="loginForm.password" type="password"
                            placeholder="Enter your password"></el-input>
                    </el-form-item>

                    <!-- 密码输入框 -->
                    <el-form-item label="Password again" prop="passwordAgain">
                        <el-input v-model="loginForm.passwordAgain" type="password"
                            placeholder="Enter your password again"></el-input>
                    </el-form-item>
                </el-form>
                <el-button class="login-button" type="primary" @click="handleRegister">Register</el-button>

            </el-card>

        </div>
        <div class="power">Powered by Xiao Su 2097658, Angran Li 2097002, Dongye Liu 2075960</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // 表单数据
            loginForm: {
                username: '',
                password: '',
                passwordAgain: ''
            },
            // 验证规则
            rules: {
                username: [
                    { required: true, message: 'Please enter username', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: 'Please enter password', trigger: 'blur' }
                ],
                passwordAgain: [
                    { required: true, message: 'Please enter password again', trigger: 'blur' },
                    { validator: this.validateConfirmPassword, trigger: 'blur' }
                ]
            }
        };
    },
    methods: {
        // 处理登录按钮点击
        handleRegister() {
            this.$refs.loginForm.validate((valid) => {
                if (valid) {
                    localStorage.setItem('user', this.form.username);
                    // 模拟登录逻辑
                    this.$router.push('/productList');
                } else {
                    console.log('Error during register');
                    return false;
                }
            });
        },
        validateConfirmPassword(rule, value, callback) {
            if (value === '') {
                callback(new Error('Please enter password again'));
            } else if (value !== this.loginForm.password) {
                callback(new Error('It is different from password above!'));
            } else {
                callback();
            }
        },

    }
};
</script>

<style scoped>
.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
    background-color: #f2f2f2;
}

.login-card {
    width: 700px;
    padding: 20px;
}

.login-title {
    text-align: center;
    margin-bottom: 60px;
    font-size: 24px;
    color: #409EFF;
}

.login-button {
    text-align: center;
    margin-bottom: 10px;
}

.power {
    text-align: center;
    font-size: 12px;
    color: #888888;
    padding: 10px 0;
    margin-top: 20px;
}
</style>