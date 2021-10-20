var apiDescription = {
  getVesselData: 'GET /vessel/{vessel_id}'
};

var client = feign.builder()
        .client(new FeignRequest())
        .target(apiDescription, 'https://apiv2.fleetmon.com');


client.getVesselData().then(
  (response) => console.log(response))