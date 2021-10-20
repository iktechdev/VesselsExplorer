var feign = require('feignjs')
var FeignRequest = require('feignjs-request');

export const getVessels = () =>{
  var restDescription = {
    getUVessels: 'GET /vessel/position/',
  
  };

  var client = feign.builder()
          .client(new FeignRequest({debug: false}))
          .requestInterceptor({apply:function(req){
            console.log(req.options.method, req.options.uri, "body:", req.parameters);
          }})
          .target(restDescription, 'http://localhost:8080');

  return client.getUVessels()
  .then(function(r){
    console.log(r);
    return r;
  })
  .catch(console.error)
}
