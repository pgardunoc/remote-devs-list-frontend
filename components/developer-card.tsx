import Link from "next/link"
import { MapPin, Clock, DollarSign } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import type { Developer } from "@/lib/mock-data"

interface DeveloperCardProps {
  developer: Developer
}

const availabilityColors = {
  available: "bg-green-500/10 text-green-500 border-green-500/20",
  busy: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
  unavailable: "bg-red-500/10 text-red-500 border-red-500/20",
}

const availabilityLabels = {
  available: "Available",
  busy: "Busy",
  unavailable: "Unavailable",
}

export function DeveloperCard({ developer }: DeveloperCardProps) {
  return (
    <Link href={`/developer/${developer.id}`}>
      <Card className="h-full hover:border-accent transition-colors cursor-pointer group">
        <CardContent className="pt-6">
          <div className="flex items-start gap-4 mb-4">
            <Avatar className="h-16 w-16 border-2 border-border">
              <AvatarImage src={developer.avatar || "/placeholder.svg"} alt={developer.name} />
              <AvatarFallback>
                {developer.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-lg mb-1 group-hover:text-accent transition-colors text-balance">
                {developer.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-2">{developer.title}</p>
              <Badge variant="outline" className={availabilityColors[developer.availability]}>
                {availabilityLabels[developer.availability]}
              </Badge>
            </div>
          </div>

          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 flex-shrink-0" />
              <span className="truncate">{developer.location}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4 flex-shrink-0" />
              <span>{developer.experience} years experience</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <DollarSign className="h-4 w-4 flex-shrink-0" />
              <span>${developer.hourlyRate}/hour</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {developer.skills.slice(0, 4).map((skill) => (
              <Badge key={skill} variant="secondary" className="text-xs">
                {skill}
              </Badge>
            ))}
            {developer.skills.length > 4 && (
              <Badge variant="secondary" className="text-xs">
                +{developer.skills.length - 4}
              </Badge>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
