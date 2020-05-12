const testConfig = {
  presets : [
    [
      '@babel/preset-env',
      { targets : { node : 'current' } },
    ],
  ],
}
const options = {
  "targets": {
    "node": "10.6.0"
  }
}
module.exports = function(api){
  const isTest = api.env('test')
  if (isTest) return testConfig

  return {
    presets : [ ['@babel/preset-env', options] ],
    plugins : [
      '@babel/plugin-proposal-object-rest-spread',
    ],
  }
}
