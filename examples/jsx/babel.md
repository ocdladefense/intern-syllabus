


## Compile scripts
npx babel examples/jsx/sample.js --out-file examples/jsx/script-compiled.js --source-maps
npx babel examples/mock-data/index.js --out-file examples/mock-data/compiled.js --source-maps

## Recommended plugins
<code>npm install --save-dev babel-plugin-inline-json-import</code>