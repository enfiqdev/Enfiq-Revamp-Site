const rpi = require('react-phone-input-2');
const PhoneInput = rpi.default || rpi;
console.log('defaultProps:', Object.keys(PhoneInput.defaultProps || {}));
