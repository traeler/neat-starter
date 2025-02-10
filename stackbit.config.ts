import { defineStackbitConfig } from '@stackbit/types';

export default defineStackbitConfig({
    "stackbitVersion": "~0.6.0",
    "nodeVersion": "18",
    "ssgName": "eleventy",
    "postInstallCommand": "npm i --no-save @stackbit/types",
    contentSources: [
        new GitContentSource({
            rootPath: __dirname,
            contentDirs: ['src'],
            models: [Page],
            assetsConfig: {
                referenceType: 'static',
                staticDir: 'public',
                uploadDir: 'images',
                publicPath: '/'
            }
        })
    ],
    modelExtensions: [
        { name: 'Page', type: 'page', urlPath: '/{slug}' }
    ]
})
