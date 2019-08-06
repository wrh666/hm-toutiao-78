<template>
    <div class="container">
        <el-card class="my-card">
            <!-- logo -->
            <img src="../../assets/images/logo_index.png" alt="">
            <!-- 表单 -->
            <el-form :model="loginForm">
                <el-form-item>
                    <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="loginForm.code" placeholder="请输入验证码" style="width:236px;margin-right:10px"></el-input>
                    <el-button>发送验证码</el-button>
                </el-form-item>
                <el-form-item>
                    <el-checkbox :value="true">我已阅读并同意用户协议和隐私条款</el-checkbox>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" style="width:100%">登陆</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
export default {
  data () {
    return {
      // 表单的数据对象
      loginForm: {
        //   字段参考接口文档
        mobile: '',
        code: ''
      }
    }
  }
}
</script>

<style scoped lang='less'>
    .container{
        width: 100%;
        height: 100%;
        position: absolute;
        // conter / cover 背景图定位 / 背景图尺寸 cover 等比例缩放
        background: url(../../assets/images/login_bg.jpg) no-repeat center / cover;
        .my-card{
            width: 400px;
            height: 350px;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-60%);
            img{
                width: 200px;
                display: block;
                margin: 0 auto 10px;
            }
        }
    }
</style>
