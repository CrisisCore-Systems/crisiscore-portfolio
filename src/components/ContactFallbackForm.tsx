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

  const yahooHref = useMemo(
    () =>
      `https://compose.mail.yahoo.com/?to=${encodeURIComponent(to)}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
    [to, subject, body]
  );

  const aolHref = useMemo(
    () =>
      `https://mail.aol.com/d/compose-message?to=${encodeURIComponent(to)}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
    [to, subject, body]
  );

  const protonHref = useMemo(
    () =>
      `https://mail.proton.me/u/0/all-mail?compose=new&to=${encodeURIComponent(to)}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
    [to, subject, body]
  );

  const providerLinks = [
    { label: "Gmail", href: gmailHref },
    { label: "Outlook", href: outlookHref },
    { label: "Yahoo", href: yahooHref },
    { label: "AOL", href: aolHref },
    { label: "Proton", href: protonHref },
  ];

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
        <label className="grid gap-2 text-sm text-white/80" htmlFor="contact-name">
          <span>Name</span>
          <input
            id="contact-name"
            className="cc-field"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label className="grid gap-2 text-sm text-white/80" htmlFor="contact-org">
          <span>Organization <span className="text-white/45">(optional)</span></span>
          <input
            id="contact-org"
            className="cc-field"
            placeholder="Organization"
            value={org}
            onChange={(e) => setOrg(e.target.value)}
          />
        </label>
      </div>

      <label className="grid gap-2 text-sm text-white/80" htmlFor="contact-reply-email">
        <span>Reply email</span>
        <input
          id="contact-reply-email"
          className="cc-field"
          type="email"
          placeholder="Reply email"
          value={replyTo}
          onChange={(e) => setReplyTo(e.target.value)}
        />
      </label>

      <label className="grid gap-2 text-sm text-white/80" htmlFor="contact-context">
        <span>Context</span>
        <textarea
          id="contact-context"
          className="cc-field min-h-28"
          placeholder="What you are building and who it serves"
          value={context}
          onChange={(e) => setContext(e.target.value)}
        />
      </label>

      <label className="grid gap-2 text-sm text-white/80" htmlFor="contact-constraints">
        <span>Constraints</span>
        <textarea
          id="contact-constraints"
          className="cc-field min-h-24"
          placeholder="Time, budget, security, compliance, or access constraints"
          value={constraints}
          onChange={(e) => setConstraints(e.target.value)}
        />
      </label>

      <label className="grid gap-2 text-sm text-white/80" htmlFor="contact-links">
        <span>Links / artifacts <span className="text-white/45">(optional)</span></span>
        <textarea
          id="contact-links"
          className="cc-field min-h-20"
          placeholder="Repo, docs, deployment, screenshots, or source records"
          value={links}
          onChange={(e) => setLinks(e.target.value)}
        />
      </label>

      <button
        type="button"
        onClick={onCopy}
        className="cc-button cc-button-solid inline-flex items-center justify-center rounded-2xl border px-4 py-2 text-sm font-mono transition hover:-translate-y-0.5 hover:bg-white/[0.06] active:translate-y-0"
      >
        {copied ? "Copied" : "Copy inquiry text"}
      </button>

      <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
          Open A Draft In Webmail
        </div>
        <p className="mt-2 text-sm leading-relaxed text-white/65">
          Choose the inbox you already use. Each option opens a prefilled draft with the current inquiry details.
        </p>

        <div className="mt-4 grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
          {providerLinks.map((provider) => (
            <a
              key={provider.label}
              href={provider.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/12 bg-white/[0.03] px-4 py-3 text-left text-white/88 transition hover:-translate-y-0.5 hover:border-[color:var(--acc-line)] hover:bg-white/[0.06] hover:text-white"
            >
              <div className="text-sm font-medium">{provider.label}</div>
              <div className="mt-1 text-xs text-white/45">Open compose draft</div>
            </a>
          ))}
        </div>
      </div>

      <div className="text-xs text-white/50">
        Copy is the universal fallback. Webmail deep links depend on device and account state.
      </div>
    </div>
  );
}
