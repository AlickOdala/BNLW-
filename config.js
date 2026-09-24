SystemJS.config({
  baseURL: 'https://unpkg.com/',
  defaultExtension: true,
  meta: {
    '*.jsx': {
      babelOptions: { react: true }
    }
  },
  map: {
    'plugin-babel': 'systemjs-plugin-babel@latest/plugin-babel.js',
    'systemjs-babel-build': 'systemjs-plugin-babel@latest/systemjs-babel-browser.js',
    'css': 'https://unpkg.com/systemjs-plugin-css@0.1.37/css.js',
    'react': 'react@16.14.0/umd/react.development.js',
    'react-dom': 'react-dom@16.14.0/umd/react-dom.development.js',
    '@material-ui/core': '@material-ui/core@3.9.3/umd/material-ui.development.js',
  },
  packages: {
    '/': { defaultExtension: false },
    'src': { 
      defaultExtension: 'jsx',
      meta: {
        '*.jsx': { babelOptions: { presets: ['react'] } },
        '*.css': { loader: 'css' } // <-- add this
      }
    }
  }, 
  transpiler: 'plugin-babel'
});

SystemJS.import('./src/main.jsx');

/*
System.config({
  transpiler: 'plugin-babel',
  map: {
    'plugin-babel': 'https://unpkg.com/systemjs-plugin-babel@latest/plugin-babel.js',
    'systemjs-babel-build': 'https://unpkg.com/systemjs-plugin-babel@latest/systemjs-babel-browser.js',
    'css': 'https://unpkg.com/systemjs-plugin-css@0.1.37/css.js',
    'react': '@empty',
    'react-dom': '@empty',
    'react-router-dom': '@empty'
  },
  packages: {
    '/': { defaultExtension: false },
    'src': { 
      defaultExtension: 'jsx',
      meta: {
        '*.jsx': { babelOptions: { presets: ['react'] } },
        '*.css': { loader: 'css' } // <-- add this
      }
    }
  }
});
*/