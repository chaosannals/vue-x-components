import VueRouter from 'vue-router';

/**
 * 扩展路由。
 * 
 */
export default class XRouter extends VueRouter {
    constructor(options) {
        super(options);
        this.options = options;
    }

    /**
     * 重置路由。
     * 
     */
    reset(options) {
        const other = new VueRouter(options || this.options);
        this.matcher = other.matcher;
    }

    /**
     * 捕获同个路由导致的异常。
     * 
     * @param {*} location 
     * @param {*} resolve 
     * @param {*} reject 
     */
    push(location, resolve, reject) {
        let result = super.push(location, resolve, reject);
        if (result) {
            return result.catch(e => {
                if (e.name != 'NavigationDuplicated') {
                    Promise.reject(e);
                }
            });
        }
    }
}