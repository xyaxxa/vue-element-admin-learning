<template>
<!-- 这里原文档有一个考虑logo是否显示的逻辑，我先没写 -->
    <div>
        <logo />
            <el-scrollbar>
                <el-menu>
                    <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path" />
                </el-menu>
            </el-scrollbar>
    </div>
</template>

<script>
import Logo from './Logo'
import SidebarItem from './SidebarItem'

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
    }
}
</script>