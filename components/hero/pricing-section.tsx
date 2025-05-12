import { CheckCircle } from "lucide-react";
import { Button } from "../ui/button";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Great for personal use or trying Summo.",
    features: [
      "5 summaries/month",
      "Basic summary output",
      "Up to 10 pages per PDF",
    ],
    buttonText: "Get Started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$12/mo",
    description: "For professionals who need more power.",
    features: [
      "Unlimited summaries",
      "Advanced summary engine",
      "Up to 100 pages per PDF",
      "Export as text or PDF",
    ],
    buttonText: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Team",
    price: "$29/mo",
    description: "For teams who want collaboration and support.",
    features: [
      "All Pro features",
      "Team workspace",
      "Share summaries",
      "Priority support",
    ],
    buttonText: "Contact Sales",
    highlighted: false,
  },
];

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="w-full bg-gray-50 py-20 px-4 sm:px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Choose Your Plan
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-16">
          Whether you're summarizing occasionally or daily — we've got a plan
          for you.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl p-8 border ${
                plan.highlighted
                  ? "border-rose-500 bg-white shadow-lg scale-105"
                  : "border-gray-200 bg-white"
              } transition`}
            >
              {plan.highlighted && (
                <div className="mb-4 inline-block rounded-full bg-rose-100 text-rose-600 px-3 py-1 text-sm font-medium">
                  Most Popular
                </div>
              )}

              <h3 className="text-xl font-semibold text-gray-900">
                {plan.name}
              </h3>
              <p className="text-3xl font-bold mt-2 text-gray-900">
                {plan.price}
              </p>
              <p className="text-gray-600 mt-2 mb-6">{plan.description}</p>

              <ul className="space-y-3 text-left mb-6">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-sm text-gray-700"
                  >
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full rounded-full text-white ${
                  plan.highlighted
                    ? "bg-gradient-to-r from-rose-600 to-rose-400 hover:from-rose-700 hover:to-rose-500"
                    : "bg-gray-800 hover:bg-gray-900"
                }`}
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
