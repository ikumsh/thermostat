describe('Thermostat', function() {
  var mrThermo;
  beforeEach(function() {
    mrThermo = new Thermostat;
  });

  it('starts at a default temperature of 20 degrees', function() {
    expect(mrThermo.temp).toEqual(20);
  });
});
