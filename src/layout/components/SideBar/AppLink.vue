<template>
  <!-- component组件就是根据情况判定到底是什么标签 -->
  <component :is="type" v-bind="linkProps(to)">
    <slot></slot>
  </component>
</template>

<script>
import {isExternal} from '@/utils/validate'
export default {
    name: 'AppLink',
    props: {
        to: {
            type: String,
            required: true
        }
    },
    computed: {
        isExternal() {
            return isExternal(this.to)
        },
        type() {
            if(this.isExternal) {
                return 'a'
            }else {
                return 'router-link'
            }
        }
    },
    methods: {
        linkProps(to) {
            if(this.isExternal) {
                return {
                    href: to,
                    target: '_blank'
                }
            }else {
                return {
                    to: to
                }
            }
        }
    }
}
</script>

<style>

</style>