module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-copy');
    require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks
    grunt.initConfig({
        sass: {
            dist: {
                files: {
                    'dist/illiniboard.css' : 'assets/foundation.scss'
                }
            }
        },
        copy: {
            default_development_deploy: {
                files: [
                    {
                        
                        src: ['dist/illiniboard.css'], 
                        dest: '../illiniboard-frontend/static/css/illiniboard.css', 
                        filter: 'isFile'}
                ]
            }
        }
    });

    grunt.registerTask('default', ['sass']);
    grunt.registerTask('dev_deploy', ['copy:default_development_deploy']);
}