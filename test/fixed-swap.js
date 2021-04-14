const {expect} = require('chai')
const test_tradeValue = '29000000000000'
const test_tokensForSale = '2500000000000000000000000'
const test_startDate = '1622505600' // 6/6/2021
const test_endDate = '1667260800' // 11/11/2022
const test_individualMinimumAmount = '0'
const test_individualMaximumAmount = '7990000000000000000000'
const test_isTokenSwapAtomic = false
const test_minimumRaise = '1224000000000000000000000'
const test_feeAmount = '1'
const test_hasWhitelisting = true
let address = ''
describe('FixedSwap', function () {
  it('Deployment should assign the total supply of tokens to the owner', async function () {
    const [owner] = await ethers.getSigners()

    const Token = await ethers.getContractFactory('Token')

    const hardhatToken = await Token.deploy('SKYMORE KID', 'KID')
    address = hardhatToken.address
    const ownerBalance = await hardhatToken.balanceOf(owner.address)
    expect(await hardhatToken.totalSupply()).to.equal(ownerBalance)
  })
  it("Should return the new greeting once it's changed", async function () {
    const [owner] = await ethers.getSigners()
    const FixedSwap = await ethers.getContractFactory('FixedSwap')
    const fixedSwap = await FixedSwap.deploy(
      address,
      test_tradeValue,
      test_tokensForSale,
      test_startDate,
      test_endDate,
      test_individualMinimumAmount,
      test_individualMaximumAmount,
      test_isTokenSwapAtomic,
      test_minimumRaise,
      test_feeAmount,
      test_hasWhitelisting
    )
    await fixedSwap.deployed()
    // expect(await fixedSwap.isOpended()).to.equal(false)

    // await fixedSwap.setGreeting('Hola, mundo!')
    expect(await fixedSwap.isOpen()).to.equal(false)
  })
})
