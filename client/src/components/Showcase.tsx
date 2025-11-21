import { Card } from "@/components/ui/card";
import { TrendingUp, CheckCircle2 } from "lucide-react";
import mobileApp from "@assets/generated_images/Mobile_app_case_study_b053494d.png";
import ecommerce from "@assets/generated_images/E-commerce_web_case_study_03318fdb.png";
import cloudDashboard from "@assets/generated_images/Cloud_DevOps_case_study_017d2a60.png";

const caseStudies = [];

export function Showcase() {
  return (
    <section id="showcase" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Success <span className="text-primary">Stories</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Real results from real clients who trusted us to transform their business
          </p>
        </div>

        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <div
              key={study.title}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <Card className="overflow-hidden border-card-border hover-elevate transition-all duration-300">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-auto object-cover"
                    data-testid={`img-case-study-${study.title.toLowerCase().replace(/\s+/g, '-')}`}
                  />
                </Card>
              </div>

              <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary">
                  {study.industry}
                </div>

                <h3 className="text-3xl font-bold text-foreground">
                  {study.title}
                </h3>

                <div className="flex items-baseline gap-2">
                  <TrendingUp className="w-6 h-6 text-primary" />
                  <span className="text-4xl font-bold text-primary">{study.metric}</span>
                  <span className="text-lg text-muted-foreground">{study.metricLabel}</span>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  {study.description}
                </p>

                <div className="space-y-3 pt-4">
                  <h4 className="font-semibold text-foreground">Key Results:</h4>
                  {study.results.map((result) => (
                    <div key={result} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{result}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 text-sm text-muted-foreground italic">
                  "{study.client}"
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Card className="p-12 bg-gradient-to-br from-primary/5 to-chart-2/5 border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have transformed their business with our solutions
            </p>
            <a
              href="#contact"
              onClick={(e) => {
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
              }}
              className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover-elevate active-elevate-2 transition-all border border-primary-border"
              data-testid="link-start-your-project"
            >
              Start Your Project Today
            </a>
          </Card>
        </div>
      </div>
    </section>
  );
}
