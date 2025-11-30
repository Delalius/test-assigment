import { Star } from "lucide-react";
import { useReveal } from "../hooks/useReveal";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    content:
      "This platform has completely transformed how we work. The ease of use and powerful features make it an essential tool for our team.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Product Designer",
    content:
      "I've tried many solutions, but this one stands out. The attention to detail and user experience is exceptional.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director",
    content:
      "Our productivity has increased significantly since we started using this platform. Highly recommended for any growing business.",
    rating: 5
  }
];

export default function Reviews() {
  const { ref, visible } = useReveal();

  return (
    <section
      id="testimonials"
      ref={ref}
      className={`px-6 py-20 bg-gray-50 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-gray-600 mb-6">"{testimonial.content}"</p>

              <div>
                <div className="text-gray-900">{testimonial.name}</div>
                <div className="text-gray-500">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
