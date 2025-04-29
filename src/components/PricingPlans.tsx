import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckIcon, XIcon } from "lucide-react";
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

type PlanType = "monthly" | "yearly" | "payu";

const PricingPlans: React.FC = () => {
  const [planType, setPlanType] = useState<PlanType>("monthly");
  
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

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Monthly Plans</h2>
          <p className="text-muted-foreground">All numbers are non-VOIP and can be used for verifications</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative p-8 rounded-lg ${
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Yearly Plans</h2>
          <p className="text-muted-foreground">Save big with our yearly subscription plans</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {yearlyPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative p-8 rounded-lg ${
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
      </div>
    </section>
  );
};

export default PricingPlans;
