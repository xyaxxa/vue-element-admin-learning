<template>
    <div>
        <div>WEICOME,{{name}}</div>
        <div>{{avatar}}</div>
        <div>you are {{token}}</div>
    </div>
</template>

<script>
    import { getTokenCookie } from '@/utils/cookies'
    export default {
        name: 'DashBoard',
        computed: {
            name() {
                return this.$store.getters.name
            },
            avatar() {
                return this.$store.getters.avatar
            },
            token() {
                return getTokenCookie();
            }
        }
    }
</script>