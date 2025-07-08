
//src/landing/components
import { useState } from "react";
import content  from "./content";
import { getSpotifyAuthURL } from "../utils/spotify";

export const HeroSection = ({ t }) => (
  <section className="px-6 py-16 bg-gray-50 text-center">
    <h1 className="text-4xl font-bold">{t.hero.title}</h1>
    <p className="text-lg mt-4">{t.hero.subtitle}</p>
    <button className="mt-6 px-6 py-3 bg-black text-white rounded-md" onClick={() => window.location.href = getSpotifyAuthURL()}>
        {t.hero.button}
    </button>
  </section>
);

 export const FeaturesSection = ({ t }) => (
  <section className="px-6 py-12 bg-white text-center">
    <h2 className="text-3xl font-semibold">{t.features.title}</h2>
    <ul className="mt-6 space-y-3">
      {t.features.items.map((item, i) => (
        <li key={i} className="text-gray-700">{item}</li>
      ))}
    </ul>
  </section>
);
 export const TestimonialsSection = ({ t }) => (
  <section className="px-6 py-16 bg-gray-100">
    <h2 className="text-3xl font-semibold text-center">{t.testimonials.title}</h2>
    <div className="mt-10 grid gap-6 md:grid-cols-3">
      {t.testimonials.items.map((testimonial, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-lg shadow-md text-sm text-gray-700"
        >
          <p className="italic">"{testimonial.text}"</p>
          <div className="mt-4 text-right font-semibold">– {testimonial.author}</div>
        </div>
      ))}
    </div>
  </section>
);
export const FAQSection = ({ t }) => (
  <section className="px-6 py-16 bg-white">
    <h2 className="text-3xl font-semibold text-center">{t.faq.title}</h2>
    <div className="mt-10 max-w-2xl mx-auto space-y-6">
      {t.faq.items.map((item, i) => (
        <details key={i} className="border-b pb-4">
          <summary className="cursor-pointer font-medium text-lg">
            {item.q}
          </summary>
          <p className="mt-2 text-gray-600">{item.a}</p>
        </details>
      ))}
    </div>
  </section>
);

export const FormSection = ({ t }) => (
  <section className="px-6 py-16 bg-gray-50">
    <h2 className="text-3xl font-semibold text-center">{t.form.title}</h2>
    <p className="text-center mt-2 text-gray-600">{t.form.description}</p>
    <form className="mt-8 max-w-md mx-auto space-y-4">
      <input
        type="text"
        placeholder={t.form.name}
        className="w-full border px-4 py-2 rounded-md"
      />
      <input
        type="email"
        placeholder={t.form.email}
        className="w-full border px-4 py-2 rounded-md"
      />
      <textarea
        placeholder={t.form.message}
        className="w-full border px-4 py-2 rounded-md"
      />
      <button
        type="submit"
        className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
      >
        {t.form.button}
      </button>
    </form>
  </section>
);

export const CTASection = ({ t }) => (
  <section className="px-6 py-16 bg-black text-white text-center">
    <h2 className="text-3xl font-semibold">{t.cta.title}</h2>
    <p className="mt-4 text-lg">{t.cta.subtitle}</p>
    <button className="mt-6 bg-white text-black px-6 py-3 rounded-md hover:bg-gray-200 transition">
      {t.cta.button}
    </button>
    <div className="mt-4 text-sm text-gray-400">{t.cta.storeNotice}</div>
  </section>
);


