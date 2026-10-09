"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LinkedInRedirectPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/dashboard?tab=youtube");
  }, [router]);

  return (
    <div className="min-h-screen bg-[#08080a] flex items-center justify-center text-white font-mono text-xs">
      <div className="text-center space-y-2">
        <div className="w-5 h-5 border-2 border-[#b8965a] border-t-transparent rounded-full animate-spin mx-auto" />
        <p className="text-white/60">Redirecting to YouTube Strategy Hub...</p>
      </div>
    </div>
  );
}
