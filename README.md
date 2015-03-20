# gwpatternlab
Slight modifications to the node version of patternlab https://github.com/pattern-lab/patternlab-node to kickstart living styleguides for https://github.com/gravityworks

## Install Instructions
1. <strong>Clone the node version of patternlab</strong> https://github.com/pattern-lab/patternlab-node
2. <strong>Add the gulpfile </strong>included with this project.
3. <strong>Update the package.json</strong> to include our gulp modules. The changes we've made to this file just include removing the Grunt modules we aren't using and replacing them with our gulp equivalents.
4. <strong>Add patternlab_gulp.js to /builder.</strong> This is the gulp equivalent of patternlab_grunt.js. It loads in patternlabs custom node modules as gulp tasks.
5. <strong>Configure your gulp tasks and directories</strong> if necessary. For example, you'll want to go into /source/css and replace the sass directory with your own sass build.

## Gulp Tasks
```
gulp serve
```
Serve the patternlab locally.

```
gulp
```
Builds patternlab, copies the relevant files, serves patternlab locally, starts a livereload server, runs watch


## Things to take note of:
1. Try to keep all of your source files (css, svg, js, etc) in /source. Output your build versions to /public.
2. Don't edit the files in /public/styleguide. Instead, edit the build files inside of /source.
