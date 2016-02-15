module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks
    grunt.initConfig({
        sass: {
            dist: {
                files: {
                    'dist/illiniboard.css' : 'assets/foundation.scss'
                }
            }
        }
    });

    grunt.registerTask('default', ['sass']);   
}