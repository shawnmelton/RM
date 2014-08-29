module.exports = (function(grunt) {
    'use strict';

    grunt.initConfig({
        jst: {
            compile: {
                files: {
                    'src/js/templates/jst.js': ['src/js/templates/*.html', 'src/js/templates/**/*.html']
                }
            }
        },
        jshint: {
            all: ['Gruntfile.js', 'src/js/views/*.js', 'src/js/controllers/*.js']
        },
        requirejs: {
            compile: {
                options: {
                    optimize: 'none',
                    preserveLicenseComments: false,
                    findNestedDependencies: true,
                    baseUrl: 'src/js/',
                    mainConfigFile: 'src/js/bootstrap.js',
                    name: 'desktop',
                    include: ['bootstrap'],
                    out: 'dist/js/desktop.js'
                }
            }
        },
        sass: {
            dist: {
                files: {
                    'dist/css/styles.css': 'src/css/styles.scss',
                    'dist/css/book.css': 'src/css/book.scss'
                },
                options: {
                    style: 'compressed'
                }
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
        clean: ['tmp', 'dist/img', 'dist/js', 'dist/css', 'dist/index.html'],
        watch: {
            css: {
                files: ['src/css/*.scss'],
                tasks: ['sass'],
                options: {
                    livereload: true
                }
            },
            js: {
                files: ['src/js/**/*.js'],
                tasks: ['jshint', 'requirejs'],
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
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-jst');
    grunt.loadNpmTasks('grunt-contrib-requirejs');

    grunt.registerTask('default', [
        'jst', 'jshint', 'requirejs', 'sass', 'htmlmin', 'watch'
    ]);

    grunt.registerTask('cleanup', ['clean']);
});