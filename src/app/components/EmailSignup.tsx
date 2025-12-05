"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import { SubmitButton } from "./SubmitButton";

type Status = "idle" | "loading" | "success" | "error";

export function EmailSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

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
        setEmail("");
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

  return (
    <div className="card email-signup-card">
      <h2>Join our community</h2>
      <p>Sign up with your email address to receive news and updates.</p>

      <form onSubmit={handleSubmit} className="email-form">
        <input
          type="email"
          value={email}
          onChange={handleChange}
          placeholder="Email Address"
          disabled={status === "loading"}
          className="email-input"
          aria-label="Email address"
          required
        />
        <SubmitButton status={status} disabled={!email.trim()} />
      </form>
    </div>
  );
}

