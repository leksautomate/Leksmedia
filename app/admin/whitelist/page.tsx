"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  ShieldAlert,
  UserPlus,
  Trash2,
  CheckCircle2,
  Terminal,
  Key,
  Search,
  Lock,
  ArrowLeft
} from "lucide-react";

interface WhitelistUser {
  id: string;
  email: string;
  channelName: string;
  tier: "VIP Partner" | "Beta Creator" | "Pro Studio";
  status: "Active" | "Pending" | "Revoked";
  mcpKey: string;
  dateAdded: string;
}

export default function AdminWhitelistPage() {
  const [users, setUsers] = useState<WhitelistUser[]>([
    {
      id: "usr-1",
      email: "admin@leksmedia.com",
      channelName: "Leksmedia Studio",
      tier: "VIP Partner",
      status: "Active",
      mcpKey: "sl_live_79a2f1c849b29e08",
      dateAdded: "2026-03-01"
    },
    {
      id: "usr-2",
      email: "alex@highleverage.io",
      channelName: "High Ticket Leverage",
      tier: "Pro Studio",
      status: "Active",
      mcpKey: "sl_live_8830fe9182377a10",
      dateAdded: "2026-03-15"
    },
    {
      id: "usr-3",
      email: "marcus@coldcasevault.com",
      channelName: "Cold Case Archives",
      tier: "Beta Creator",
      status: "Pending",
      mcpKey: "sl_live_pending_token_09",
      dateAdded: "2026-04-02"
    }
  ]);

  const [newEmail, setNewEmail] = useState("");
  const [newChannel, setNewChannel] = useState("");
  const [newTier, setNewTier] = useState<"VIP Partner" | "Beta Creator" | "Pro Studio">("Beta Creator");

  const handleAddUser = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEmail.trim()) return;

    const newUser: WhitelistUser = {
      id: `usr-${Date.now()}`,
      email: newEmail.trim(),
      channelName: newChannel.trim() || "Independent Creator",
      tier: newTier,
      status: "Active",
      mcpKey: `sl_live_${Math.random().toString(36).substring(2, 12)}`,
      dateAdded: new Date().toISOString().split("T")[0]
    };

    setUsers([newUser, ...users]);
    setNewEmail("");
    setNewChannel("");
  };

  const handleRemoveUser = (id: string) => {
    setUsers(users.filter(u => u.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#08080a] text-[#f5f5f4] flex flex-col justify-between">
      <Navbar />

      <main className="pt-32 pb-24 px-6 flex-1">
        <div className="max-w-6xl mx-auto space-y-10">
          {/* Admin Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 font-mono text-xs uppercase tracking-widest mb-3">
                <Lock className="w-3.5 h-3.5" />
                Admin Console · Authenticated
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl text-white">
                Member Whitelist & MCP Key Manager
              </h1>
              <p className="text-sm text-white/60 font-light mt-1">
                Manage beta invitations, high-frequency YouTube API tokens, and Model Context Protocol keys.
              </p>
            </div>

            <Link
              href="/dashboard"
              className="btn-secondary px-4 py-2 text-xs font-mono inline-flex items-center gap-1.5"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to Dashboard
            </Link>
          </div>

          {/* Add New Whitelist Member Form */}
          <div className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-[#0d0d10] space-y-4">
            <h2 className="text-base font-semibold text-white flex items-center gap-2">
              <UserPlus className="w-4 h-4 text-[#b8965a]" />
              Grant Studio Access to New Creator
            </h2>

            <form onSubmit={handleAddUser} className="grid grid-cols-1 sm:grid-cols-4 gap-3 pt-1">
              <input
                type="email"
                required
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                placeholder="creator@domain.com"
                className="bg-[#141418] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#b8965a]"
              />

              <input
                type="text"
                value={newChannel}
                onChange={(e) => setNewChannel(e.target.value)}
                placeholder="Channel Name (Optional)"
                className="bg-[#141418] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#b8965a]"
              />

              <select
                value={newTier}
                onChange={(e) => setNewTier(e.target.value as any)}
                className="bg-[#141418] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#b8965a]"
              >
                <option value="Beta Creator">Beta Creator ($97/mo)</option>
                <option value="Pro Studio">Pro Studio ($497/mo)</option>
                <option value="VIP Partner">VIP Partner (Full Access)</option>
              </select>

              <button
                type="submit"
                className="btn-gold py-2.5 text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <UserPlus className="w-3.5 h-3.5" />
                Whitelist & Issue Key
              </button>
            </form>
          </div>

          {/* Active Members Table */}
          <div className="rounded-2xl border border-white/10 bg-[#0d0d10] overflow-hidden shadow-xl">
            <div className="p-4 sm:p-6 border-b border-white/5 flex items-center justify-between">
              <span className="font-mono text-xs text-white/50 uppercase">
                Active Whitelisted Accounts ({users.length})
              </span>
              <span className="font-mono text-[11px] text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" />
                Stripe Billing Webhook Active
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-[#121216] border-b border-white/5 text-white/40 uppercase text-[10px]">
                  <tr>
                    <th className="p-4">Email</th>
                    <th className="p-4">Channel</th>
                    <th className="p-4">Tier</th>
                    <th className="p-4">MCP Key</th>
                    <th className="p-4">Status</th>
                    <th className="p-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-white/80">
                  {users.map((user) => (
                    <tr key={user.id} className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 font-sans text-sm text-white font-medium">{user.email}</td>
                      <td className="p-4">{user.channelName}</td>
                      <td className="p-4">
                        <span className="px-2 py-0.5 rounded bg-[#b8965a]/10 text-[#b8965a] border border-[#b8965a]/20">
                          {user.tier}
                        </span>
                      </td>
                      <td className="p-4 text-white/40 truncate max-w-[140px]">{user.mcpKey}</td>
                      <td className="p-4">
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] ${
                            user.status === "Active"
                              ? "bg-emerald-500/10 text-emerald-400"
                              : "bg-amber-500/10 text-amber-400"
                          }`}
                        >
                          {user.status}
                        </span>
                      </td>
                      <td className="p-4 text-right">
                        <button
                          onClick={() => handleRemoveUser(user.id)}
                          className="p-1.5 rounded hover:bg-red-500/20 text-white/40 hover:text-red-400 transition-colors"
                          title="Revoke access"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
