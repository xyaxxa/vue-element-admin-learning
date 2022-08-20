<template>
  <div class="breadcrumb-container">
    <el-breadcrumb>
      <!-- 这个面包屑的转换效果还要改一下啊，照搬fade-transform不行 -->
      <transition-group name="fade-transform" mode="out-in">
        <el-breadcrumb-item v-for="(route,index) of routesCrumb" :key="route.path">
          <!-- 最后一个面包屑不用有跳转效果，利用了v-for提供的index来判断是否是最后一个！ -->
          <span v-if="index === routesCrumb.length-1" class="no-jump-breadcrumb">{{route.meta.title}}</span>
          <!-- 注意，这里不能用生硬的a标签的href跳转，最好的办法是用router-link的to（两者为什么会有不同），或者在script用$router.push，效果和router-link的to是一样的 -->
          <router-link v-else :to="route.path" class="jump-breadcrumb">{{route.meta.title}}</router-link>
        </el-breadcrumb-item>
      </transition-group>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
    name: 'Breadcrumb',
    // 我这里没有用watch $route和data，而是用了computed，也能动态计算，和参考文档的有何不同，有何优劣？
    computed: {
      routesCrumb() {
        const routesCrumb = this.getBreadcrumb();
        return routesCrumb; 
      }
    },
    methods: {
      getBreadcrumb() {
        // $route.matched返回当前路径所有的去嵌套路由（类似于多次.parent得到的结果，只是.parent已经被废弃了）
        // 这里目的是获得有title的路由项(同时还可以去除dashboard处多余的那个path：'')
        let matched = this.$route.matched.filter(item => item?.meta?.title);
        return matched;
      }
    }
}
</script>

<style scoped>
.breadcrumb-container {
  height:100%;
  display:flex;
  align-items:center;
  margin-left:5px;
}
.jump-breadcrumb {
  font-weight: normal;
}
.no-jump-breadcrumb {
  font-weight: 300;
}
</style>