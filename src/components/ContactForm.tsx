"use client";

import { useState, FormEvent } from "react";

const BOOKING_URL =
  "https://link.protax.ai/widget/form/Ylq3ANkARykg5ZIaCIkV";

type SubmitState = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full px-4 py-[14px] text-[16px] text-ink bg-bone border rounded-[2px] transition-colors duration-200 outline-none focus:border-plum resize-y";
const inputBorder = "border-plum/15";
const inputBorderError = "border-aubergine";

export default function ContactForm() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    website: "",
  });
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [generalError, setGeneralError] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  }

  function validateClient(): boolean {
    const errors: Record<string, string> = {};
    if (!values.name.trim() || values.name.trim().length < 2) {
      errors.name = "Name is required.";
    }
    if (
      !values.email.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())
    ) {
      errors.email = "A valid email address is required.";
    }
    if (!values.message.trim() || values.message.trim().length < 10) {
      errors.message = "Please include a message of at least 10 characters.";
    }
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setGeneralError("");

    if (!validateClient()) return;

    setSubmitState("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "same-origin",
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.errors) {
          setFieldErrors(data.errors);
          setSubmitState("idle");
        } else {
          setGeneralError(
            data.error ||
              "Something went wrong. Please try again or call the office directly."
          );
          setSubmitState("error");
        }
        return;
      }

      setSubmitState("success");
    } catch {
      setGeneralError(
        "Something went wrong. Please try again or call the office directly."
      );
      setSubmitState("error");
    }
  }

  if (submitState === "success") {
    return (
      <div>
        <p className="font-display text-[32px] font-medium text-plum leading-[1.2]">
          Thank you.
        </p>
        <p className="mt-4 text-[17px] text-ink/85 max-w-[480px] leading-[1.55]">
          We will respond within one business day. In the meantime, you are
          welcome to schedule an introduction directly using the link below.
        </p>
        <div className="mt-6">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener"
            className="text-[15px] font-medium text-plum transition-colors duration-200 hover:text-teal"
          >
            Schedule an introduction &rarr;
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="flex flex-col gap-6">
        {/* Name */}
        <div>
          <label
            htmlFor="contact-name"
            className="block text-[13px] font-medium uppercase tracking-[0.1em] text-plum mb-2"
          >
            Name <span className="text-aubergine">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            value={values.name}
            onChange={handleChange}
            aria-describedby={fieldErrors.name ? "name-error" : undefined}
            className={`${inputClass} ${fieldErrors.name ? inputBorderError : inputBorder}`}
          />
          {fieldErrors.name && (
            <p id="name-error" className="mt-1 text-[13px] text-aubergine">
              {fieldErrors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="contact-email"
            className="block text-[13px] font-medium uppercase tracking-[0.1em] text-plum mb-2"
          >
            Email <span className="text-aubergine">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            aria-describedby={fieldErrors.email ? "email-error" : undefined}
            className={`${inputClass} ${fieldErrors.email ? inputBorderError : inputBorder}`}
          />
          {fieldErrors.email && (
            <p id="email-error" className="mt-1 text-[13px] text-aubergine">
              {fieldErrors.email}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="contact-phone"
            className="block text-[13px] font-medium uppercase tracking-[0.1em] text-plum mb-2"
          >
            Phone (optional)
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            value={values.phone}
            onChange={handleChange}
            className={`${inputClass} ${inputBorder}`}
          />
        </div>

        {/* Company */}
        <div>
          <label
            htmlFor="contact-company"
            className="block text-[13px] font-medium uppercase tracking-[0.1em] text-plum mb-2"
          >
            Company (optional)
          </label>
          <input
            id="contact-company"
            name="company"
            type="text"
            value={values.company}
            onChange={handleChange}
            className={`${inputClass} ${inputBorder}`}
          />
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="contact-message"
            className="block text-[13px] font-medium uppercase tracking-[0.1em] text-plum mb-2"
          >
            Message <span className="text-aubergine">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={4}
            value={values.message}
            onChange={handleChange}
            aria-describedby={
              fieldErrors.message ? "message-error" : undefined
            }
            className={`${inputClass} ${fieldErrors.message ? inputBorderError : inputBorder}`}
            style={{ resize: "vertical" }}
          />
          {fieldErrors.message && (
            <p id="message-error" className="mt-1 text-[13px] text-aubergine">
              {fieldErrors.message}
            </p>
          )}
        </div>

        {/* Honeypot */}
        <input
          name="website"
          type="text"
          value={values.website}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          style={{ position: "absolute", left: "-9999px", opacity: 0 }}
        />
      </div>

      {/* General error */}
      {generalError && (
        <p className="mt-6 text-[14px] text-aubergine">{generalError}</p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={submitState === "submitting"}
        className={`mt-8 w-full sm:w-auto text-[14px] font-medium px-[24px] py-[14px] rounded-[2px] transition-colors duration-200 ${
          submitState === "submitting"
            ? "bg-plum/50 text-cream cursor-not-allowed"
            : "bg-plum text-cream hover:bg-aubergine cursor-pointer"
        }`}
      >
        {submitState === "submitting" ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
