import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Video, Heart, Mountain, MessageCircle, Gift } from "lucide-react"

// Replace with your actual Circle.so community URL
const CIRCLE_COMMUNITY_URL = "https://YOUR-COMMUNITY.circle.so"

const features = [
  {
    title: "Weekly Discussion Groups",
    description: "Peer-supportive discussion groups with trained facilitators who understand sibling loss",
    icon: Users,
  },
  {
    title: "Expert Firesides",
    description: "Monthly sessions with grief experts addressing topics relevant to sibling loss",
    icon: Video,
  },
  {
    title: "Sibling Spotlights",
    description: "Personal stories from community members sharing their grief journey and healing",
    icon: Heart,
  },
  {
    title: "Adventure Retreats",
    description: "Semi-annual in-person retreats for connection, healing, and outdoor experiences",
    icon: Mountain,
  },
  {
    title: "Moderated Channels",
    description: "Safe chat spaces organized by loss circumstances for ongoing peer support",
    icon: MessageCircle,
  },
]

export function Features() {
  return (
    <section className="py-16 md:py-24 bg-forest-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Community Benefits</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            When our membership program launches, you&apos;ll have access to a comprehensive support system designed specifically for adults who&apos;ve lost a sibling
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="border-2 hover:border-primary transition-colors hover:shadow-lg bg-white/80 backdrop-blur">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 shadow-md">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            )
          })}
        </div>

        <div className="mt-12 text-center space-y-6">
          <div className="bg-white/60 backdrop-blur rounded-lg p-8 max-w-2xl mx-auto border-2 border-primary/20">
            <h3 className="text-2xl font-bold mb-3">Join Our Community on Circle</h3>
            <p className="text-muted-foreground mb-6">
              Access weekly discussion groups, expert firesides, and connect with others who understand sibling loss.
              Perfect for yourself or as a meaningful gift for someone you care about.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href={CIRCLE_COMMUNITY_URL} target="_blank" rel="noopener noreferrer">
                  Join Member Area
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#gift-membership">Gift a Membership</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/contact">Learn More</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
