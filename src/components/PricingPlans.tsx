import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckIcon, XIcon } from "lucide-react";
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type PlanType = "monthly" | "yearly" | "payu";

const PricingPlans: React.FC = () => {
  const [planType, setPlanType] = useState<PlanType>("monthly");
  const [simQuantity, setSimQuantity] = useState(1);
  const [duration, setDuration] = useState(7); // days
  
  const plans = [
    {
      name: 'UK Plan',
      price: '15€',
      period: 'month',
      features: ['Unlimited SMS Incoming', 'Non-VOIP Number', 'Verification Ready'],
      comingSoon: ['Calls', 'Outgoing SMS'],
      highlight: false,
    },
    {
      name: 'US Plan',
      price: '$20',
      period: 'month',
      features: ['Unlimited SMS Incoming', 'Non-VOIP Number', 'Verification Ready'],
      comingSoon: ['Calls', 'Outgoing SMS'],
      highlight: true,
    },
    {
      name: 'European Plan',
      price: '10€',
      period: 'month',
      features: ['Unlimited SMS Incoming', 'Non-VOIP Number', 'Verification Ready'],
      comingSoon: ['Calls', 'Outgoing SMS'],
      highlight: false,
    },
  ];

  const yearlyPlans = [
    {
      name: 'US Yearly',
      price: '$99.99',
      period: 'year',
      features: ['Unlimited SMS Incoming', 'Non-VOIP Number', 'Verification Ready'],
      comingSoon: ['Calls', 'Outgoing SMS'],
      highlight: true,
    },
    {
      name: 'UK Yearly',
      price: '99.99€',
      period: 'year',
      features: ['Unlimited SMS Incoming', 'Non-VOIP Number', 'Verification Ready'],
      comingSoon: ['Calls', 'Outgoing SMS'],
      highlight: false,
    },
    {
      name: 'European Yearly',
      price: '99.99€',
      period: 'year',
      features: ['Unlimited SMS Incoming', 'Non-VOIP Number', 'Verification Ready'],
      comingSoon: ['Calls', 'Outgoing SMS'],
      highlight: false,
    },
  ];

  const payAsYouGoPlans = [
    {
      name: 'Pay-as-you-go',
      price: '$5',
      period: 'per SIM',
      features: ['Non-VOIP Number', 'Verification Ready', 'Flexible Duration'],
      highlight: true,
    }
  ];

  // Pay-as-you-go Tiers
  const payAsYouGoTiers = [
    {
      tier: "Tier 1",
      price: "1.5 EUR",
      period: "OTP",
      features: [
        "Top-tier apps (WhatsApp, Telegram, PayPal, Google)",
        "Preferred: UK, US (+30%), Austria, Denmark",
        "Refund if not supported",
      ],
      highlight: true,
    },
    {
      tier: "Tier 2",
      price: "1 EUR",
      period: "OTP",
      features: [
        "Popular social apps (Instagram, YouTube, TikTok)",
        "Preferred: Poland, UK",
        "Refund if not supported",
      ],
      highlight: false,
    },
    {
      tier: "Tier 3",
      price: "0.89 EUR",
      period: "OTP",
      features: [
        "All other apps",
        "Preferred: Poland",
        "Refund if not supported",
      ],
      highlight: false,
    },
  ];

  // Animation variants for plan cards
  const cardVariants = {
    initial: { scale: 1, boxShadow: '0 2px 16px 0 rgba(0,0,0,0.10)' },
    hover: {
      scale: 1.06,
      boxShadow: '0 8px 32px 0 rgba(120,0,255,0.18), 0 2px 16px 0 rgba(0,0,0,0.10)',
      transition: { type: 'spring', stiffness: 300, damping: 20 },
    },
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
          <motion.h2
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Choose Your Plan
          </motion.h2>
          <div className="flex justify-center space-x-4 mb-8">
            {["monthly", "yearly", "payu"].map((type) => (
              <motion.button
                key={type}
                onClick={() => setPlanType(type as PlanType)}
                className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/60 focus:ring-offset-2 focus:ring-offset-background shadow-md
                  ${planType === type ? "bg-gradient-to-r from-primary to-accent text-white scale-105 shadow-lg" : "bg-card text-muted-foreground hover:bg-primary/10 hover:text-primary"}`}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {type === "monthly" && "Monthly"}
                {type === "yearly" && "Yearly"}
                {type === "payu" && "Pay-as-you-go"}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {planType === "payu" ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {payAsYouGoTiers.map((plan, index) => (
                <motion.div
                  key={plan.tier}
                  variants={cardVariants}
                  initial="initial"
                  whileHover="hover"
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                  className={`relative p-8 rounded-xl min-h-[370px] flex flex-col justify-between transition-all duration-300 ease-out cursor-pointer select-none backdrop-blur-md
                    ${
                      plan.highlight
                        ? "bg-primary/10 border-2 border-primary"
                        : "bg-card/80 border border-primary/10 shadow-lg"
                    }`}
                >
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-foreground">{plan.tier}</h3>
                    <div className="mb-6 flex items-end">
                      <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                      <span className="text-muted-foreground text-lg ml-2">/{plan.period}</span>
                    </div>
                    <ul className="space-y-4 mb-6">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-center">
                          <Check className="w-5 h-5 text-primary mr-2" />
                          <span className="text-base text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div
              className="flex justify-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <Button
                className="px-8 py-3 bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white font-semibold rounded-lg shadow-md text-lg"
                onClick={e => {
                  e.preventDefault();
                  const el = document.getElementById('faq-tier1');
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }}
              >
                Learn More
              </Button>
            </motion.div>
            <motion.div
              className="text-center text-white/80 text-sm mb-4 bg-card/60 rounded-lg p-4 border border-primary/10 shadow-inner backdrop-blur-md max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <span className="font-bold">All HQ numbers</span> — Preferred country tier guarantees number being supported, and refund if it doesn't work. Otherwise, we do not guarantee the number working.
            </motion.div>
          </>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              {(planType === "monthly" ? plans : yearlyPlans).map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30, scale: 0.97 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                  className={`relative p-8 rounded-lg min-h-[370px] flex flex-col justify-between transition-all duration-300 ease-out cursor-pointer select-none ${
                    plan.highlight
                      ? 'bg-primary/10 border-2 border-primary'
                      : 'bg-card'
                  }`}
                >
                  <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">/{plan.period}</span>
                  </div>
                  <ul className="space-y-4 mb-6">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <Check className="w-5 h-5 text-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  {plan.comingSoon.length > 0 && (
                    <div className="text-sm text-muted-foreground">
                      Coming soon: {plan.comingSoon.join(', ')}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default PricingPlans;
