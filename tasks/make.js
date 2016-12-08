var path    = require('path');
var Builder = require('systemjs-builder');
var name    = 'codeblock';

console.log("Building bundle...");

var builder = new Builder();
var config = {
  baseURL: '.',
  transpiler: 'typescript',
  typescriptOptions: {
    module: 'cjs'
  },
  map: {
    typescript: './node_modules/typescript/lib/typescript.js',
    angular2: path.resolve('node_modules/@angular2'),
    rxjs: path.resolve('node_modules/rxjs'),
    prismjs: path.resolve('node_modules/prismjs'),
    'ng2-src-directive': path.resolve('node_modules/ng2-src-directive')
  },
  paths: {
    '*': '*.js'
  },
  meta: {
    'node_modules/@angular2/*': { build: false },
    'node_modules/rxjs/*': { build: false },
    'node_modules/ng2-src-directive/*': { build: false }
  }
};

builder.config(config);

builder
.bundle(name, path.resolve(__dirname, '../bundles/', name + '.js'))
.then(function() {
  console.log('Build complete.');
})
.catch(function(err) {
  console.log('Error', err);
});
