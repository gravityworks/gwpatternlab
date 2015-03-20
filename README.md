# gwpatternlab
Slight modifications to the node version of patternlab https://github.com/pattern-lab/patternlab-node to kickstart living styleguides for https://github.com/gravityworks. gwpatternlab is currently set to work with patternlab-node 0.8.1 but can/should be updated with minimal effort to use the latest version of patternlab.

## Install Instructions
1. <strong>Clone the node version of patternlab</strong> https://github.com/pattern-lab/patternlab-node
2. <strong>Add the gulpfile </strong>included with this project.
3. <strong>Update the package.json</strong> to include our gulp modules. The changes we've made to this file just include removing the Grunt modules we aren't using and replacing them with our gulp equivalents.
4. <strong>Add patternlab_gulp.js to /builder.</strong> This is the gulp equivalent of patternlab_grunt.js. It loads in patternlabs custom node modules as gulp tasks.
5. <strong>Configure your gulp tasks and directories</strong> if necessary. For example, you'll want to go into /source/css and replace the sass directory with your own sass build.

## Gulp Tasks
```
gulp
```
Builds patternlab, copies the relevant files, serves patternlab locally, starts a livereload server, runs watch

```
gulp serve
```
Serve the patternlab locally.

## TODO:
1. Configure livereload properly. Currently it only notifies livereload on html/css changes.
2. Setup imaging tasks (svg, sprites, minification, etc)
3. Setup JS concat/uglify tasks.
4. Pipe assets from /source to /build properly. Currently only our CSS is piping there.

### Things to take note of:
1. Try to keep all of your source files (css, svg, js, etc) in /source. Output your build versions to /public.
2. Don't edit the files in /public/styleguide. Instead, edit the build files inside of /source.
