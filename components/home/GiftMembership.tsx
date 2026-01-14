import { Button } from "@/components/ui/button"
import { Gift } from "lucide-react"

export function GiftMembership() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent mb-6 shadow-lg">
              <Gift className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Gift a Membership
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              Know someone who has lost a sibling? A membership to our community can be a meaningful gift
              that provides lasting support, connection, and healing.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur rounded-lg p-8 border-2 border-primary/20 shadow-md">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Why Gift a Membership?</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Show your support in a meaningful way</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Connect them with others who understand</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Provide access to expert-led discussions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Give them a safe space to share and heal</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Perfect For</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Friends supporting a grieving friend</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Parents supporting their surviving child</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Extended family members</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Anyone wanting to give meaningful support</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <Button size="lg" className="gap-2">
                <Gift className="w-5 h-5" />
                Gift a Membership
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                Questions about gifting? <a href="/contact" className="text-primary hover:underline">Contact us</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
