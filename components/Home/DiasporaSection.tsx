import React from "react";
import { Visual } from "../HomeVisual";

export const DiasporaSection: React.FC = () => {
    return (
        <section
            className={
            "pointer-events-auto z-10 flex h-full flex-col  border-neutral-800"
            }
        >
            <div className="my-auto mt-10 flex grow flex-col p-10">
            <div className="mx-auto w-full">
                <Visual />
            </div>

            <div className={"container mx-auto mt-10 max-w-3xl"}>
                <p className="text-center text-lg font-normal tracking-wide text-gray-400 max-sm:text-sm">
                4,444 Ancestors to guide you on your Journey into Web3. Connecting
                the Diaspora on the Solana Blockchain with History, Lineage,
                Up-skilling & Digital Art. With a goal to inspire ‘Decentralized
                Powernomics’ across the culture, summon your Sol & Mint an
                Ancestor. Your key-to-access, collectible & guide.
                {/* Diaspora is a community centric DAO powered by the Solana blockchain. The company’s mission is to empower
                economic opportunity, education, and equality. Projects under Diaspora will be funded initially by the
                launch of a unique NFT collection that showcases historic people, moments, and iconography of the
                diaspora. It will serve as a digital historical treasure, reimagined through a futuristic lens. */}
                </p>
            </div>
            </div>
        </section>
    );
}