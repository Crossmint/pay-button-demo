This is a Crossmint demo project that you can build using following the quickstart guide:
https://docs.crossmint.com/nft-checkout/pay-button/quickstart

Built with [Next.js](https://nextjs.org/) and bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

To skip the walkthrough and get this app running immediately you can clone the repo and run locally. If you want to build it step by step (< 10 min), follow the [quickstart guide](https://docs.crossmint.com/nft-checkout/pay-button/quickstart) instead.

```bash
# copy the repo to your local machine
git clone https://github.com/Crossmint/pay-button-demo.git

# change into the directory
cd pay-button-demo

# install dependencies / yarn or npm obviously work too xD
pnpm install
```

You'll also need to create an `.env.local` file, which you can do by by copying `env.sample` to `.env.local` and adding the values from your Crossmint staging or production collection.

You can also use the `projectId` and `collectionId` values here to test things out right away.

> [!NOTE]  
> The Crossmint `projectId` and `collectionId` values are **not** sensitive and can be exposed.

```shell
NEXT_PUBLIC_PROJECT_ID="fbe32003-fef9-484a-8beb-a5fcb3b0c3a6"
NEXT_PUBLIC_COLLECTION_ID="c51e6e5b-6bb0-4fc6-8015-7fe2d780eb2c"
NEXT_PUBLIC_ENVIRONMENT="staging"
```

Once you have the environment file setup you can run the app locally to test it out.

```bash
# run the app locally and open in your browser
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

- Checkout the Crossmint [NFT Checkout Pay Button docs](https://docs.crossmint.com/nft-checkout/pay-button/overview)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
