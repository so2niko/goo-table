
![Goo Table logo](/assets/logo.svg/)

# Goo Table

Welcome to the documentation for "Goo Table" This npm package provides one useful function - parse Google Table (Spreadsheet) to array of objects. Works now only with **CSV** format

## FROM

![Goo Table logo](/assets/table.png/)

## TO

![Goo Table logo](/assets/array.png/)

## Installation

You can install this package via npm:

```sh

npm  install  goo-table

```

## Usage

To use this package, follow these simple steps:

1. Import the package into your JavaScript code:

```javascript

const gooTable = require('goo-table');

```

2. Now you can use the package's function in your code:

```javascript

const url = 'YOUR SHARED GOOGLE TABLE URL'

gooTable(url).then(console.log);

```

3. These are currently all the available features and options in the official documentation.

## How get URL

![Alt text](google_table_url.gif)

## Contact

If you have any questions or need assistance, please feel free to contact me at:
- [email](so2niko+gootable@gmail.com)
- [github issue](https://github.com/so2niko/goo-table/issues)

Happy coding!