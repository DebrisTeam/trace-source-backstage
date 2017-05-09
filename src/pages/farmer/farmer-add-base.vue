<template>
    <div class="add-village">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" style="width:500px">
            <el-form-item label="姓名" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            
            <el-form-item label="身份证号" prop="idCard">
                <el-input v-model="ruleForm.idCard"></el-input>
            </el-form-item>
             <el-form-item label="联系电话" prop="tel">
                <el-input v-model="ruleForm.tel"></el-input>
            </el-form-item>
            <el-form-item label="所属村庄" prop="village">
                <el-select v-model="ruleForm.village" placeholder="请选择">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="性别" prop="sex">
                <el-radio-group v-model="ruleForm.sex">
                    <el-radio label="男"></el-radio>
                    <el-radio label="女"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item prop="poor" label="是否贫困户">
                <el-switch on-text="" off-text="" v-model="ruleForm.poor"></el-switch>
            </el-form-item>
            <el-form-item label="上传图片" prop="upload">
                <el-upload
                    class="avatar-uploader"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                ruleForm: {
                    name: '',
                    idCard: '',
                    tel: '',
                    village: '',
                    sex: '',
                    poor: '',
                    picture: [],
                },
                
                imageUrl: '',
                
                rules: {
                    name: [{
                            required: true,
                            message: '请输入村庄名称',
                            trigger: 'blur'
                        },
                        {
                            min: 3,
                            message: '长度在3个字以上',
                            trigger: 'blur'
                        }
                    ],
                    address: [{
                        required: true,
                        message: '请选择地理位置',
                        trigger: 'change'
                    }],
                    
                    people: [{
                        required: true,
                        message: '请输入常驻人口',
                        trigger: 'blur'
                    }],
                    
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if(valid) {
                        axios.post('/api/add_village',this.ruleForm)
                        .then(function (response) {
                            console.log(response)
                        })
                        .catch(function (err) {
                            console.log(err)
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            
            handleAvatarSuccess(res, file) {
                this.imageUrl = URL.createObjectURL(file.raw);
            },
            
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;
        
                if (!isJPG) {
                  this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                  this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            },
            
        }
    }
</script>

<style scoped="scoped">
    .add-village {
        height: calc(100vh - 64px);
        padding: 20px;
        background-color: #fff;
    }
    .header {
        padding: 15px;
        padding-top: 30px;
    }
    .nav-bar {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .back-btn {
        margin-right: 40px;
        width: 100px;
        border-radius: 20px;
    }
    
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 120px;
        height: 120px;
        line-height: 120px;
        text-align: center;
    }
    .avatar {
        width: 120px;
        height: 120px;
        display: block;
      }
</style>
<style>
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #20a0ff;
    }
</style>