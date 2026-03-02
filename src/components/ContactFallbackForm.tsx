"use client";

import { useMemo, useState } from "react";

type Props = {
  to: string;
};

export function ContactFallbackForm({ to }: Readonly<Props>) {
  const [name, setName] = useState("");
  const [org, setOrg] = useState("");
  const [replyTo, setReplyTo] = useState("");
  const [context, setContext] = useState("");
  const [constraints, setConstraints] = useState("");
  const [links, setLinks] = useState("");
  const [copied, setCopied] = useState(false);

  const subject = useMemo(() => {
    const suffix = org.trim() ? ` — ${org.trim()}` : "";
    return `CrisisCore Systems inquiry${suffix}`;
  }, [org]);

  const body = useMemo(
    () =>
      [
        `Name: ${name || ""}`,
        `Organization: ${org || ""}`,
        `Reply email: ${replyTo || ""}`,
        "",
        "Context:",
        context || "",
        "",
        "Constraints (time/budget/security):",
        constraints || "",
        "",
        "Links / artifacts:",
        links || "",
      ].join("\n"),
    [name, org, replyTo, context, constraints, links]
  );

  const gmailHref = useMemo(
    () =>
      `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
    [to, subject, body]
  );

  const outlookHref = useMemo(
    () =>
      `https://outlook.office.com/mail/deeplink/compose?to=${encodeURIComponent(to)}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
    [to, subject, body]
  );

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(`To: ${to}\nSubject: ${subject}\n\n${body}`);
      setCopied(true);
      globalThis.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="space-y-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <input
          className="cc-field"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="cc-field"
          placeholder="Organization (optional)"
          value={org}
          onChange={(e) => setOrg(e.target.value)}
        />
      </div>

      <input
        className="cc-field"
        placeholder="Reply email"
        value={replyTo}
        onChange={(e) => setReplyTo(e.target.value)}
      />

      <textarea
        className="cc-field min-h-28"
        placeholder="Context"
        value={context}
        onChange={(e) => setContext(e.target.value)}
      />

      <textarea
        className="cc-field min-h-24"
        placeholder="Constraints (time/budget/security)"
        value={constraints}
        onChange={(e) => setConstraints(e.target.value)}
      />

      <textarea
        className="cc-field min-h-20"
        placeholder="Links / artifacts (optional)"
        value={links}
        onChange={(e) => setLinks(e.target.value)}
      />

      <div className="flex flex-wrap gap-3">
        <a
          href={gmailHref}
          target="_blank"
          rel="noreferrer"
          className="cc-button cc-button-ghost inline-flex items-center justify-center rounded-2xl border border-white/15 px-4 py-2 text-sm font-mono text-white/85 transition hover:-translate-y-0.5 hover:bg-white/[0.06] hover:text-white active:translate-y-0"
        >
          Open in Gmail ↗
        </a>
        <a
          href={outlookHref}
          target="_blank"
          rel="noreferrer"
          className="cc-button cc-button-ghost inline-flex items-center justify-center rounded-2xl border border-white/15 px-4 py-2 text-sm font-mono text-white/85 transition hover:-translate-y-0.5 hover:bg-white/[0.06] hover:text-white active:translate-y-0"
        >
          Open in Outlook ↗
        </a>
        <button
          type="button"
          onClick={onCopy}
          className="cc-button cc-button-ghost inline-flex items-center justify-center rounded-2xl border border-white/15 px-4 py-2 text-sm font-mono text-white/85 transition hover:-translate-y-0.5 hover:bg-white/[0.06] hover:text-white active:translate-y-0"
        >
          {copied ? "Copied" : "Copy inquiry text"}
        </button>
      </div>

      <div className="text-xs text-white/50">
        Fallback path for devices without a configured local mail client.
      </div>
    </div>
  );
}
