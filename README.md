# ADONIS
CrossChain ZK Messaging Protocol with AI Generated(Stable Diffusion) token gating PFPs. We use FILECOIN VIRTUAL MACHINE(Hyperspace RPC, ETHGoerli) to generate and store PFPs for token gating. The PFP will be used to gain access to private messaging protocol built on SCROLL using ACCOUNT ABSTRACTION

REPOS(We're moving all repos to Adonis Labs project account https://github.com/adonislabs): 

FRONTED: https://github.com/monyverse/adonis 
Fluencelabs fRPC: https://github.com/monyverse/fRPC-Substrate
SCROLL ACCOUNT ABSTRACTION MESSAGING: https://github.com/monyverse/account_abstraction_scroll

First, run the development server:

The best way to run the project locally. Make sure you're connected to Filecoin VM Hyperspace RPC using: url: 'https://api.hyperspace.node.glif.io/rpc/v1', chainId: 3141, 

Contracts found under /src/api/hardhat

Requirements: .env with an NFT.Storage API key & wallet private key for deployments node

Deploy the contract by running

npx hardhat run src/api/hardhat/deploy/deployBacalhauFRC721.ts --network filecoinHyperspace 

Quick Start

clone
npm install
add a .env file with the needed env variables (see .env.example)
npm run dev


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Contracts
This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.ts
```
## Deployed Contracts

Address: 0xe681Dc34758d17D35e962dA60398fC8aF2c4F2be


Deployer: 0xe681Dc34758d17D35e962dA60398fC8aF2c4F2be
Deployed to: 0x4F3B0ebF885D6372711C57af39719ffE4579CB2e
Transaction hash: 0x8226a4052457e15057480d7a130ecb700be2ea80bc4efb53416cc141f76cb569

Filecoin Virtual Machine Contract:

FVM SBTFRC721 deployed to  0x4F3B0ebF885D6372711C57af39719ffE4579CB2e

bacalhauFRC721 0x00ba638dE50DAf4222Fde444494B03a2E47ECf09

## SCROLL ACCOUNT ABSTRACTION CONTRACTS 

Message Contract: 0x8b4751Bf2Ba59222EB3d40D9fe7FDD98496503b9

Greeting Setter: 0xb6F5414bAb8d5ad8F33E37591C02f7284E974FcB

Previous Greeter contract: 0x374257dC5707AEDCC1D4F7D0d1b476a57Fc11194

