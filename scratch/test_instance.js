const React = require('react');
const PhoneInputComponent = require('react-phone-input-2');
const PhoneInput = PhoneInputComponent.default || PhoneInputComponent;

try {
  let captured = null;
  // pass defaultProps to avoid constructor error
  const instance = new PhoneInput({
    ...PhoneInput.defaultProps,
    country: 'in',
    value: '912328598029',
    onChange: (val, country) => {
      captured = country;
    }
  });

  console.log('Instance state:', instance.state);
  
  // Let's see if we can find the country list inside the instance or class
  // Let's print instance keys to see if there is a countries array or similar
  console.log('Instance keys:', Object.keys(instance));
  
} catch (err) {
  console.error('Error:', err);
}
