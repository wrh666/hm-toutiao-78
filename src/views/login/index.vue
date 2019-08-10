<template>
    <div class="container">
        <el-card class="my-card">
            <!-- logo -->
            <img src="../../assets/images/logo_index.png" alt="">
            <!-- 表单 -->
            <el-form ref="loginForm" :model="loginForm" :rules="loginRules" status-icon>
                <el-form-item prop="mobile">
                    <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
                </el-form-item>
                <el-form-item prop="code">
                    <el-input v-model="loginForm.code" placeholder="请输入验证码" style="width:236px;margin-right:10px"></el-input>
                    <el-button>发送验证码</el-button>
                </el-form-item>
                <el-form-item>
                    <el-checkbox :value="true">我已阅读并同意用户协议和隐私条款</el-checkbox>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" style="width:100%" @click="login()">登陆</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
export default {
  data () {
    //   自定义校验函数
    const checkMobile = (rule, value, callback) => {
      // 按照逻辑去校验value即可
      // 手机号格式 1开头 第二位3-9 最后9位数即可
      if (!/^1[3-9]\d{9}$/.test(value)) return callback(new Error('手机号格式不对呀,亲'))
      callback()
    }
    return {
      // 表单的数据对象
      loginForm: {
        //   字段参考接口文档
        mobile: '13411111111',
        code: '246810'
      },
      //   校验规则对象
      loginRules: {
        mobile: [
          // required: true,-是否是必填项 message: '亲,请输入手机号码',-不填时提示 trigger: 'blur'-离开焦点触发
          { required: true, message: '亲,请输入手机号码', trigger: 'blur' },
          //   自定义校验函数
          { validator: checkMobile, trigger: 'blur' }
        ],
        code: [
          // required: true,-是否是必填项 message: '亲,请输入手机号码',-不填时提示 trigger: 'blur'-离开焦点触发
          { required: true, message: '亲,请输入验证码', trigger: 'blur' },
          { len: 6, message: '亲,请输入六位验证码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login () {
      //   1 . 对整个表单进行校验
      // 1.1 操作dom  给表单增加ref='login'
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          //   2 . 校验成功发起登陆的请求
          this.$http.post('http://ttapi.research.itcast.cn/mp/v1_0/authorizations', this.loginForm).then(res => {
            //   res是响应对象
            //  这是登陆成功后跳转的路由
            this.$router.push('/')
            // console.log(res.data)
          })
            .catch(() => {
              // 请求失败 提示  手机号或验证码错误了哈
              this.$message.error('手机号或验证码错误了哈')
            })
        }
      })
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
