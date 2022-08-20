<template>
  <div class="logo-container">
    <i class="el-icon-lock"></i>
    <span>what is it</span>
  </div>
</template>

<script>
export default {
    name: 'Logo'
}
</script>

<style scoped lang="scss">
.logo-container {
  height:50px;
  background-color: #1b4332;
  color:white;
  display: flex;
  align-items: center;
  padding:10px;
  i {
    margin-left:20px;
  }
  span {
    margin-left:30px;
  }
}
</style>