class VesselsReponse{
    constructor(
        ais_type_of_ship, ais_type_of_ship_str, attributes, callsign, cn_iso2, cn_name, datasheet, mmsi_number, name, ext_port, position, request_limit_info, statistics, type, type_class, type_code, vessel_id, voyage
    ){
        this.ais_type_of_ship = ais_type_of_ship,
        this.ais_type_of_ship_str = ais_type_of_ship_str,
        this.attributes = attributes,
        this.callsign = callsign
        this.cn_iso2 = cn_iso2
        this.cn_name = cn_name
        this.datasheet = datasheet
        this.mmsi_number = mmsi_number
        this.name = name
        this.ext_port = ext_port
        this.position = position
        this.request_limit_info = request_limit_info
        this.statistics = statistics
        this.type = type
        this.type_class = type_class
        this.type_code = type_code
        this.vessel_id = vessel_id
        this.voyage = voyage
    }
    
  }