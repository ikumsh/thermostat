function Thermostat() {
  this.temp = 20;
  this.psm = true
};

Thermostat.prototype.up = function() {
  if(this.psm && this.temp >= 25) return 25;
  this.temp += 1;
};

Thermostat.prototype.down = function() {
  if(this.temp > 10) return this.temp -= 1;
  else return this.temp;
};
