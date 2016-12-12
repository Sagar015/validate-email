# validate-email
Simple email validator

Below are the sample supported formats.

Valid:
basha502@gmail.com
basha.shaik@gmail.com
basha123@gmail.com

Invalid:
basha..shaik@gmail.com
basha:shaik@gmail.com
basha+gmail.com
basha.basha@basha.com.com

## Install

```
$ npm install --save validateemail
```

## Usage

```Javascript
const validator= require('validateemail');
validator.validate("addressToValidate");

validator.validate("basha502@gmail.com"); // true
validator.validate("basha..@gmail.com"); // false


validator.validateAsync("basha502@gmail.com", function(isValid) {
    Logic based on isValid
});

```


## API

### validate(addressToValidate)

Returns a `boolean`.

#### addressToValidate

Type: `string`<br>

Email address to validate.

### validate(addressToValidate, callback)

Calls the callback method, with the `boolean` result.


## Contribute

Contributions to **validateemail** are most welcome, check the ``LICENSE`` file for more info.


## License

Distributed under the MIT license. See ``LICENSE`` for more information.
[bashasm](https://github.com/bashasm)
whyjsnow.com