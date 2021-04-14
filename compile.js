const path = require('path')
const fs = require('fs')
const solc = require('solc')

module.exports = {
  compile(fileName) {
    const contractPath = path.resolve(__dirname, 'contracts', `${fileName}.sol`)
    const source = fs.readFileSync(contractPath, 'utf-8')

    var input = {
      language: 'Solidity',
      sources: {
        [`${fileName}.sol`]: {
          content: source,
        },
      },
      settings: {
        outputSelection: {
          '*': {
            '*': ['*'],
          },
        },
        optimizer: {
          enabled: true,
          runs: 200,
        },
      },
    }
    const data = JSON.parse(solc.compile(JSON.stringify(input)))
    return data.contracts[`${fileName}.sol`][fileName]
  },
}
