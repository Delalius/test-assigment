import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { useFbq } from "../hooks/useFbq";

export default function Banner() {
  const [visible, setVisible] = useState(false);
  const { track } = useFbq();

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const handleLead = () => {
    track("Lead", { source: "banner" });
    alert("Заявка відправлена! (Умовний FB pixel)");
  };

  return (
    <section
      className={`px-6 py-20 md:py-32 bg-linear-to-br from-blue-50 to-indigo-100 transition-opacity duration-700 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-gray-900 mb-6 text-4xl md:text-5xl font-bold">
          Build Something Amazing Today
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg">
          Transform your ideas into reality with our powerful platform.
          Simple, fast, and built for creators who want to make an impact.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleLead}
            className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </button>

          <button className="px-8 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-50 transition-colors border border-gray-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
