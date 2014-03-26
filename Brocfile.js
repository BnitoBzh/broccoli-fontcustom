module.exports = function (broccoli) {
  var fontCustom = require('broccoli-fontcustom');
  var fontIcons = broccoli.makeTree('test/icons');
  fontIcons = fontCustom(fontIcons, {
    output: 'fonts',
    'font-name': 'Icons',
    'no-hash': null
  });
  return [fontIcons]
};
