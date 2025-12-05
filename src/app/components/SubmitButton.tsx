"use client";

type SubmitButtonProps = {
  status: "idle" | "loading" | "success" | "error";
  disabled?: boolean;
};

const ariaLabels: Record<SubmitButtonProps["status"], string> = {
  loading: "Submitting...",
  success: "Success!",
  error: "Error",
  idle: "Submit",
};

export function SubmitButton({ status, disabled }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={disabled || status === "loading"}
      className={`email-submit-icon ${status}`}
      aria-label={ariaLabels[status]}
    >
      {status === "loading" ? (
        <svg
          className="spinner"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        >
          <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
          <path d="M12 2a10 10 0 0 1 10 10" />
        </svg>
      ) : status === "success" ? (
        <svg
          className="checkmark"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="4 12 9 17 20 6" />
        </svg>
      ) : status === "error" ? (
        <svg
          className="error-x"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="6" y1="6" x2="18" y2="18" />
          <line x1="18" y1="6" x2="6" y2="18" />
        </svg>
      ) : (
        <svg
          className="arrow"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      )}
    </button>
  );
}

