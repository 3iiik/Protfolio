"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { t, tm, locale } = useLanguage();
  const isRtl = locale === "ar";

  const faqs = (tm("faq.items") as { question: string; answer: string }[]);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold tracking-widest text-primary uppercase">
            {t("faq.label")}
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t("faq.heading")}
          </h2>
          <p className="mt-4 text-lg text-muted">
            {t("faq.description")}
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-3xl divide-y divide-border">
          {faqs.map((faq, index) => (
            <div key={index} className="py-5">
              <button
                type="button"
                onClick={() => toggle(index)}
                className={`flex w-full items-center justify-between ${isRtl ? "text-right" : "text-left"}`}
                aria-expanded={openIndex === index}
              >
                <span className="text-base font-semibold text-foreground pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`h-5 w-5 flex-shrink-0 text-muted transition-transform ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="mt-3 pr-8">
                  <p className="text-sm leading-relaxed text-muted">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
