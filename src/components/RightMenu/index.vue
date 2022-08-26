<template>
  <div class="rightmenu-container">
    <el-dropdown type="text" size="small">
      <i class="el-icon-key"></i>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item @click.native.prevent="handleLogout()">log out</el-dropdown-item>
        <el-dropdown-item>3</el-dropdown-item>
        <el-dropdown-item>2</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: 'RightMenu',
  methods: {
    handleLogout() {
      //说起来为什么登出也需要发送请求:保证不只是在前端清除token缓存，同时在后端实现相应的登出逻辑
      this.$store.dispatch('user/logout').then(() => {
        this.$router.push({name:'Login'});
      }).catch(error => {
        console.log(error);
      })
    }
  }
}
</script>

<style>
.rightmenu-container {
  height:100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>