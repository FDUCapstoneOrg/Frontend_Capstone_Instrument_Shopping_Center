<template>
  <div class="container">
    <el-card class="card" shadow="hover">
      <h2 class="title">user profile</h2>
      <div class="content">
        <div>
          <span>Username:</span>
          <span>{{ info.username }}</span>
        </div>
        <div>
          <span>Type:</span>
          <span>{{ info.role }}</span>
        </div>
        <div>
          <span>Email:</span>
          <span>{{ info.email }}</span>
        </div>
        <div>
          <span>Phone:</span>
          <span>{{ info.phoneNumber }}</span>
        </div>
        <div>
          <span>Address:</span>
          <span>{{ info.address }}</span>
        </div>
      </div>
      <el-button class="button" type="primary" @click="handleClick">Go back</el-button>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: {
        username: "",
        role: "",
        email: "",
        address: "",
        phoneNumber: ""
      }
    };
  },
  created() {
    this.$axios.post('/UserProfile/getUserInfoByUsername', {
      username: localStorage.getItem('user')
    })
      .then(response => {
        console.log(response.data);
        let res = response.data;
        if (res['code'] == 200) {
          this.info.username = res.username;
          this.info.role = res.role;
          this.info.email = res.email;
          this.info.address = res.address;
          this.info.phoneNumber = res.phoneNumber;
        }
        else {
          this.$message({
            message: 'Operation failed',
            type: 'error'
          });
        }

      })
      .catch(error => {
        console.error(error);
        this.$message({
          message: 'Operation failed',
          type: 'error'
        });
      });

  },
  methods: {
    handleClick() {
      this.$router.back();
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f2f2f2;
  padding: auto;
  box-sizing:border-box;
}

.card {
  width: 100%;
  max-width:700px;
  padding: 30px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.title {
  text-align: center;
  margin-bottom: 40px;
  font-size: 28px;
  color: #409EFF;
}

.button {
  display: block;
  margin: 0 auto;
  padding: 10px 20px;
}

.content>div {
  margin-top: 20px;
  margin-bottom: 50px;
  font-weight: bold;
}
</style>