module.exports = function(grunt) {
    grunt.initConfig({
        browserSync: {
            bsFiles: {
                src: [
                    'css/*.css',
                    'js/*.js',
                    '*.html'
                ]
            },
            options: {
                server: {
                    baseDir: "./"
                }
            }
        }
    }); 
        
    grunt.loadNpmTasks('grunt-browser-sync');

    grunt.registerTask('default', ['browserSync']);
};