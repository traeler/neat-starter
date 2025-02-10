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
            models: [
               {
                 name: "Page",
                 // Define the model as a page model
              type: "page",
              urlPath: "/{slug}",
              filePath: "content/pages/{slug}.json",
              fields: [{ name: "title", type: "string", required: true }]
              }
            ],
            assetsConfig: {
                referenceType: 'static',
                staticDir: 'public',
                uploadDir: 'images',
                publicPath: '/'
            }
        })
    ]
})
