"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Services() {
  const { t, tm, locale } = useLanguage();
  const isRtl = locale === "ar";

  const services = [
    {
      key: "0",
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
        </svg>
      ),
    },
    {
      key: "1",
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
        </svg>
      ),
    },
    {
      key: "2",
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.41a2.25 2.25 0 013.182 0l2.909 2.91m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>
      ),
    },
    {
      key: "3",
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
        </svg>
      ),
    },
    {
      key: "4",
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182M9.736 4.44L12 6.704l2.264-2.264" />
        </svg>
      ),
    },
  ];

  const items = services.map((s, i) => ({
    ...s,
    data: (tm("services.items") as Record<string, unknown>[])[i],
  }));

  return (
    <section id="services" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold tracking-widest text-primary uppercase">
            {t("services.label")}
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t("services.heading")}
          </h2>
          <p className="mt-4 text-lg text-muted">
            {t("services.description")}
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((service) => {
            const itemData = service.data as { title: string; description: string; benefits: string[] };
            return (
              <article
                key={service.key}
                className="group flex flex-col rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className={`flex items-center gap-4 ${isRtl ? "flex-row-reverse" : ""}`}>
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-primary-light text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/20">
                    {service.icon}
                  </div>
                  <h3 className={`text-xl font-semibold text-foreground ${isRtl ? "text-right" : ""}`}>
                    {itemData.title}
                  </h3>
                </div>
                <p className={`mt-4 flex-1 text-sm leading-relaxed text-muted ${isRtl ? "text-right" : ""}`}>
                  {itemData.description}
                </p>
                <ul className="mt-6 space-y-2">
                  {itemData.benefits.map((benefit: string) => (
                    <li key={benefit} className="flex items-center gap-2 text-sm text-muted">
                      <svg className="h-4 w-4 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
