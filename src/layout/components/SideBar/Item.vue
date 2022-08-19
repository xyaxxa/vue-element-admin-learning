<!-- 这里是一个函数式组件，具体请查看vue的官方文档里面的渲染函数&JSX章节 -->
<script>
export default {
    name : 'MenuItem',
    functional: true,
    props: {
        icon: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        }
    },
    render(h, context) {
        const {icon, title} = context.props;
        const vnodes = [];
        if(icon) {
            // includes是ES6里新增的字符串方法，查找是否有目标子串
            if(icon.includes('el-icon')){
                vnodes.push(<i class={[icon, 'sub-el-icon']} />)
            }else {
                vnodes.push(<svg-icon icon-class={icon} />)
            }
        }
        if(title) {
            vnodes.push(<span slot='title'>{(title)}</span>)
        }
        return vnodes;
    }
}
</script>