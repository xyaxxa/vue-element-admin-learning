<template>
    <div class="main">
        <side-bar class="sidebar" />
        <div>
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
    .main {
        height:100%;
        display:flex;
        flex-flow:column,wrap;
    }
    .sidebar {
        height:100%;
        width:20%;
        background-color:blue;
    }
    .navbar {
        height:20%;
        width:80%;
        background-color:yellow;
    }
    .appmain {
        flex:1;
        background-color: red;
    }

</style>