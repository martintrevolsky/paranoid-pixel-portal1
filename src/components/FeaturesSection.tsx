import { motion } from 'framer-motion';
import { Shield, Globe, Lock, Zap } from 'lucide-react';

const features = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Non-VOIP Numbers",
    description: "All our numbers are non-VOIP, ensuring maximum compatibility with verification systems.",
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Global Coverage",
    description: "Numbers available from multiple countries including US, UK, and European regions.",
  },
  {
    icon: <Lock className="w-8 h-8" />,
    title: "Secure & Private",
    description: "Your data is encrypted and protected with enterprise-grade security measures.",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Instant Activation",
    description: "Get your number instantly after payment, no waiting time required.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function FeaturesSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-xl text-muted-foreground">
            Experience the best in secure number verification
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative p-8 rounded-lg bg-card border border-border/50 hover:border-primary/50 transition-colors"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-lg" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
