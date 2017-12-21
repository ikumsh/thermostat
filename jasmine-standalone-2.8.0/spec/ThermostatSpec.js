describe('Thermostat', function() {
  var mrThermo;
  beforeEach(function() {
    mrThermo = new Thermostat;
  });

  describe('defaults and temperature limits', function() {
    it('starts at a default temperature of 20 degrees', function() {
      expect(mrThermo.temp).toEqual(20);
    });

    it('has a minimum temperature of 10', function() {
      mrThermo.temp = 10
      mrThermo.down()
      expect(mrThermo.temp).toEqual(10);
    });
  });
  describe('changing temperature', function() {
    it('temperature can be raised', function() {
      mrThermo.up()
      expect(mrThermo.temp).toEqual(21);
    });

    it('temperature can be lowered', function() {
      mrThermo.down()
      expect(mrThermo.temp).toEqual(19);
    });
  });

  describe('power saving green mode', function() {
    it('Power Saver is on by default', function() {
      expect(mrThermo.psm).toEqual(true);
    });

    it('has a maximum temp of 25 degrees with Power Saver on', function() {
      mrThermo.temp = 25
      mrThermo.up()
      expect(mrThermo.temp).toEqual(25);
    });
  });
});
