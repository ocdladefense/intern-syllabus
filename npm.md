
# Using NPM to publish packages to OCDLA's NPM Organization
We've done an initial refactor on your Timer, Calculator and Course Info.  Now we have to break down your repositories into application code and library code.  As we distinguish library code from application code, we move library code files into separate folders in our workspace (for example, under the <code>./dev_modules</code> directory).  Then we use local link paths in Node (via the package.json file) and NPM to link these libraries to our application code.

The example, below, is for a package in <code>./dev_modules/@ocdla/txtfile</code> that will be imported into your project using JavaScript <code>import</code> statements. We will create separate folders under the @ocdla namespace in <code>./dev_modules</code> to house each identified library/package.  In turn, each subfolder/package in this namespace will be a separate repsitory with its own branches, versions and tags.  As we make progress on these libraries we release (at first, minor) versions to OCDLA's NPM Organization; eventually, we push the library code as a separate repository from the main application code and push changes to the appropriate feature branches in GitHub, merge into development, test/QA our code and finally tag release branches.

## Follow these steps to create a development library
1. Create a <code>dev_modules/@ocdla</code> folder.
2. Create an appropriately-named folder in <code>@ocdla</code>.
3. Create a minimal <code>package.json</code> (see the example, below).
4. Move any relevant JavaScript functions or class files into your new folder.
5. In your base repository, use [local development paths as dependencies](https://docs.npmjs.com/cli/v10/configuring-npm/package-json#local-paths).
6. Run <code>npm update</code> to link the development code as a NPM package.
7. Troubleshoot.
8. Login to NPM and publish the minor-version library package to OCDLA's NPM Organization.


## <code>Package.json</code> file for an example library package
Use the <code>name</code> key of the repository's <code>package.json</code> file to scope the package to an NPM Organization:
```json
{
  "name": "@ocdla/txtfile",
  "version": "0.1.0",
  "description": "Create text files; add content and headings to text files.",
  "type": "module",
  "browser": "index.js",
  "scripts": {
    "build": "babel src -d dist"
  },
  "author": "José Bernal",
  "license": "ISC",
  "dependencies": {
    "@ocdla/view": "~2.3.0"
  },
  "devDependencies": {
    "jsdoc": "^3.6.10"
  }
}
```

## Babel.config.json
```json
{
    "presets": [
        "@babel/preset-react"
    ]
}
```

## Publish the package to OCDLA's NPM Organization
```bash
npm publish --access public
```