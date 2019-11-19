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
     */
    reset(options) {
        const other = new VueRouter(options || this.options);
        this.matcher = other.matcher;
    }
}