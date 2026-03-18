import Footer from "@/components/Footer";

const faqItems = [
  {
    question: "How often should I service my vehicle?",
    answer:
      "Most vehicles should be serviced every 10,000 km or every 6 months, whichever comes first.",
  },
  {
    question: "Do you provide log book servicing?",
    answer:
      "Yes. We follow manufacturer service schedules to help maintain your warranty.",
  },
  {
    question: "Can I request a preferred booking date?",
    answer:
      "Yes. Submit your preferred date on the booking form and we will confirm workshop capacity.",
  },
  {
    question: "Do you perform safety certificate inspections?",
    answer:
      "Yes, we provide approved safety inspections and can advise on any required repairs.",
  },
  {
    question: "Do you work on all vehicle makes and models?",
    answer:
      "We service a wide range of makes and models. If you are unsure, call us and we will confirm.",
  },
  {
    question: "Can I supply my own parts?",
    answer:
      "Please contact us first. We can advise whether customer-supplied parts are suitable for your job.",
  },
  {
    question: "Do you check and replace batteries?",
    answer:
      "Yes. We test battery health, charging systems, and can replace batteries when needed.",
  },
  {
    question: "Do you do brake and coolant flushes?",
    answer:
      "Yes. We provide fluid services including brake flushes and coolant system maintenance.",
  },
  {
    question: "How long will my service take?",
    answer:
      "Time depends on the service type and parts required. We provide an estimated turnaround when booking.",
  },
  {
    question: "Can I call instead of filling in the booking form?",
    answer:
      "Absolutely. Call us on 07 3869 2222 and we can assist with your booking.",
  },
];

const Faqs = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="px-4 py-16">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <h1 className="mb-3 text-4xl font-bold md:text-5xl">Frequently Asked Questions</h1>
            <p className="text-lg text-muted-foreground">
              Helpful answers about booking, servicing, and what to expect.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {faqItems.map((faq) => (
              <article key={faq.question} className="rounded-xl border border-border bg-card p-6 shadow-purple">
                <h2 className="mb-2 text-xl font-semibold">{faq.question}</h2>
                <p className="text-muted-foreground">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Faqs;
