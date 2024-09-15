import { custom, toHex } from 'viem';
import { useIpAsset } from "@story-protocol/react-sdk";

// example of how you would now use the fully setup react sdk

export default async function TestComponent() {
  const { register } = useIpAsset();
  
  const response = await register({
    nftContract: '0x01...',
    tokenId: '1',
    metadata: {
      metadataURI: "test-metadata-uri",
      metadataHash: toHex("test-metadata-hash", { size: 32 }),
      nftMetadataHash: toHex("test-nft-metadata-hash", { size: 32 }),
    },
    txOptions: { waitForTransaction: true },
  });
  console.log(
    `Root IPA created at tx hash ${response.txHash}, IPA ID: ${response.ipId}`
  );
  
  return (
    {/* */} 
  )
}