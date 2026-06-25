"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Process() {
  const { t, tm } = useLanguage();

  const steps = (tm("process.steps") as { number: string; title: string; description: string }[]);

  return (
    <section className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold tracking-widest text-primary uppercase">
            {t("process.label")}
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t("process.heading")}
          </h2>
          <p className="mt-4 text-lg text-muted">
            {t("process.description")}
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-5">
          {steps.map((step, index) => (
            <div key={step.number} className="relative flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-xl font-bold text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/30">
                {step.number}
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[calc(50%+2.5rem)] w-[calc(100%-5rem)] border-t-2 border-dashed border-primary/20" aria-hidden="true" />
              )}
              <h3 className="mt-6 text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
