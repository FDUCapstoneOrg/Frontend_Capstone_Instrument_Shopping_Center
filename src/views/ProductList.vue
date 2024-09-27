<template>
  <div>
    <el-header>
      <div class="header-container">
        <div class="welcome-message">
          {{ username }}，欢迎你!
        </div>
        <el-dropdown trigger="click">
          <el-button type="text">
            个人中心 <el-icon name="arrow-down"></el-icon>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>设置</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-header>
    <div>product list</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: ""
    };
  },
  created() {
    this.username = localStorage.getItem('user');
  },
  methods: {

  }
};
</script>

<style scoped>
.header-container {
  display: flex;
  justify-content: space-between; /* 让内容两端对齐 */
  align-items: center; /* 垂直居中 */
  padding: 0 20px; /* 左右内边距 */
  height: 100%; /* 高度占满 */
}

.welcome-message {
  font-size: 20px; /* 字体大小 */
  font-weight: bold; /* 加粗字体 */
  color: #409EFF; /* 字体颜色，Element UI 的主题色 */
}
</style>