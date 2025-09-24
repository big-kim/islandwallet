export type Network = "mainnet" | "testnet";

export interface SdkConfig {
  rpcUrl: string;
  network: Network;
}

export class IcWalletSdk {
  constructor(private readonly config: SdkConfig) {}

  getConfig(): SdkConfig {
    return this.config;
  }
}
