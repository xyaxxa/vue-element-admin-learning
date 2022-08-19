<template>
<!-- 这里原文档有一个考虑logo是否显示的逻辑，我先没写 -->
    <div>
        <logo />
            <el-scrollbar>
                <el-menu background-color="#2d6a4f" text-color="#d8f3dc" active-text-color="#0aff99">
                    <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path" />
                </el-menu>
            </el-scrollbar>
    </div>
</template>

<script>
import Logo from './Logo'
import SidebarItem from './SidebarItem'
//导入scss文件读取其值这块儿我还没成功
import colors from '@/styles/colors.scss'
export default {
    name: 'SideBar',
    components: {
        Logo,
        SidebarItem
    },
    computed: {
        routes() {
            return this.$router.options.routes;
        },
        colors() {
            return colors;
        }
    }
}
</script>