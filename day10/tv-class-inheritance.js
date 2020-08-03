class TV_class {
  constructor(brand, channel = 1, price, inches, status, volume = 50) {
    this.brand = brand;
    this.channel = channel;
    this.price = price;
    this.inches = inches;
    this.status = status;
    this.volume = volume;
  }
  get updateVolume() {
    return this.volume;
  }
  set updateVolume(val) {
    if (val >= 0 && val <= 100) {
      this.volume = val;
    }
  }
  get channelUpdate() {
    return this.channel;
  }
  set channelUpdate(chan) {
    if (chan <= 50) {
      this.channel = chan;
    } else {
      return this.channel;
    }
  }
}

class LED extends TV_class {
  constructor(
    brand,
    channel = 1,
    price,
    inches,
    status,
    volume = 50,
    thickness,
    energy,
    lifespan,
    refreshRate
  ) {
    super(brand, (channel = 1), price, inches, status, (volume = 50));
    this.thickness = thickness;
    this.energy = energy;
    this.lifespan = lifespan;
    this.refreshRate = refreshRate;
  }
}

let tv = new TV_class("Panasonic", 8, 55000, 55, "ON", 30);

TV_class.updateVolume = 20; //this will change the value of the volume
TV_class.channelUpdate = 20; // this will update the channel

console.log(`${tv.brand} at channel ${tv.channel}, volume ${tv.volume}`);
console.log(LED);
