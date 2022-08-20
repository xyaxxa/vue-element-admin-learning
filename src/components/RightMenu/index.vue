<template>
  <div class="rightmenu-container">
    <el-dropdown type="text" size="small">
      <i class="el-icon-key"></i>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>1</el-dropdown-item>
        <el-dropdown-item>3</el-dropdown-item>
        <el-dropdown-item>2</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: 'RightMenu',
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