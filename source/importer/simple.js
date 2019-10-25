export default class SimpleImporter {
    constructor() {}

    use(Vue, requireComponent) {
        requireComponent.keys().forEach(fileName => {
            const componentConfig = requireComponent(fileName);
            if (!componentConfig.default.name && !componentConfig.name) {
                throw Error('Component has no name.');
            }
            Vue.component(
                componentConfig.default.name || componentConfig.name,
                componentConfig.default || componentConfig
            );
        });
    }
}