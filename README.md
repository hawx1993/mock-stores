## mock-stores

mock-stores help you to mock data easily anywhere with `webpack.providePlugin`

## Install

```bash
$ yarn add mock-stores -D
```
## Usage

firstly,create mock directory, and then create your mock data js/json file in mock directory.
Add this plugin in `webpack.config.js` file

```bash
// webpack.config.js
  plugins: [
    new webpack.ProvidePlugin({
      Store: 'mock-stores'
  })
```

write Store data in where you get your data:

```javascript
 fetch('/users.json')
   .then(function(response) {
     let item = Store['yourMockJsFileName'] || response.json()
   })  
```

just add Store object in where you get data, and in development environment you will get mock data,and in production environment ,you get online data

## LICENSE

MIT ©[hawx1993](https://github.com/hawx1993)
 
