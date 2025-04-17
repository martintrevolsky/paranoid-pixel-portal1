
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckIcon, XIcon } from "lucide-react";

type PlanType = "monthly" | "yearly";

const PricingPlans: React.FC = () => {
  const [planType, setPlanType] = useState<PlanType>("monthly");
  
  const plans = [
    {
      name: "Personal",
      description: "Perfect for individuals needing occasional privacy",
      monthlyPrice: 9.99,
      yearlyPrice: 99.99,
      features: [
        "1 temporary number at a time",
        "30 days number lifetime",
        "5 calls per day",
        "10 SMS per day",
        "Basic customer support",
        "Number from 10 countries"
      ],
      notIncluded: [
        "Premium country codes",
        "Number customization",
        "Priority support"
      ],
      popular: false,
      gradient: "from-primary/80 to-accent/80"
    },
    {
      name: "Business",
      description: "Ideal for professionals and small teams",
      monthlyPrice: 24.99,
      yearlyPrice: 249.99,
      features: [
        "5 temporary numbers at a time",
        "90 days number lifetime",
        "Unlimited calls",
        "Unlimited SMS",
        "Priority support",
        "Number from 50 countries",
        "Number customization",
        "Premium country codes"
      ],
      notIncluded: [
        "Full anonymity protocol",
        "Dedicated account manager"
      ],
      popular: true,
      gradient: "from-primary to-accent"
    },
    {
      name: "Custom",
      description: "Advanced solutions for organizations with specific needs",
      monthlyPrice: null,
      yearlyPrice: null,
      customPrice: "Contact Us",
      features: [
        "Unlimited temporary numbers",
        "Custom number lifetime",
        "Unlimited calls & SMS",
        "Dedicated account manager",
        "Custom integration options",
        "Global number access",
        "Full anonymity protocol",
        "Enterprise-grade security"
      ],
      notIncluded: [],
      popular: false,
      gradient: "from-accent/80 to-primary/80"
    }
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Choose Your Paranoia Level
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Select the right plan for your privacy needs. All plans include our core paranoid protection features.
          </p>
          
          {/* Pricing Toggle */}
          <div className="mt-8 inline-flex items-center p-1 bg-secondary rounded-full">
            <button
              onClick={() => setPlanType("monthly")}
              className={`py-2 px-6 rounded-full transition-all ${
                planType === "monthly"
                  ? "bg-primary text-white shadow-lg"
                  : "text-foreground/70 hover:text-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setPlanType("yearly")}
              className={`py-2 px-6 rounded-full transition-all ${
                planType === "yearly"
                  ? "bg-primary text-white shadow-lg"
                  : "text-foreground/70 hover:text-foreground"
              }`}
            >
              Yearly
              <span className="ml-2 text-xs py-0.5 px-2 bg-accent text-white rounded-full">
                Save 15%
              </span>
            </button>
          </div>
        </div>
        
        {/* Plan Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 ${
                plan.popular ? "transform scale-105 z-10" : ""
              }`}
            >
              {/* Card Background with Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-br opacity-30 animate-pulse-glow" style={{background: `linear-gradient(to bottom right, hsl(var(--primary)), hsl(var(--accent)))`}}></div>
              
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-accent text-white text-xs font-bold py-1 px-3 rounded-bl-lg">
                  Most Popular
                </div>
              )}
              
              <div className="relative p-6 bg-card border border-border/50 h-full rounded-xl flex flex-col">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-foreground/70 mb-4">{plan.description}</p>
                
                <div className="mb-6">
                  {plan.customPrice ? (
                    <div className="text-3xl font-bold">{plan.customPrice}</div>
                  ) : (
                    <>
                      <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        ${planType === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
                      </div>
                      <div className="text-foreground/60 text-sm">
                        per {planType === "monthly" ? "month" : "year"}
                      </div>
                    </>
                  )}
                </div>
                
                <Button className={`mb-6 bg-gradient-to-r ${plan.gradient} hover:opacity-90`}>
                  Get Started
                </Button>
                
                <div className="space-y-4 flex-grow">
                  <div className="font-medium">Includes:</div>
                  <ul className="space-y-2">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckIcon size={18} className="text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {plan.notIncluded.length > 0 && (
                    <>
                      <div className="font-medium mt-4">Not included:</div>
                      <ul className="space-y-2">
                        {plan.notIncluded.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-foreground/60">
                            <XIcon size={18} className="text-muted-foreground mr-2 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
