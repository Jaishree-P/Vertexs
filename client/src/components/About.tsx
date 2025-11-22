import { Card } from "@/components/ui/card";
import { Award, Target, Users } from "lucide-react";
import femaleLeader from "@assets/generated_images/Sunil_Viswanath.png";
import maleLeader from "@assets/generated_images/Narasiman_Sampath.png";

const leaders = [
  {
    name: "Dr. Sunil Viswanath",
    title: "Co-Founders",
    image: femaleLeader,
    bio: "25+ years in IT Services and Consulting",
  },
  {
    name: "Narasiman Sampath",
    title: "Co-Founders",
    image: maleLeader,
    bio: "25+ years in IT Services and Consulting",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            About <span className="text-primary">Vortexs</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Driving Growth Through Technology, Talent & Trust
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          <div className="lg:col-span-1 space-y-6">
            <Card className="p-8 hover-elevate transition-all duration-300 border-card-border">
              <Award className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Manpower Search & Talent Acquisition</h3>
              <p className="text-muted-foreground leading-relaxed">
                We connect startups with agile, high-performing teams and support enterprises in building robust, future-ready workforces.
              </p>
            </Card>

            <Card className="p-8 hover-elevate transition-all duration-300 border-card-border">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Training & Capability Development </h3>
              <p className="text-muted-foreground leading-relaxed">
                We empower your teams with the skills and insights needed to stay ahead in a rapidly evolving tech landscape.
              </p>
            </Card>
            <Card className="p-8 hover-elevate transition-all duration-300 border-card-border">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Corporate Legal Advisory </h3>
              <p className="text-muted-foreground leading-relaxed">
                Our specialized consulting helps you navigate legal complexities 
				with confidence—ensuring compliance, clarity, and control.
              </p>
            </Card>			
          </div>

          <div className="lg:col-span-2 space-y-8">
            <div className="prose prose-lg max-w-none">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We are a new-age IT and technology consulting firm committed to helping businesses—whether emerging startups or established enterprises—unlock their full potential. Our mission is simple: deliver smart, scalable solutions that make a measurable difference.
              </p>              
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              {leaders.map((leader) => (
                <Card
                  key={leader.name}
                  className="p-6 hover-elevate transition-all duration-300 border-card-border"
                >
                  <div className="flex items-start gap-4">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-20 h-20 rounded-full object-cover border-2 border-primary/20"
                      data-testid={`img-leader-${leader.name.toLowerCase().replace(/\s+/g, '-')}`}
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg text-foreground">
                        {leader.name}
                      </h4>
                      <p className="text-sm text-primary font-medium mb-2">
                        {leader.title}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {leader.bio}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
