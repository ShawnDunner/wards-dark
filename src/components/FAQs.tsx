const faqItems = [
  {
    question: "How often should I service my vehicle?",
    answer:
      "Most vehicles should be serviced every 10,000 km or every 6 months, whichever comes first.",
  },
  {
    question: "Do you provide log book servicing?",
    answer:
      "Yes, we provide manufacturer-compliant log book servicing to help maintain your warranty.",
  },
  {
    question: "Can I get a same-day booking?",
    answer:
      "Same-day bookings can be available depending on workshop capacity. Use the booking form to request a date.",
  },
];

const FAQs = () => {
  return (
    <section id="faqs" className="px-4 py-20">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-4xl font-bold">
            Frequently Asked <span className="bg-gradient-primary bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-muted-foreground">Quick answers to common booking and servicing questions.</p>
        </div>

        <div className="space-y-4">
          {faqItems.map((faq) => (
            <details key={faq.question} className="rounded-lg border border-border bg-card p-5">
              <summary className="cursor-pointer list-none text-lg font-semibold">{faq.question}</summary>
              <p className="mt-3 text-muted-foreground">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
