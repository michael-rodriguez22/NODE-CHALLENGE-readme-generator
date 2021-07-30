const year = new Date().getFullYear();

const licenses = [
  {
    name: "No License",
    description: {
      short: "exclusive copyright",
      long: "Nobody else can copy, distribute, or modify this work without risk of take-downs, shake-downs, or litigation.",
    },
  },
  {
    name: "MIT",
    description: {
      short: "open source",
      long: `MIT License

Copyright (c) [${year}]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`,
    },
    badge:
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    link: "https://opensource.org/licenses/MIT",
  },
  {
    name: "CC0",
    description: {
      short: "public domain dedication",
      long: `This project has been to the public domain by waiving all of my rights to the project worldwide under copyright law, including all related and neighboring rights, to the extent allowed by law. You may copy, modify, and distribute, even for commercial purposes, all without asking permission.`,
    },
    badge: "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)",
    link: "http://creativecommons.org/publicdomain/zero/1.0/",
  },
];

module.exports = licenses;
