"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Menu,
  X,
  LogOut,
  ChevronDown,
  Share2,
  FileCheck
} from "lucide-react";

interface UserAuth {
  email: string;
  name: string;
  plan: string;
  signedInAt?: number;
}

export function Navbar() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [authUser, setAuthUser] = useState<UserAuth | null>(null);

  const checkAuth = () => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("creator_os_auth");
      if (stored) {
        try {
          setAuthUser(JSON.parse(stored));
        } catch {
          setAuthUser(null);
        }
      } else {
        setAuthUser(null);
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    checkAuth();
    window.addEventListener("creator_os_auth_change", checkAuth);
    window.addEventListener("storage", checkAuth);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("creator_os_auth_change", checkAuth);
      window.removeEventListener("storage", checkAuth);
    };
  }, []);

  const handleSignOut = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("creator_os_auth");
      setAuthUser(null);
      setProfileMenuOpen(false);
      window.dispatchEvent(new Event("creator_os_auth_change"));
      router.push("/login");
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#08080a]/90 backdrop-blur-xl border-b border-white/10 py-3.5 shadow-2xl"
          : "bg-transparent py-5 border-b border-white/5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="font-serif italic text-2xl tracking-tight text-white group-hover:text-[#b8965a] transition-colors">
            Leksmedia
          </span>
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#b8965a] px-2 py-0.5 rounded-full border border-[#b8965a]/30 bg-[#b8965a]/10">
            Brand Studio
          </span>
        </Link>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/#how-it-works"
            className="text-sm font-medium text-white/70 hover:text-white transition-colors"
          >
            How it works
          </Link>
          <Link
            href="/#use-cases"
            className="text-sm font-medium text-white/70 hover:text-white transition-colors"
          >
            Use cases
          </Link>
          <Link
            href="/#pricing"
            className="text-sm font-medium text-white/70 hover:text-white transition-colors"
          >
            Pricing
          </Link>
        </nav>

        {/* Right Nav CTA / Profile Dropdown */}
        <div className="hidden sm:flex items-center gap-4">
          {authUser ? (
            <>
              {/* User Dropdown Trigger */}
              <div className="relative">
                <button
                  onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                  className="flex items-center gap-2 pl-2 pr-3 py-1 rounded-full bg-[#141418] border border-white/10 hover:border-[#b8965a]/50 text-white transition-all cursor-pointer"
                  aria-expanded={profileMenuOpen}
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#b8965a] to-[#d4b076] flex items-center justify-center text-[#08080a] font-bold text-xs uppercase shadow-sm">
                    {authUser.name ? authUser.name.charAt(0).toUpperCase() : "U"}
                  </div>
                  <span className="text-xs font-mono text-white/90 max-w-[90px] truncate">
                    {authUser.name || "Member"}
                  </span>
                  <span className="text-[9px] font-mono font-bold uppercase px-1.5 py-0.5 rounded bg-[#b8965a]/20 text-[#b8965a] border border-[#b8965a]/30">
                    PRO
                  </span>
                  <ChevronDown className="w-3 h-3 text-white/50" />
                </button>

                {/* Profile Obsidian Dropdown */}
                {profileMenuOpen && (
                  <div
                    className="absolute right-0 mt-2 w-64 rounded-xl bg-[#0d0d10] border border-white/10 shadow-2xl p-2 z-50 animate-fade-in space-y-1"
                    onMouseLeave={() => setProfileMenuOpen(false)}
                  >
                    <div className="px-3 py-2.5 border-b border-white/5">
                      <p className="text-xs font-semibold text-white truncate">
                        {authUser.name}
                      </p>
                      <p className="text-[11px] font-mono text-white/40 truncate">
                        {authUser.email}
                      </p>
                      <div className="mt-1.5 inline-flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                        <span>●</span> {authUser.plan || "Pro Tier (Active)"}
                      </div>
                    </div>

                    <Link
                      href="/brand"
                      onClick={() => setProfileMenuOpen(false)}
                      className="flex items-center gap-2 px-3 py-2 text-xs text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                    >
                      <FileCheck className="w-3.5 h-3.5 text-[#b8965a]" />
                      Brand Blueprint Results
                    </Link>

                    <Link
                      href="/dashboard?tab=youtube"
                      onClick={() => setProfileMenuOpen(false)}
                      className="flex items-center gap-2 px-3 py-2 text-xs text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                    >
                      <Share2 className="w-3.5 h-3.5 text-[#b8965a]" />
                      YouTube Strategy Hub
                    </Link>

                    <div className="pt-1 border-t border-white/5">
                      <button
                        onClick={handleSignOut}
                        className="w-full flex items-center gap-2 px-3 py-2 text-xs text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-colors cursor-pointer text-left"
                      >
                        <LogOut className="w-3.5 h-3.5" />
                        Sign Out
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/onboarding"
                className="btn-gold px-4 py-2 text-xs font-semibold tracking-wide flex items-center gap-1.5 shadow-[0_0_20px_rgba(184,150,90,0.35)]"
              >
                Get started →
              </Link>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="text-sm font-medium text-white/70 hover:text-white transition-colors"
              >
                Sign in
              </Link>
              <Link
                href="/onboarding"
                className="btn-gold px-4 py-2 text-xs font-semibold tracking-wide flex items-center gap-1.5 shadow-[0_0_20px_rgba(184,150,90,0.35)]"
              >
                Get started →
              </Link>
            </>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-white/80 hover:text-white"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#08080a] border-b border-white/10 px-6 py-5 flex flex-col gap-4">
          <Link
            href="/#how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm text-white/80 hover:text-white"
          >
            How it works
          </Link>
          <Link
            href="/#use-cases"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm text-white/80 hover:text-white"
          >
            Use cases
          </Link>
          <Link
            href="/#pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm text-white/80 hover:text-white"
          >
            Pricing
          </Link>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-3">
            {authUser ? (
              <>
                <div className="flex items-center justify-between pb-2 border-b border-white/5">
                  <div>
                    <span className="text-xs text-white block">{authUser.name}</span>
                    <span className="text-[10px] font-mono text-white/40">{authUser.email}</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#b8965a]/20 text-[#b8965a]">
                    PRO
                  </span>
                </div>
                <Link
                  href="/onboarding"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-gold py-2.5 text-xs text-center font-semibold"
                >
                  Get started →
                </Link>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleSignOut();
                  }}
                  className="text-sm text-red-400 text-left pt-1 flex items-center gap-2 cursor-pointer"
                >
                  <LogOut className="w-4 h-4" />
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm text-white/70 hover:text-white"
                >
                  Sign in
                </Link>
                <Link
                  href="/onboarding"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-gold py-2.5 text-xs text-center font-semibold"
                >
                  Get started →
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
