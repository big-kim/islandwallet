# IC Wallet Monorepo

This repository hosts the IC Wallet platform using a pnpm + Turborepo workspace. It contains web, mobile, backend, smart contract, and SDK projects that will evolve with the IC Wallet PRD.

## Apps

- **apps/web** – Next.js web application for the IC Wallet experience.
- **apps/mobile** – Expo managed React Native mobile client.
- **apps/backend** – NestJS service for API and orchestration.

## Packages

- **packages/ui** – Shared UI primitives, fonts, and utilities.
- **packages/contracts** – Solidity smart contracts managed with Hardhat.
- **packages/sdk** – TypeScript SDK for interacting with IC Wallet services.

## Development

```bash
pnpm install
pnpm dev
```

Each workspace exposes its own scripts (e.g., `pnpm --filter @ic-wallet/web dev`).
