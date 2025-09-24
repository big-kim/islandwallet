import { describe, expect, it } from "vitest";
import { IcWalletSdk } from "../src";

describe("IcWalletSdk", () => {
  it("returns constructor config", () => {
    const sdk = new IcWalletSdk({ rpcUrl: "https://example.com", network: "testnet" });
    expect(sdk.getConfig().network).toBe("testnet");
  });
});
