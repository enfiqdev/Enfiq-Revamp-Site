export interface FAQItem {
  question: string;
  answer: string;
}

// Frequently Asked Questions displayed in the FAQ accordion component
export const faqs: FAQItem[] = [
  {
    question: "What is your pricing?",
    answer:
      "We don't have a set-in-stone pricing because every client has different needs. This is why we offer a free consultation call where we will get to know you and your business. Only then would we be able to give you a pricing offer.",
  },
  {
    question: "How are you different than other agencies?",
    answer:
      "We combine deep technical expertise with strategic design thinking to deliver products that are not just beautiful but also performant and scalable. Our team works as an extension of yours.",
  },
  {
    question: "Do you offer a guarantee?",
    answer:
      "Yes — we stand behind our work. If you're not satisfied within the first milestone, we'll revise until it's right or provide a refund based on work completed.",
  },
];
