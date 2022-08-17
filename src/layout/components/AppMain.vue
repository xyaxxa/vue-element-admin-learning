<template>
    <section class="app-main">
        <!-- transtition是vue提供的组件，详细介绍看官方文档 -->
        <transition name="fade-transform" mode="out-in">
            <router-view />
        </transition>
    </section>
</template>

<script>
export default {
    name: 'AppMain',
}
</script>

<style scoped>
.app-main {
    padding:1rem;
}
</style>