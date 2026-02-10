import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, GraduationCap, University } from "lucide-react";

export function InfoSection() {
  const items = [
    {
      title: "Institutions",
      icon: Building2,
      description: "Institutions affiliated with the University can login to perform activities related to affiliation, student registration, academics, and fee payments.",
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      title: "Students",
      icon: GraduationCap,
      description: "Registered students can access personalized information, view academic details, attendance, marks, earned credits, and download grade sheets.",
      color: "text-green-600",
      bg: "bg-green-50"
    },
    {
      title: "University",
      icon: University,
      description: "University staff and administrators can manage curriculum, courses, affiliations, and oversee the entire e-Governance system operations.",
      color: "text-amber-600",
      bg: "bg-amber-50"
    }
  ];

  return (
    <div className="grid gap-6 md:grid-cols-3 mt-12 animate-in slide-in-from-bottom-4 duration-700 delay-200">
      {items.map((item, index) => (
        <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow duration-300">
          <CardHeader className="pb-3">
            <div className={`w-12 h-12 rounded-full ${item.bg} flex items-center justify-center mb-4`}>
              <item.icon className={`h-6 w-6 ${item.color}`} />
            </div>
            <CardTitle className="text-lg font-serif text-foreground">{item.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
