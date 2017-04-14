module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';',
        stripBanners: true
      },
      dist: {
        src: [
          'js/transform.js',
          'js/alloy_touch.js',
          'js/alloy_touch.full_page.js',
          'js/progress_bar.js',
          'js/index.js',
          'js/snow.js',
        ],
        dest: 'dist/js/index.js'
      }
    },
    uglify: {
      options: {},
      dist: {
        files: {
          'dist/js/index.min.js': 'dist/js/index.js'
        }
      }
    },
    cssmin: {
      options: {
        keepSpecialComments: 0
      },
      compress: {
        files: {
          'dist/css/index.css': [
            'css/animate.min.css',
            'css/index.css',
          ]
        }
      }
    },
    htmlmin: {                                     // Task
      dist: {                                      // Target
        options: {                                 // Target options
          removeComments: true,
          collapseWhitespace: true
        },
        files: {                                   // Dictionary of files
          'dist/index.html': 'index.html'      // 'destination': 'source'
        }
      },
      dev: {                                       // Another target
        files: {
          'dist/index.html': 'index.html'
        }
      }
    },
    copy: {
      main: {
        files: [
          {expand: true, src: ['asset/**'], dest: 'dist/'},
        ],
      },
    }
  })

  grunt.loadNpmTasks('grunt-contrib-concat')
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-cssmin')
  grunt.loadNpmTasks('grunt-contrib-htmlmin')
  grunt.loadNpmTasks('grunt-contrib-copy')

  grunt.registerTask('default', ['concat', 'uglify', 'cssmin', 'htmlmin', 'copy'])
}
