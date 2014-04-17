module.exports = (function(grunt) {
    'use strict';

    grunt.initConfig({
        /*jst: {
            compile: {
                files: {
                    'src/js/templates/jst.js': 'src/js/templates/*.html'
                }
            }
        },
        jshint: {
            all: ['Gruntfile.js', 'src/js/*.js', 'src/js/views/*.js']
        },
        requirejs: {
            compile: {
                options: {
                    optimize: 'uglify',
                    preserveLicenseComments: false,
                    findNestedDependencies: true,
                    baseUrl: 'src/js/',
                    mainConfigFile: 'src/js/bootstrap.js',
                    name: 'app',
                    include: ['bootstrap'],
                    out: 'tmp/js/app.js'
                }
            }
        },
        uglify: {
            options: {
                mangle: true,
                compress: true,
                report: 'min'
            },
            my_target: {
                files: {
                    'dist/js/app.js': ['src/js/libs/require.js', 'tmp/js/app.js']
                }
            }
        },*/
        sass: {
            dist: {
                files: {
                    'dist/css/styles.css': 'src/css/styles.scss'
                },
                options: {
                    style: 'compressed'
                }
            }
        },
        imagemin: {
            options: {
                optimizationLevel: 3
            },
            sitesImages: {
                files: [{
                    expand: true,
                    cwd: 'src/img/',
                    src: ['*.png', '*.jpg', '*.gif', '*/*.jpg'],
                    dest: 'dist/img/'
                }]
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: { 
                    'dist/index.html': 'src/index.html'
                }
            }
        },
        clean: ['tmp', 'dist/img', 'dist/css', 'dist/index.html'],
        watch: {
            css: {
                files: ['src/css/*.scss'],
                tasks: ['sass'],
                options: {
                    livereload: true
                }
            },
            html: {
                files: ['src/index.html'],
                tasks: ['htmlmin'],
                options: {
                    livereload: true
                }
            }
        }
    });

    grunt.event.on('watch', function(action, filepath) {
        grunt.log.writeln(filepath +' has '+ action);
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    /*grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-jst');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-uglify');*/

    grunt.registerTask('default', [
        /*'jst', 'jshint', 'requirejs', 'uglify',*/ 'sass', 'htmlmin', /*'imagemin',*/ 'watch'
    ]);

    grunt.registerTask('cleanup', ['clean']);
});