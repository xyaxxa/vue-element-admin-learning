<template>
  <div class="right-menu">
    <el-dropdown split-button type="primary" size="small">
      下拉菜单
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
.right-menu {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>