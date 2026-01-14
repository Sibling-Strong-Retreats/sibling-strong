import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Community() {
  return (
    <section className="py-16 md:py-24 bg-campfire-glow">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/sibling-strong/images/campfire-circle.png"
                alt="Diverse group of people sitting around a campfire, supporting each other"
                className="w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Find Your Community
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Grief can feel isolating, but you don&apos;t have to walk this path alone. Our community
                brings together adults who understand the unique experience of losing a sibling.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Whether gathering around a virtual fireside chat or meeting in person at our retreats,
                we create spaces where your loss is honored, your sibling&apos;s memory is celebrated,
                and your healing is supported.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/about">Learn About Our Community</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/retreats">View Retreats</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
