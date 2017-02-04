module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks
    grunt.initConfig({
        sass: {
            options: {
                loadPath: ['node_modules/motion-ui/src']
            },
            dist: {
                files: {
                    'dist/illiniboard.css' : 'assets/foundation.scss'
                }
            }
        },
        cssmin: {
            minify_css: {
                src: 'dist/illiniboard.css',
                dest: 'dist/illiniboard.min.css'
            }
        },
        copy: {
            default_development_deploy_css: {
                files: [
                    {
                        src: ['dist/illiniboard.css'], 
                        dest: '../illiniboard-frontend/static/css/illiniboard.css', 
                        filter: 'isFile'
                    },
                    {
                        src: ['dist/illiniboard.min.css'],
                        dest: '../illiniboard-frontend/static/css/illiniboard.min.css',
                        filter: 'isFile'
                    }
                ]
            },
            default_development_deploy_js: {
                files: [
                    {
                        src: ['dist/foundation.min.js'],
                        dest: '../illiniboard-frontend/static/js/foundation.min.js',
                        filter: 'isFile'
                    },
                    {
                        src: ['dist/plugins/foundation.reveal.js'],
                        dest: '../illiniboard-frontend/static/js/foundation.reveal.js',
                        filter: 'isFile'
                    }
                ]
            },
            deploy_logos: {
                files: [
                    {
                        src: ['logo_images/ib_icon.png', 'logo_images/ib_logo.png'],
                        dest: '../illiniboard-frontend/static/images/',
                        filter: 'isFile'
                    }
                ]
            } 
        }
    });

    grunt.registerTask('default', ['sass']);
    grunt.registerTask('dev_deploy', ['sass', 'cssmin:minify_css', 'copy:default_development_deploy_css', 'copy:default_development_deploy_js', 'copy:deploy_logos']);
}