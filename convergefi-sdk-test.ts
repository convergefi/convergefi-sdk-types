import ConvergeFiSDK from ".";

let token = "1234";
let idempotencyKey = "4321";
const sdk = new ConvergeFiSDK();
sdk.checkoutElement("converge-fi-sdk-checkout");
sdk.startCheckout({token, idempotencyKey})