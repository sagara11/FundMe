const FundMe = artifacts.require("FundMe");
const MockV3Aggregator = artifacts.require("test/MockV3Aggregator");

DECIMALS = 18;
STARTING_PRICE = 100000000000;

const deploy_function = async (deployer, network) => {
  let price_feed_address;
  if (network === "kovan" || network === "rinkeby") {
    console.log("iam in", network);
    // Do something specific to the network named "live".
    price_feed_address =
      network === "kovan"
        ? "0x9326BFA02ADD2366b30bacB125260Af641031331"
        : "0x8A753747A1Fa494EC906cE90E9f37563A8AF630e";
  } else {
    console.log("Deploying Mocks...");
    await deployer.deploy(MockV3Aggregator, DECIMALS, STARTING_PRICE);
    //access information about your deployed contract instance
    console.log("Deployed! Mocks...");
    const instance = await MockV3Aggregator.deployed();
    price_feed_address = instance.address;
  }
  await deployer.deploy(FundMe, price_feed_address);
  console.log(`Contract FundMe deployed`);
};

module.exports = deploy_function;
