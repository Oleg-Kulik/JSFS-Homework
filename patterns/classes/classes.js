var Device = /** @class */ (function () {
    function Device() {
        this.protocol = "mqtt";
        this.location = "room";
        this.sensor1 = "temperature";
        this.sensor2 = "humidity";
    }
    return Device;
}());
var DeviceBuilder = /** @class */ (function () {
    function DeviceBuilder() {
        this.device = new Device;
    }
    DeviceBuilder.prototype.protocolSet = function (protocol) {
        this.device.protocol = protocol;
        return this;
    };
    DeviceBuilder.prototype.locatinSet = function (location) {
        this.device.location = location;
        return this;
    };
    DeviceBuilder.prototype.sensor1Set = function (sensorType) {
        this.device.sensor1 = sensorType;
        return this;
    };
    DeviceBuilder.prototype.sensor2Set = function (sensorType) {
        this.device.sensor2 = sensorType;
        return this;
    };
    DeviceBuilder.prototype.build = function () {
        return this.device;
    };
    return DeviceBuilder;
}());
var device1 = new Device;
console.log(device1);
var device2 = new DeviceBuilder()
    .protocolSet("modbus")
    .locatinSet("outdor")
    .sensor1Set("temperature")
    .sensor2Set("light")
    .build();
console.log(device2);
//# sourceMappingURL=classes.js.map