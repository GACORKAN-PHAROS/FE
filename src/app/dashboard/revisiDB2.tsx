import React from "react";
import { Card, CardContent } from "@/app/animasi/cardLanding4";
import { Button } from "@/app/animasi/buttonLanding4";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const vaults = [
  {
    name: "USD++ Vault",
    icon: "/Video.svg", // Replace with actual path if needed
  },
  {
    name: "IDRX++ Vault",
    icon: "/Video.svg", // Replace with actual path if needed
  },
  {
    name: "EUROC++ Vault",
    icon: "/Video.svg", // Replace with actual path if needed
  },
];

export default function Vaults() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-16 px-4" id="last">
      <h1 className="text-4xl md:text-5xl mb-12 text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.93)] text-center duration-50">
        Active Vaults
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl drop-shadow-[0_0_5px_rgba(255,255,255,0.93)]">
        {vaults.map((vault) => (
          <Card
            key={vault.name}
            className="bg-gradient-to-b from-[#1e1e1e] to-[#111] border border-[#2a2a2a] rounded-2xl shadow-xl hover:shadow-2xl transition duration-300"
          >
            <CardContent className="p-6 flex flex-col items-start gap-6">
              <div className="w-full h-20 bg-[#2d2d2d] rounded-2xl overflow-hidden relative">
                <Image
                  src={vault.icon}
                  alt="vault background"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg opacity-60"
                />
                <div className="absolute inset-0 flex items-center justify-between px-4 text-sm drop-shadow-[0_0_5px_rgba(255,255,255,0.93)]">
                  <span>PAYMENT</span>
                </div>
              </div>
              <h2 className="text-xl font-semibold">{vault.name}</h2>
              <Button variant="secondary" className="mt-auto">
                Explore Vault <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>


    </div>
    
  );
}
