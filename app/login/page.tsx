"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Sparkles, ArrowRight, Lock, Mail, CheckCircle2, Loader2 } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      // Save authenticated session state
      if (typeof window !== "undefined") {
        const authData = {
          email: email || "creator@studio.com",
          name: email ? email.split("@")[0] : "Creator Pro",
          plan: "Pro Tier",
          signedInAt: Date.now()
        };
        localStorage.setItem("creator_os_auth", JSON.stringify(authData));
        window.dispatchEvent(new Event("creator_os_auth_change"));
      }
      // Auto redirect to dashboard after 1.5s
      setTimeout(() => {
        router.push("/dashboard");
      }, 1500);
    }, 1000);
  };

  const handleInstantDemoLogin = () => {
    setLoading(true);
    setTimeout(() => {
      if (typeof window !== "undefined") {
        const authData = {
          email: "demo@leksmedia.com",
          name: "Alex Vance",
          plan: "Pro Tier (Demo)",
          signedInAt: Date.now()
        };
        localStorage.setItem("creator_os_auth", JSON.stringify(authData));
        window.dispatchEvent(new Event("creator_os_auth_change"));
      }
      router.push("/dashboard");
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#08080a] text-[#f5f5f4] flex flex-col justify-between">
      <Navbar />

      <main className="pt-36 pb-24 px-6 flex-1 flex items-center justify-center">
        <div className="max-w-md w-full mx-auto space-y-8 p-8 sm:p-10 rounded-2xl border border-white/10 bg-[#0d0d10] shadow-2xl relative overflow-hidden">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#b8965a]/30 bg-[#b8965a]/10 text-[#b8965a] font-mono text-xs uppercase tracking-widest mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              Leksmedia Access
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl text-white">
              Welcome back
            </h1>
            <p className="text-xs text-white/60 font-light">
              Enter your email to receive a passwordless magic sign-in link.
            </p>
          </div>

          {sent ? (
            <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-3 animate-fade-in">
              <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
              <h3 className="text-sm font-semibold text-white">
                Magic Link Sent!
              </h3>
              <p className="text-xs text-white/60 leading-relaxed font-light">
                We sent a secure sign-in token to <strong className="text-white">{email}</strong>. Redirecting you to your Content Studio...
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono uppercase text-white/60 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@founder.com"
                    className="w-full bg-[#141418] border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#b8965a] transition-all"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-gold w-full py-3 text-xs font-semibold flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(184,150,90,0.35)] disabled:opacity-50 cursor-pointer"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending Magic Link...
                  </>
                ) : (
                  <>
                    Sign In with Email Link →
                  </>
                )}
              </button>
            </form>
          )}

          {/* Quick Demo Access Button */}
          <div className="pt-4 border-t border-white/5 text-center space-y-3">
            <span className="text-[11px] font-mono text-white/40 uppercase block">
              Or Explore Without Signing In
            </span>
            <button
              onClick={handleInstantDemoLogin}
              className="w-full btn-secondary py-2.5 text-xs font-mono inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              <Lock className="w-3.5 h-3.5 text-[#b8965a]" />
              Instant Demo Access →
            </button>
          </div>

          <p className="text-[11px] font-mono text-white/40 text-center">
            New here?{" "}
            <Link href="/onboarding" className="text-[#b8965a] hover:underline">
              Get Your Blueprint
            </Link>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
