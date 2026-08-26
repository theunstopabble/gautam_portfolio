const platforms: Record<string, string> = {
  "linkedin.com": "LinkedIn",
  "lnkd.in": "LinkedIn",
  "twitter.com": "𝕏",
  "x.com": "𝕏",
  "t.co": "𝕏",
  "github.com": "GitHub",
  "facebook.com": "Facebook",
  "fb.com": "Facebook",
  "instagram.com": "Instagram",
  "threads.net": "Threads",
  "reddit.com": "Reddit",
  "youtube.com": "YouTube",
  "pinterest.com": "Pinterest",
  "quora.com": "Quora",
  "bing.com": "Bing",
  "duckduckgo.com": "DuckDuckGo",
  "yahoo.com": "Yahoo",
  "t.me": "Telegram",
  "telegram.org": "Telegram",
  "wa.me": "WhatsApp",
  "whatsapp.com": "WhatsApp",
  "discord.com": "Discord",
  "discord.gg": "Discord",
  "medium.com": "Medium",
  "dev.to": "Dev.to",
  "hashnode.com": "Hashnode",
  "stackoverflow.com": "Stack Overflow",
  "ycombinator.com": "Hacker News",
  "chatgpt.com": "ChatGPT",
  "openai.com": "ChatGPT",
  "perplexity.ai": "Perplexity",
  "claude.ai": "Claude",
  "anthropic.com": "Claude",
  "gemini.google.com": "Gemini",
  "aistudio.google.com": "AI Studio",
  "copilot.microsoft.com": "Copilot",
  "copilot.cloud.microsoft": "Copilot",
  "deepseek.com": "DeepSeek",
  "grok.com": "Grok",
  "meta.ai": "Meta AI",
  "poe.com": "Poe",
  "mistral.ai": "Le Chat",
  "character.ai": "Character.AI",
  "huggingface.co": "Hugging Face",
  "you.com": "You.com",
  "qwen.ai": "Qwen",
  "kimi.com": "Kimi",
};

const apps: Record<string, string> = {
  "com.linkedin.android": "LinkedIn",
  "com.facebook.katana": "Facebook",
  "com.instagram.android": "Instagram",
  "com.whatsapp": "WhatsApp",
  "com.google.android.gm": "Gmail",
  "com.twitter.android": "𝕏",
  "com.x.android": "𝕏",
  "com.discord": "Discord",
  "org.telegram.messenger": "Telegram",
  "com.reddit.frontpage": "Reddit",
  "com.github.android": "GitHub",
  "com.microsoft.office.outlook": "Outlook",
  "com.openai.chatgpt": "ChatGPT",
  "com.anthropic.claude": "Claude",
  "com.google.android.apps.bard": "Gemini",
  "com.microsoft.copilot": "Copilot",
  "com.deepseek.chat": "DeepSeek",
  "ai.perplexity.android": "Perplexity",
};

export interface ReferralOptions {
  selfHost?: string;
  selfLabel?: string;
}

export function resolveReferral(source: string, opts: ReferralOptions = {}): string {
  if (!source) return "Direct";

  if (source.startsWith("android-app://")) {
    const pkg = source.slice("android-app://".length).split("/")[0].toLowerCase();
    return apps[pkg] ?? "Mobile App";
  }

  const host = source.match(/https?:\/\/([^/?#]+)/i)?.[1]?.toLowerCase() ?? "";
  if (!host) return "Direct";

  const isSelf =
    host.includes("gautam-kr.vercel.app") ||
    (opts.selfHost ? host === opts.selfHost.toLowerCase() : false);
  if (isSelf) return opts.selfLabel ?? "Direct";

  const clean = host.replace(/^(www|m|mobile)\./, "");
  if (clean.startsWith("google.")) return "Google";

  for (const [key, brand] of Object.entries(platforms)) {
    if (clean === key || clean.endsWith(`.${key}`)) return brand;
  }
  return clean;
}
