"use client";

import { useState, useEffect, FormEvent, ChangeEvent } from "react";
import { SubmitButton } from "./SubmitButton";

type Status = "idle" | "loading" | "success" | "error";

export function EmailSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [dismissed, setDismissed] = useState(false);
  const [fading, setFading] = useState(false);
  const [canShow, setCanShow] = useState(false);

  // On mobile, only show after scrolling past the App Store button
  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 800px)").matches;

    if (!isMobile) {
      setCanShow(true); // eslint-disable-line react-hooks/set-state-in-effect -- Required for SSR: checking window after hydration
      return;
    }

    const SCROLL_THRESHOLD = 500;

    function handleScroll() {
      setCanShow(window.scrollY >= SCROLL_THRESHOLD);
    }

    handleScroll(); // Check initial position
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (status !== "success") return;
    const fadeTimeout = setTimeout(() => setFading(true), 1500);
    const dismissTimeout = setTimeout(() => setDismissed(true), 2200);
    return () => {
      clearTimeout(fadeTimeout);
      clearTimeout(dismissTimeout);
    };
  }, [status]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
    if (status === "error") setStatus("idle");
  }

  if (dismissed || !canShow) return null;
  return (
    <div
      className={`floating-banner ${fading ? "fading" : ""}`}
      style={{
        backdropFilter: "blur(12px) saturate(180%)",
        WebkitBackdropFilter: "blur(12px) saturate(180%)",
      }}
    >
      <div className="banner-content">
        <div className="banner-text">
          <span className="banner-title">
            {status === "success" ? "Thanks for joining!" : "Join the Harmony Cloud Community"}
          </span>
          <span className="banner-subtitle">Thousands of musicians discovering harmony together.</span>
        </div>
        <form onSubmit={handleSubmit} className="banner-form">
          <input
            type="email"
            value={email}
            onChange={handleChange}
            placeholder="Enter your email"
            disabled={status === "loading" || status === "success"}
            className="banner-input"
            aria-label="Email address"
            required
          />
          <SubmitButton status={status} disabled={!email.trim()} />
        </form>
        <button
          className="banner-dismiss"
          onClick={() => setDismissed(true)}
          aria-label="Dismiss"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
