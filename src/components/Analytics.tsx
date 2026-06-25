"use client";

import { sendGAEvent } from "@next/third-parties/google";
import Script from "next/script";

const GA_ID = "G-XQYN988TFS";

export function AnalyticsProvider() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', {
            anonymize_ip: true,
            cookie_flags: 'max-age=0; secure; samesite=lax',
            cookie_expires: 0,
            client_storage: 'none'
          });
        `}
      </Script>
    </>
  );
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
