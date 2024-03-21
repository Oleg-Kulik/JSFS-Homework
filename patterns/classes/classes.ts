interface deviceOptions {
    protocol : string
    sensor1 : string
    sensor2 : string
    location : string
}

class Device implements deviceOptions {
    protocol = "mqtt"
    location = "room"
    sensor1 = "temperature"
    sensor2 = "humidity"
}

class DeviceBuilder {

    device : Device

    constructor() {
        this.device = new Device
    }

    protocolSet(protocol) {
        this.device.protocol = protocol
        return this
    }

    locatinSet(location){
        this.device.location = location
        return this
    }

    sensor1Set(sensorType){
        this.device.sensor1 = sensorType
        return this
    }

    sensor2Set(sensorType){
        this.device.sensor2 = sensorType
        return this
    }

    build(){
        return this.device
    }
}

const device1 = new Device

console.log(device1)

const device2 = new DeviceBuilder()
                        .protocolSet("modbus")
                        .locatinSet("outdor")
                        .sensor1Set("temperature")
                        .sensor2Set("light")
                        .build()

console.log(device2)         

device1.sensor1 = "light"

console.log(device1)