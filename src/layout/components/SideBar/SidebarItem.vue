<template>
<!-- 首先判断该路由是否hidden -->
  <div v-if="!item.hidden">
  <!-- 接着在这里要对children进行判断
  情况有以下几种：有一个没hidden的children、没有children以及有children的不能再有子children了 => 直接放在侧边栏； 
  有超过一个的children => 以嵌套的方式放在侧边栏--不显示这个template而跳到下方的那个template-->
    <template v-if="hasOneShowingChild(item.children,item)&&(!theOnlyOneChild.children)">
    <!-- 这里就是实现点击跳转至目的页面或外部页面，之所以引一个外部组件(还有很多细节)就是因为考虑到有跳到外部链接的可能 -->
    <app-link :to="resolvePath(theOnlyOneChild.path)">
    <!-- 这里要获取完整的路径信息（parent的path+children的path）作为index -->
      <el-menu-item :index="resolvePath(theOnlyOneChild.path)" :class="{'nested':isNested}">
      <!-- 这里就应该是真正的侧边栏信息 -->
        <menu-item :icon="theOnlyOneChild.meta.icon||(item?.meta?.icon)" :title="theOnlyOneChild.meta.title||(item?.meta?.title)" />
      </el-menu-item>
    </app-link>

    </template>

    <!-- 有多个children，就到嵌套路由这里来了 -->
    <template v-else>
      <el-submenu :index="resolvePath(item.path)">
        <!-- 这里也是侧边栏信息 -->
        <template slot="title">
          <menu-item :icon="item?.meta?.icon" :title="item?.meta?.title" />
        </template>
      <!-- 在这里进行递归，把当前children信息传给同样的SidebarItem组件 -->
        <sidebar-item 
        v-for="child in item.children" 
        :key="child.path" 
        :item="child" 
        :base-path="resolvePath(child.path)"
        :isNested="true" />
      </el-submenu>
    </template>
  </div>
</template>

<script>
import { isExternal } from '@/utils/validate'
import path from 'path-browserify'
import MenuItem from './Item'
import AppLink from './AppLink'

export default {
    name: 'SidebarItem',
    components: {
      MenuItem,
      AppLink
    },
    data() {
      return {
        theOnlyOneChild : null
      }
    },
    props: {
      //这个item就是需要父组件传来路由信息，以供侧边栏进行是否显示、怎么显示、index是什么等逻辑判断
      item: {
        type: Object,
        required: true
      },
      //为什么需要basePath？涉及多级嵌套路由时，我们path.resolve不能只靠父路径和子路径，因为还有可能有爷爷路径:)
      basePath: {
        type: String,
        default: ''
      },
      // 这个主要是为了区分开有嵌套的选项的底色和无嵌套的底色
      isNested: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      //判断是否只有一个没hidden的children或者没有children
      hasOneShowingChild(children = [],parent) {
        // 取出item里没有hidden的children
        const showingChildren = children.filter(item => {
          if(item.hidden){
            return false;
          } else {
            this.theOnlyOneChild = item;
            return true;
          }
        });
        // 如果只有一个需要showing的children，那返回true,同时，此时的onlyOneChild就是唯一的那个child
        if(showingChildren.length === 1){
          return true;
        }
        // 要是没有children，注意此时parent已经不是hidden了，所有把parent放到侧边栏，同样返回true，并且自己构造一下这个onlyOneChild
        // 但其实我还没有搞懂这个的应用场景，所以暂时注释掉--嵌套里面的最后一个路由项就需要用到这个判断，以保证显示的是el-munu-item而不是跑到el-submenu那块儿去
        if(showingChildren.length === 0){
          this.theOnlyOneChild = {...parent, path:''};
          return true;
        }
        return false;
      },
      //用于合成适合的路径赋给el-munu-item的index属性
      resolvePath(childPath){
        const parentPath = this.basePath;
        // 这里如果childPath或者parentPath是外部路径的话，则直接返回这个外部路径当作该el-menu-item的index，而不用再组装父路径和子路径
        // 用到了isExternal方法，此方法可以写在工具文件里
        if(isExternal(childPath)){
          return childPath;
        }
        if(isExternal(parentPath)){
          return parentPath;
        }
        return path.resolve(parentPath, childPath);
      }
    }
}
</script>

<style scoped>
</style>