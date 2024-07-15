// https://github.com/entwicklerstube/babel-plugin-root-import/issues/136
[
      'babel-plugin-root-import',
      {
        rootPathPrefix: '~',
        rootPathSuffix: './src',
      },
    ],
    [
      'babel-plugin-transform-imports',
      {
        '~/components': {
          preventFullImport: true,
          transform: '~/components/${member}',
        },
        '@material-ui/core': {
          preventFullImport: true,
          transform: '@material-ui/core/${member}',
        },
        lodash: {
          preventFullImport: true,
          transform: 'lodash/${member}',
        },
    ],