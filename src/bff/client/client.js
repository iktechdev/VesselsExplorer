var feign = require('feignjs')
var FeignRequest = require('feignjs-request');

export const client = () => {
    var apiDescription = {
        getValues: 'GET /vessel/position'
      };
      
      var client = feign.builder()
          .client(new FeignRequest())
          .target(apiDescription, 'http://localhost:8080');
    
          return client.getValues()
          .then(function(r){
            return r;
          })
          .catch(console.error)
}