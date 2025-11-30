import { Zap, Shield, Globe } from "lucide-react";
import { useReveal } from "../hooks/useReveal";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Experience blazing fast performance that keeps your users engaged and productive."
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Built with security first. Your data is protected with industry-leading standards."
  },
  {
    icon: Globe,
    title: "Global Scale",
    description: "Reach users anywhere in the world with our globally distributed infrastructure."
  }
];

export default function Advantages() {
  const { ref, visible } = useReveal();

  return (
    <section
      id="advantages"
      ref={ref}
      className={`px-6 py-20 bg-white transition-opacity duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4 text-3xl font-semibold">
            Everything You Need
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Powerful features designed to help you succeed in today's competitive landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="p-6 rounded-xl border border-gray-200 hover:border-indigo-300 hover:shadow-lg transition-all bg-gray-50"
              >
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-indigo-600" />
                </div>

                <h3 className="text-gray-900 mb-2 text-xl font-medium">
                  {feature.title}
                </h3>

                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
