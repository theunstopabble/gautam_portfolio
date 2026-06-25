"use client";

import { GoogleAnalytics, sendGAEvent } from "@next/third-parties/google";
import { useEffect, useState } from "react";

const GA_ID = "G-XXXXXXXX";

export function AnalyticsProvider() {
  const [consented, setConsented] = useState<boolean | null>(null);

  useEffect(() => {
    const c = localStorage.getItem("cookie-consent");
    setConsented(c === "accepted");
  }, []);

  if (consented === null) return null;

  if (!consented) {
    return <CookieConsentBanner onAccept={() => {
      localStorage.setItem("cookie-consent", "accepted");
      setConsented(true);
    }} />;
  }

  return <GoogleAnalytics gaId={GA_ID} />;
}

export function trackResumeClick() {
  sendGAEvent("event", "resume_download", { event_category: "engagement" });
}

export function trackProjectClick(projectName: string) {
  sendGAEvent("event", "project_click", { event_label: projectName, event_category: "engagement" });
}

export function trackContactClick() {
  sendGAEvent("event", "contact_click", { event_category: "engagement" });
}

function CookieConsentBanner({ onAccept }: { onAccept: () => void }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 rounded-2xl border border-white/10 bg-black/80 px-5 py-4 text-sm shadow-2xl backdrop-blur-xl">
        <p className="text-muted-foreground leading-relaxed">
          This site uses cookies for analytics to understand how recruiters and visitors engage with my portfolio.{" "}
          <a href="/privacy" className="text-primary underline underline-offset-2 hover:brightness-110">
            Learn more
          </a>
        </p>
        <button
          onClick={onAccept}
          className="shrink-0 rounded-xl bg-linear-to-r from-primary to-accent px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-all hover:brightness-110"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
