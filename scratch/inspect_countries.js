const React = require('react');
const PhoneInputComponent = require('react-phone-input-2');
const PhoneInput = PhoneInputComponent.default || PhoneInputComponent;

try {
  const instance = new PhoneInput(PhoneInput.defaultProps);
  const countries = instance.state.onlyCountries;
  
  if (countries) {
    const sampleCodes = ['in', 'es', 'us', 'gb', 'de', 'cn', 'ru'];
    const sample = countries.filter(c => sampleCodes.includes(c.iso2));
    sample.forEach(c => {
      console.log(`${c.name} (${c.iso2}): dialCode=${c.dialCode}, format=${c.format}`);
    });
  } else {
    console.log('onlyCountries is empty');
  }
} catch (err) {
  console.error(err);
}
