// 判断当前路径是否是外部链接路径，直接抄的
export function isExternal(path) {
    return /^(https?:|mailto:|tel:)/.test(path)
}