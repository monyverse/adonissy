import Head from 'next/head';
import { ReactElement } from 'react';

export const WebHeader: React.FC = (): ReactElement => {
  return (
    <Head>
      <title>Adonis Prompt Generated NFT PFP</title>
      <meta
        name="description"
        content="Adonis Stable Diffusion for Promt Generated NFT PFP"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/Bacalhau-plain.png" />
      {/* <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      /> */}
    </Head>
  );
};
