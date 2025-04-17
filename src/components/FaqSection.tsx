
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection: React.FC = () => {
  const faqItems = [
    {
      question: "How anonymous are these temporary numbers?",
      answer:
        "Our temporary numbers provide complete anonymity. We don't require personal information during signup, accept cryptocurrency payments, and maintain zero logs of your communication. Our infrastructure is designed with privacy as the foundation, not an afterthought."
    },
    {
      question: "Can I receive SMS verification codes with these numbers?",
      answer:
        "Yes! Our temporary numbers fully support SMS verification codes from most services. This makes them perfect for creating accounts on platforms without revealing your actual phone number. However, some financial services may block temporary numbers as part of their security measures."
    },
    {
      question: "What happens when my number expires?",
      answer:
        "When your temporary number expires, it's immediately removed from our system along with any associated data. The number returns to our pool and may be reassigned to another user. We don't store any call logs, messages, or other communication data after expiration."
    },
    {
      question: "Can I extend the lifetime of my temporary number?",
      answer:
        "Yes, you can extend the lifetime of your temporary number before it expires through your account dashboard. This allows you to maintain the same number for longer periods if needed. Business and Custom plans offer longer initial lifetimes for numbers."
    },
    {
      question: "Are there any usage limitations?",
      answer:
        "Usage limitations depend on your plan. The Personal plan has daily limits on calls and SMS. Business and Custom plans offer unlimited usage. All plans are subject to our fair use policy to prevent abuse."
    },
    {
      question: "Is using a temporary phone number legal?",
      answer:
        "Using temporary phone numbers is completely legal for legitimate purposes. However, they should not be used for fraudulent activities, harassment, or any illegal actions. We cooperate with authorities in cases of reported illegal usage, though our limited data collection means we often have minimal information to provide."
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Everything you need to know about our paranoid-level temporary phone numbers.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-border/50">
                <AccordionTrigger className="text-left text-lg font-medium py-4 hover:text-primary transition-colors">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
