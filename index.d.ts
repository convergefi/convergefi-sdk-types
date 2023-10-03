export interface ConvergeFiSDKCheckoutOptions {
    token: string;
    idempotencyKey: string;
    darkMode?: boolean;
    debugMode?: boolean;
}
export interface ConvergeFiSDKReceiptOptions {
    readOnlyToken: string;
    idempotencyKey: string;
    darkMode?: boolean;
    debugMode?: boolean;
}
export interface ConvergeFiSDKIdentityVerificationOptions {
    identityVerificationToken: string;
    idempotencyKey: string;
    debugMode?: string;
    darkMode?: boolean;
}
export interface Address {
    postal_code : string
  }
export interface Payment {
    payment_type: string
    payment_method_external_id: string
    external_transaction_id: string
    currency_short_code: string
    payer_email? : string,
    payer_country? : string,
    address? : Address
  }

export interface Action {
    flow: string
    step: string
    status: string
    timestamp_utc: number
  }
  
export interface ConvergeFiSDKEvent {
    action: Action
    payment?: Payment,
    idempotencyKey?: string
    errorCode?: any,
  }
declare class ConvergeFiSDK {
    constructor();
    checkoutElement(element: string): void;
    receiptElement(element: string): void;
    IdentityVerificationElement(element: string): void;
    startCheckout(options: ConvergeFiSDKCheckoutOptions): void;
    startReceipt(options: ConvergeFiSDKReceiptOptions): void;
    startIdentityVerification(options: ConvergeFiSDKIdentityVerificationOptions): void;
    removeCheckout(cancel?: boolean): Promise<void>;
    removeReceipt(cancel?: boolean): void;
    removeIdentityVerification(cancel?: boolean): Promise<void>;
    subscribeToEvent(eventName: string, callback: Function): void;
}
export default ConvergeFiSDK;
