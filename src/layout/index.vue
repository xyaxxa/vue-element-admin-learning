<template>
    <div class="app-wrapper">
        <side-bar class="sidebar" />
        <div class="main-container">
            <nav-bar class="navbar" />
            <app-main class="app-main" />
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
        width:200px;
    }
    .main-container {
        height:100%;
        flex-grow: 1;
        display:flex;
        flex-direction:column;
    }
    .navbar {
        height:5%;
        background-color:lightyellow;
    }
    .app-main {
        flex-grow:1;
        background-color: lightpink;
    }

</style>