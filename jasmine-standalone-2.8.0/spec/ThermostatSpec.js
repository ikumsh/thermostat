describe('Thermostat', function() {
  var mrThermo;
  beforeEach(function() {
    mrThermo = new Thermostat;
  });

  it('starts at a default temperature of 20 degrees', function() {
    expect(mrThermo.temp).toEqual(20);
  });
  it('temperature can be raised', function() {
    mrThermo.up(2)
    expect(mrThermo.temp).toEqual(22);
  });
  it('temperature can be lowered', function() {
    mrThermo.down(2)
    expect(mrThermo.temp).toEqual(18);
  });
});
