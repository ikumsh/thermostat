function Thermostat() {
  this.temp = 20;
  this.psm = true
};

Thermostat.prototype.up = function() {
  if(this.psm && this.temp < 25) { this.temp += 1 };
  if(!this.psm && this.temp < 32) { this.temp += 1 };
};

Thermostat.prototype.down = function() {
  if(this.temp > 10) { this.temp -= 1 };
};

Thermostat.prototype.reset = function() {
  this.temp = 20;
};

Thermostat.prototype.psmSwitch = function() {
  this.psm = !this.psm;
  // if(this.psm && this.temp > 25) { this.temp = 25 };
};

Thermostat.prototype.usageLevel = function() {
  if(this.temp < 18) { return 'low-usage'};
  if(this.temp < 25) { return 'medium-usage'};
  if(this.temp <= 32) {return 'high-usage'};
};
