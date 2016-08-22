var config = require('./')

module.exports = {
  server: {
    baseDir: config.publicDirectory,
    routes: {
        "/major_studio_1/": config.publicDirectory
    }
  },
  files: [config.publicDirectory + '**/*.html']
}
