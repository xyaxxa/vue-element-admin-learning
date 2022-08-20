<template>
    <div class="navbar">
        <section class="hamburger">
            <hamburger />
        </section>
        <section class="breadcrumb">
            <breadcrumb />
        </section>
        <section class="right-menu">
            <right-menu />
        </section>
    </div>
</template>

<script>
import Hamburger from '@/components/Hamburger/index'
import Breadcrumb from '@/components/Breadcrumb/index'
import RightMenu from '@/components/RightMenu/index'

export default {
    name : 'NavBar',
    components: {
        Hamburger,
        Breadcrumb,
        RightMenu
    }
}
</script>

<style scoped>
.navbar {
    display: flex;
    height:50px;
}
.hamburger {
    flex:1;
}
.breadcrumb {
    flex:15;
}
.right-menu {
    flex:1;
}
</style>