export default class SimpleImporter {
    constructor() {}

    use(Vue, requireComponent) {
        requireComponent.keys().forEach(fileName => {
            const componentConfig = requireComponent(fileName);
            if (componentConfig.default.name || componentConfig.name) {
                Vue.component(
                    componentConfig.default.name || componentConfig.name,
                    componentConfig.default || componentConfig
                );
            }
        });
    }
}