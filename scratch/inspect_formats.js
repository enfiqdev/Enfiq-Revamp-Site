const React = require('react');
const PhoneInputComponent = require('react-phone-input-2');
const PhoneInput = PhoneInputComponent.default || PhoneInputComponent;

try {
  const instance = new PhoneInput(PhoneInput.defaultProps);
  instance.componentDidMount();
  const countries = instance.state.countries;
  
  if (!countries) {
    console.log('Countries is still undefined. State keys:', Object.keys(instance.state || {}));
  } else {
    const sample = countries.filter(c => ['in', 'es', 'us', 'gb', 'de', 'cn', 'ru'].includes(c.iso2));
    sample.forEach(c => {
      console.log(`${c.name} (${c.iso2}): dialCode=${c.dialCode}, format=${c.format}`);
    });
  }
} catch (err) {
  console.error(err);
}
