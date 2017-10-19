## Introuced

[![GitHub issues](https://img.shields.io/github/issues/hawx1993/mock-stores.svg)](https://github.com/hawx1993/mock-stores/issues)[![GitHub forks](https://img.shields.io/github/forks/hawx1993/mock-stores.svg)](https://github.com/hawx1993/mock-stores/network)[![GitHub stars](https://img.shields.io/github/stars/hawx1993/mock-stores.svg)](https://github.com/hawx1993/mock-stores/stargazers)[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/hawx1993/mock-stores/master/LICENSE)

`Mock-Stores` help you to mock data easily at anywhere with `webpack.providePlugin`

## Install

```bash
$ yarn add mock-stores -D
```
## Usage

firstly,create `mock` directory in your root directory, and then create your js/json file.
Add this plugin in `webpack.config.js` file

```bash
// webpack.config.js
  plugins: [
    new webpack.ProvidePlugin({
      Store: 'mock-stores'
  })
```

just add Store object in where you get data, and in development environment you will get mock data,and in production environment ,you get online data.You don't have to do anything, enjoy it！

```javascript
 fetch('/users.json')
   .then(function(response) {
     let item = Store['yourMockJsFileName'] || response.json()
   })  
```


## LICENSE

MIT ©[hawx1993](https://github.com/hawx1993)
 
