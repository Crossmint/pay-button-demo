"use client";

import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui";

export default function Home() {
  const projectId = process.env.NEXT_PUBLIC_CROSSMINT_PROJECT_ID as string;
  const collectionId = process.env
    .NEXT_PUBLIC_CROSSMINT_COLLECTION_ID as string;
  const environment = process.env.NEXT_PUBLIC_CROSSMINT_ENVIRONMENT as string;

  return (
    <div className="xmint-btn">
      <CrossmintPayButton
        projectId={projectId}
        collectionId={collectionId}
        environment={environment}
        mintConfig={{
          type: "erc-721",
          totalPrice: "10",
          _quantity: "1", // this property name must match your mint function parameter name
        }}
      />
    </div>
  );
}
