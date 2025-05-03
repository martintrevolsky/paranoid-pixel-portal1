import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "What is a non-VOIP number?",
    answer: "A non-VOIP number is a traditional phone number that is not associated with internet-based calling services. These numbers are more reliable for verifications as they are not flagged by most services.",
  },
  {
    question: "Can I use these numbers for verification?",
    answer: "Yes, all our numbers are non-VOIP and can be used for verification purposes on various platforms including social media, banking, and other services.",
  },
  {
    question: "How long does it take to get a number?",
    answer: "Numbers are activated instantly after payment. You'll receive your number details immediately in your account dashboard.",
  },
  {
    question: "What happens when my subscription ends?",
    answer: "When your subscription ends, you'll need to renew to continue using the number. If you don't renew, the number will be released back to the pool.",
  },
  {
    question: "Can I port my existing number?",
    answer: "Currently, we don't support number porting. All numbers are provided by us and cannot be transferred from other providers.",
  },
  // Tier 1 FAQ
  {
    question: <span id="faq-tier1">What are Tier 1 apps and how does pricing work?</span>,
    answer: (
      <span>
        <b>Tier 1</b> includes top-tier platforms like <b>WhatsApp, Telegram, PayPal, Google</b> with advanced verification systems.<br/>
        <b>Price:</b> <span className="text-primary font-bold">1.5 EUR / OTP</span><br/>
        <b>Preferred countries:</b> UK, US (+30%), Austria, Denmark<br/>
        <b>Guarantee:</b> Preferred country tier guarantees number support and refund if it doesn't work. Otherwise, no guarantee.<br/>
      </span>
    ),
  },
  // Tier 2 FAQ
  {
    question: <span id="faq-tier2">What are Tier 2 apps and how does pricing work?</span>,
    answer: (
      <span>
        <b>Tier 2</b> covers apps with lots of users, like <b>Instagram, YouTube, TikTok</b>.<br/>
        <b>Price:</b> <span className="text-primary font-bold">1 EUR / OTP</span><br/>
        <b>Preferred countries:</b> Poland, UK<br/>
        <b>Guarantee:</b> Preferred country tier guarantees number support and refund if it doesn't work. Otherwise, no guarantee.<br/>
      </span>
    ),
  },
  // Tier 3 FAQ
  {
    question: <span id="faq-tier3">What are Tier 3 apps and how does pricing work?</span>,
    answer: (
      <span>
        <b>Tier 3</b> includes all other apps.<br/>
        <b>Price:</b> <span className="text-primary font-bold">0.89 EUR / OTP</span><br/>
        <b>Preferred country:</b> Poland<br/>
        <b>Guarantee:</b> Preferred country tier guarantees number support and refund if it doesn't work. Otherwise, no guarantee.<br/>
      </span>
    ),
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground">
            Find answers to common questions about our service
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full p-6 text-left bg-card border border-border/50 rounded-lg hover:border-primary/50 transition-colors flex items-center justify-between"
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 bg-card/50 border border-border/50 rounded-b-lg">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
