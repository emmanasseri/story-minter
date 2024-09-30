"use client"; // Make sure this component runs client-side

import React, { PropsWithChildren, ReactNode } from "react";
import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
import {
  createStorage,
  cookieStorage,
  useWalletClient,
  State,
  WagmiProvider,
} from "wagmi";
import { createWeb3Modal } from "@web3modal/wagmi/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StoryProvider } from "@story-protocol/react-sdk";
import { createWalletClient, http } from "viem";

// Define the custom chain configuration for Story Protocol Testnet
export const iliad = {
  id: 1513,
  name: "Story Network Testnet",
  nativeCurrency: {
    name: "Testnet IP",
    symbol: "IP",
    decimals: 18,
  },
  rpcUrls: {
    default: { http: ["https://testnet.storyrpc.io"] }, // Correct RPC URL
  },
  blockExplorers: {
    default: { name: "Storyscan", url: "https://testnet.storyscan.xyz" },
  },
  testnet: true,
} as const;

// Get WalletConnect project ID from environment variables
const projectId = process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID;
if (!projectId) throw new Error("WalletConnect Project ID is missing");

const metadata = {
  name: "Artcast",
  description: "Create and remix each others AI-generated images.",
  url: "https://artcast.ai", // origin must match your domain & subdomain
  icons: ["https://artcast.ai/logo.png"],
};
// Setup chains and configuration
const chains = [iliad];
const config = defaultWagmiConfig({
  metadata,
  chains,
  projectId,
  storage: createStorage({
    storage: cookieStorage,
  }),
});

// Initialize React Query client
const queryClient = new QueryClient();

// Create Web3Modal with WalletConnect
createWeb3Modal({
  metadata,
  //@ts-ignore
  wagmiConfig: config,
  projectId,
});

export default function Web3Providers({
  children,
  initialState,
}: {
  children: ReactNode;
  initialState?: State;
}) {
  return (
    <WagmiProvider config={config} initialState={initialState}>
      <QueryClientProvider client={queryClient}>
        <StoryProviderWrapper>{children}</StoryProviderWrapper>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

function StoryProviderWrapper({ children }: PropsWithChildren) {
  const { data: wallet } = useWalletClient();

  const dummyWallet = createWalletClient({
    chain: iliad,
    transport: http("https://testnet.storyrpc.io"), // Transport is the RPC URL
  });

  return (
    <StoryProvider
      config={{
        //chainId: iliad.id,
        transport: http(process.env.NEXT_PUBLIC_RPC_PROVIDER_URL),
        wallet: wallet || dummyWallet, // Use connected wallet or fallback to dummy wallet
      }}
    >
      {children}
    </StoryProvider>
  );
}
