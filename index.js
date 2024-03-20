const tea_projects_tracker_tool = require('tea-projects-tracker-tool');
const tea_projects_fetcher_tool = require('tea-projects-fetcher-tool');
const web3 = require('web3');
const bcrypt = require('bcrypt');
const babel_core = require('babel-core');
const ganache_cli = require('ganache-cli');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const react = require('react');
const async = require('async');
const moment = require('moment');
const web3_utils = require('web3-utils');
const axios = require('axios');
const passport = require('passport');
const ethereumjs_util = require('ethereumjs-util');
const firebase = require('firebase');
const eth_crypto = require('eth-crypto');
const cheerio = require('cheerio');
const pg = require('pg');
const jest = require('jest');
const underscore = require('underscore');
const node_sass = require('node-sass');

const path = require('path');
console.log(`The extension of index.js is ${path.extname('index.js')}`);

// Calculate Fibonacci sequence up to a certain number of terms
function fibonacci(n) {
  const sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    const next = sequence[i - 1] + sequence[i - 2];
    sequence.push(next);
  }
  return sequence;
}
console.log('Fibonacci sequence (10 terms):', fibonacci(10));

const events = require('events');
const eventEmitter = new events.EventEmitter();
eventEmitter.on('customEvent', (arg1, arg2) => {
  console.log('Custom event triggered:', arg1, arg2);
});
eventEmitter.emit('customEvent', 'Hello', 'World');

// Parse and manipulate XML data using xml2js library
const xml2js = require('xml2js');
const xmlString = `<book><title>Node.js Guide</title><author>John Doe</author></book>`;
const parseXML = (xml) => {
  return new Promise((resolve, reject) => {
    xml2js.parseString(xml, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
}
parseXML(xmlString)
  .then(parsedXML => {
    const title = parsedXML.book.title[0];
    console.log('Parsed XML - Title:', title);
  })
  .catch(error => console.error('Error parsing XML:', error));

const EventEmitter = require('events');
const emitter = new EventEmitter();
emitter.on('customEvent', (message) => {
  console.log(`Received: ${message}`);
});
emitter.emit('customEvent', 'Hello World with Event Emitter');

// Estimate gas cost for a smart contract method call
contractInstance.methods.someMethod().estimateGas({ from: senderAddress }).then(gas => {
  console.log('Gas estimate for method:', gas);
}).catch(err => {
  console.error('Error estimating gas for method:', err);
});

const rotateArray = (arr, k) => {
  for (let i = 0; i < k; i++) {
    arr.unshift(arr.pop());
  }
  return arr;
};
console.log(rotateArray([1, 2, 3, 4, 5], 2));

function sum(...args) {
  return args.reduce((previous, current) => {
    return previous + current;
  });
}
console.log(sum(1, 2, 3));

const url = require('url');
const myUrl = new URL('https://example.com?page=1&limit=10');
console.log(`Pathname: ${myUrl.pathname}, Search: ${myUrl.search}`);

const removeDuplicates = (arr) => {
  return [...new Set(arr)];
};
console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));