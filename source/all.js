import SimpleImporter from './importer/simple';

export {
    SimpleImporter
}

export default {
    install(Vue) {
        const importer = new SimpleImporter();
        importer.use(Vue, require.context(
            './component',
            false,
            /\w+\.vue$/,
        ));
    },
};