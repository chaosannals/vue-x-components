import SimpleImporter from './importer/simple';
import XRouter from './router';

export {
    SimpleImporter,
    XRouter,
}

export default {
    install(Vue, options) {
        const importer = new SimpleImporter();
        importer.use(Vue, require.context(
            './component',
            false,
            /\w+\.vue$/,
        ));
        if (options) {
            importer.use(Vue, options);
        }
    },
};