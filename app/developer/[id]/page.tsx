import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, MapPin, Clock, DollarSign, Mail, Github, Linkedin, Globe, Languages } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { fetchDeveloper } from "@/lib/mock-data"

const availabilityColors = {
  available: "bg-green-500/10 text-green-500 border-green-500/20",
  busy: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
  unavailable: "bg-red-500/10 text-red-500 border-red-500/20",
}

const availabilityLabels = {
  available: "Available Now",
  busy: "Limited Availability",
  unavailable: "Not Available",
}

export default async function DeveloperPage({ params }: { params: { id: string } }) {
  // Replace with actual API call: const response = await fetch(`/api/developers/${params.id}`);
  const developer = await fetchDeveloper(params.id)

  if (!developer) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to developers
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <div className="flex items-start gap-6 mb-6">
                <Avatar className="h-24 w-24 border-2 border-border">
                  <AvatarImage src={developer.avatar || "/placeholder.svg"} alt={developer.name} />
                  <AvatarFallback className="text-2xl">
                    {developer.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h1 className="text-3xl font-bold mb-2">{developer.name}</h1>
                  <p className="text-xl text-muted-foreground mb-3">{developer.title}</p>
                  <Badge variant="outline" className={availabilityColors[developer.availability]}>
                    {availabilityLabels[developer.availability]}
                  </Badge>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed">{developer.bio}</p>
            </div>

            {/* Skills */}
            <Card>
              <CardHeader>
                <CardTitle>Skills & Technologies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {developer.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Projects */}
            <Card>
              <CardHeader>
                <CardTitle>Featured Projects</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {developer.projects.map((project, index) => (
                  <div key={index} className="space-y-2">
                    <h3 className="font-semibold">{project.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Location</p>
                    <p className="text-sm text-muted-foreground">{developer.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Experience</p>
                    <p className="text-sm text-muted-foreground">{developer.experience} years</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <DollarSign className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Hourly Rate</p>
                    <p className="text-sm text-muted-foreground">${developer.hourlyRate}/hour</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Timezone</p>
                    <p className="text-sm text-muted-foreground">{developer.timezone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Languages className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Languages</p>
                    <p className="text-sm text-muted-foreground">{developer.languages.join(", ")}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full" size="lg">
                  <Mail className="h-4 w-4 mr-2" />
                  Contact Developer
                </Button>

                <div className="space-y-2">
                  {developer.github && (
                    <a
                      href={`https://github.com/${developer.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github className="h-4 w-4" />
                      GitHub Profile
                    </a>
                  )}

                  {developer.linkedin && (
                    <a
                      href={`https://linkedin.com/in/${developer.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Linkedin className="h-4 w-4" />
                      LinkedIn Profile
                    </a>
                  )}

                  {developer.portfolio && (
                    <a
                      href={developer.portfolio}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Globe className="h-4 w-4" />
                      Portfolio Website
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
