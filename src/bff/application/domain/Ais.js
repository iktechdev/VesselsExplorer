class Ais {
    constructor(
        mmsi, timestamp, latitude, longitude, course, speed, heading, navstat, imo, name, callsign, type, a, b, c, d, draught, destination, eta_ais, eta, src, zone, eca
    ) {
      this.mmsi = mmsi,
      this.timestamp = timestamp,
      this.latitude = latitude, 
      this.longitude = longitude,
      this.course = course, 
      this.speed = speed,
      this.heading = heading,
      this.navstat = navstat,
      this.imo = imo,
      this.name = name,
      this.callsign = callsign,
      this.type = type,
      this.a = a, 
      this.b = b, 
      this.c = c, 
      this.d = d, 
      this.draught = draught, 
      this.destination = destination, 
      this.eta_ais = eta_ais, 
      this.eta = eta, 
      this.src = src, 
      this.zone = zone, 
      this.eca = eca
    }
  }