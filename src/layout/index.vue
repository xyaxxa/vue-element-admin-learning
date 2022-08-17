<template>
    <div class="app-wrapper">
        <side-bar class="sidebar" />
        <div class="main-container">
            <nav-bar class="navbar" />
            <app-main class="appmain" />
        </div>
    </div>
</template>

<script>
import {SideBar, NavBar, AppMain} from './components'

export default {
    name: 'Layout',
    components: {
        SideBar,
        NavBar,
        AppMain
    },
}
</script>

<style scoped>
    .app-wrapper {
        height:100%;
        width:100%;
        display:flex;
    }
    .sidebar {
        height:100%;
        width:15%;
        background-color:lightblue;
    }
    .main-container {
        height:100%;
        flex-grow: 1;
        display:flex;
        flex-direction:column;
    }
    .navbar {
        height:10%;
        background-color:lightyellow;
    }
    .appmain {
        flex-grow:1;
        background-color: lightpink;
    }

</style>