import { Scissors, Truck, Shield, Palette } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Scissors,
    title: "Premium Embroidery",
    description: "Hand-finished details with premium thread that lasts. Each stitch tells a story.",
    color: "text-neon-pink",
    bgColor: "bg-neon-pink/10",
  },
  {
    icon: Palette,
    title: "Unique Designs",
    description: "Original anime-inspired artwork you won't find anywhere else. Stand out from the crowd.",
    color: "text-neon-purple",
    bgColor: "bg-neon-purple/10",
  },
  {
    icon: Shield,
    title: "Quality Fabric",
    description: "400gsm heavyweight cotton that's soft, durable, and perfect for any season.",
    color: "text-neon-cyan",
    bgColor: "bg-neon-cyan/10",
  },
  {
    icon: Truck,
    title: "Fast Shipping",
    description: "48-hour express delivery available. Free shipping on orders over ₹100.",
    color: "text-green-400",
    bgColor: "bg-green-400/10",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Why{" "}
            <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
              Aura Threads
            </span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            We don't just sell hoodies. We craft wearable art for the anime community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-neon-purple/30 transition-colors group"
            >
              <CardContent className="p-6 text-center">
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${feature.bgColor} mb-4 group-hover:scale-110 transition-transform`}
                >
                  <feature.icon className={`w-7 h-7 ${feature.color}`} />
                </div>
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
