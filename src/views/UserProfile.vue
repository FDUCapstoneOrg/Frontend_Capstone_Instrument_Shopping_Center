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
  height: 600px;
  background-color: #f2f2f2;
}

.card {
  width: 700px;
  padding: 20px;
}

.title {
  text-align: center;
  margin-bottom: 60px;
  font-size: 24px;
  color: #409EFF;
}

.button {
  text-align: center;
  margin-bottom: 10px;
}

.content>div {
  margin-top: 20px;
  margin-bottom: 50px;
  font-weight: bold;
}
</style>