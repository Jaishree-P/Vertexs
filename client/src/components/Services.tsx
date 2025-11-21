import { Card } from "@/components/ui/card";
import { ArrowRight, Brain, BarChart, Code, Cloud, Palette, Megaphone, Boxes, MessageSquare } from "lucide-react";

const services = [
  
  {
    icon: BarChart,
    title: "Training",
    description: "Advanced predictive analytics, big data processing, and actionable insights to drive data-informed strategies.",
    link: "#contact",
  },
  {
    icon: Code,
    title: "Talent Acquisition",
    description: "Scalable, responsive applications built with modern frameworks and best practices for optimal user experience.",
    link: "#contact",
  },
];

export function Services() {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById("contact");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="services" className="py-24 lg:py-32 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technology solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className="p-8 hover-elevate transition-all duration-300 border-card-border group"
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
                data-testid={`card-service-${service.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
              >
                <div className="mb-6 p-4 bg-primary/10 rounded-lg inline-block">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <a
                  href={service.link}
                  onClick={scrollToContact}
                  className="inline-flex items-center text-sm font-medium text-primary group-hover:translate-x-1 transition-transform"
                  data-testid={`link-service-learn-more-${service.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">
            Don't see what you're looking for? We offer custom solutions tailored to your unique challenges.
          </p>
          <a
            href="#contact"
            onClick={scrollToContact}
            className="inline-flex items-center text-primary font-medium hover-elevate px-6 py-3 rounded-md transition-all"
            data-testid="link-discuss-custom-solution"
          >
            Discuss Your Custom Solution
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
