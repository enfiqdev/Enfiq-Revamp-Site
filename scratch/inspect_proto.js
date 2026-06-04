const React = require('react');
const PhoneInputComponent = require('react-phone-input-2');
const PhoneInput = PhoneInputComponent.default || PhoneInputComponent;

try {
  // Let's inspect the prototype
  console.log('PhoneInput prototype:', Object.getOwnPropertyNames(PhoneInput.prototype || {}));
} catch (err) {
  console.error(err);
}
