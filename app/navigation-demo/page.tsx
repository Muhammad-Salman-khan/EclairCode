"use client";

import { useState } from "react";
import { Navigation } from "@/components/Navigation";

export default function NavigationDemo() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="min-h-screen">
      <Navigation
        activePath="/problems"
        user={{
          name: "DevCode User",
          rank: "Pro",
          points: 2450,
          avatar: "https://lh3.googleusercontent.com/aida/ADBb0ujFZdftX-X0fqlSfCvYqFH3cFICSZD6eb9pawP_abC9IBtujWMOp-eUnCxVJR_sD5iM2R-BY4ZVtCEdPIG1nfB2lfagWIXuDJuvwmU_t_McF2CE_6lIhTCmWYM_qUd1pa9yPG6Shzyv7RDFszmqC7G61IDPK2jVhRaPZz9KuLt0omZgIcOPOht71-n0lwN5SykrhRazUKmGUjbYmRybXrYNUYdyNE0Q7TOLcJP47PAlwKY1fSitbUVAOw",
        }}
        theme={theme}
        onThemeToggle={() => setTheme(theme === "light" ? "dark" : "light")}
        onNotificationsClick={() => console.log("Notifications clicked")}
        onLogout={() => console.log("Logout clicked")}
        showDropdown={showDropdown}
      />

      {/* Demo Controls */}
      <div className="p-8 space-y-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">Navigation Component Demo</h1>

          {/* Light Mode Demo */}
          <section className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-[#2e5bff] text-white px-3 py-1 font-bold uppercase text-xs border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                Light Mode
              </span>
            </div>
            <div className="bg-[#fcf9f8] border-2 border-black p-4 rounded-xl">
              <Navigation
                activePath="/problems"
                user={{
                  name: "DevCode User",
                  rank: "Pro",
                  points: 2450,
                  avatar: "https://lh3.googleusercontent.com/aida/ADBb0ujFZdftX-X0fqlSfCvYqFH3cFICSZD6eb9pawP_abC9IBtujWMOp-eUnCxVJR_sD5iM2R-BY4ZVtCEdPIG1nfB2lfagWIXuDJuvwmU_t_McF2CE_6lIhTCmWYM_qUd1pa9yPG6Shzyv7RDFszmqC7G61IDPK2jVhRaPZz9KuLt0omZgIcOPOht71-n0lwN5SykrhRazUKmGUjbYmRybXrYNUYdyNE0Q7TOLcJP47PAlwKY1fSitbUVAOw",
                }}
                theme="light"
                onThemeToggle={() => {}}
                onNotificationsClick={() => {}}
                onLogout={() => {}}
                showDropdown={false}
              />
              <div className="h-64 mt-8 bg-[#f6f3f2] opacity-25" />
            </div>
          </section>

          {/* Dark Mode Demo */}
          <section>
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-[#2e5bff] text-white px-3 py-1 font-bold uppercase text-xs border-2 border-white shadow-[2px_2px_0px_0px_rgba(255,255,255,0.1)]">
                Dark Mode
              </span>
            </div>
            <div className="bg-[#1c1b1b] border-2 border-[#e5e2e1] p-4 rounded-xl">
              <Navigation
                activePath="/problems"
                user={{
                  name: "DevCode User",
                  rank: "Pro",
                  points: 2450,
                  avatar: "https://lh3.googleusercontent.com/aida/ADBb0ujFZdftX-X0fqlSfCvYqFH3cFICSZD6eb9pawP_abC9IBtujWMOp-eUnCxVJR_sD5iM2R-BY4ZVtCEdPIG1nfB2lfagWIXuDJuvwmU_t_McF2CE_6lIhTCmWYM_qUd1pa9yPG6Shzyv7RDFszmqC7G61IDPK2jVhRaPZz9KuLt0omZgIcOPOht71-n0lwN5SykrhRazUKmGUjbYmRybXrYNUYdyNE0Q7TOLcJP47PAlwKY1fSitbUVAOw",
                }}
                theme="dark"
                onThemeToggle={() => {}}
                onNotificationsClick={() => {}}
                onLogout={() => {}}
                showDropdown={false}
              />
              <div className="h-32 mt-8 bg-[#313030] border-2 border-[#747688] border-dashed flex items-center justify-center">
                <span className="font-bold uppercase text-[#c4c5d9] text-xs">
                  Dark Content Canvas
                </span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
