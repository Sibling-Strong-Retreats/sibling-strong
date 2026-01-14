import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mountain, Users, Heart, Compass, Calendar } from "lucide-react"
import Link from "next/link"

export default function RetreatsPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Hero Image */}
        <div className="max-w-5xl mx-auto mb-12 rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="/sibling-strong/images/mountain-lake-sunrise.png"
            alt="Peaceful mountain lake at sunrise"
            className="w-full h-auto"
          />
        </div>

        {/* Hero Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Adventure Retreats</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Twice a year, we gather for healing adventures in nature. These retreats offer a unique
            opportunity to connect with others who understand sibling loss while experiencing the
            restorative power of the outdoors.
          </p>
        </div>

        {/* Why Retreats */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center">Why In-Person Retreats?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Deep Connection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  There&apos;s something powerful about being together in person. Sharing meals, hiking
                  trails, and evening conversations creates bonds that online meetings simply can&apos;t
                  replicate.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Mountain className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Nature&apos;s Healing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Research shows that time in nature reduces stress, anxiety, and depression while
                  promoting healing. Our retreats combine peer support with the therapeutic benefits
                  of the outdoors.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Safe Space</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our retreats provide a judgment-free environment where you can be fully yourself,
                  share your story, and honor your sibling&apos;s memory among people who truly
                  understand.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Compass className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Personal Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Through guided activities, reflection time, and peer support, our retreats offer
                  space for personal growth and finding meaning in your grief journey.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* What to Expect */}
        <div className="max-w-4xl mx-auto mb-20 bg-muted/30 rounded-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-6">What to Expect</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <Mountain className="w-5 h-5 text-primary" />
                Outdoor Activities
              </h3>
              <p className="text-muted-foreground">
                Gentle hikes, nature walks, and optional adventure activities suited to various
                fitness levels. Activities are designed to be accessible and enjoyable for everyone.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                Facilitated Sessions
              </h3>
              <p className="text-muted-foreground">
                Trained facilitators lead group discussions and activities focused on sibling loss,
                healing, and connection. All sharing is voluntary and confidential.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <Heart className="w-5 h-5 text-primary" />
                Memorial Ceremony
              </h3>
              <p className="text-muted-foreground">
                A meaningful ceremony where participants can honor and remember their siblings in a
                supportive environment surrounded by others who understand.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                Unstructured Time
              </h3>
              <p className="text-muted-foreground">
                Plenty of free time to relax, reflect, connect with others one-on-one, or simply
                enjoy the peaceful surroundings at your own pace.
              </p>
            </div>
          </div>
        </div>

        {/* Location & Logistics */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-bold mb-6">Location & Logistics</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              Our retreats are held in beautiful, peaceful locations that offer both comfort and
              access to nature. Past locations have included mountain lodges, lakeside retreats, and
              serene wilderness centers.
            </p>
            <p>
              <strong className="text-foreground">Schedule:</strong> Retreats typically run from
              Friday evening through Sunday afternoon, though exact schedules vary by location.
            </p>
            <p>
              <strong className="text-foreground">Accommodations:</strong> Comfortable lodging with
              both shared and private room options. All meals are included.
            </p>
            <p>
              <strong className="text-foreground">Cost:</strong> Retreat costs vary by location but
              are designed to be accessible. Members receive early access and special pricing.
            </p>
          </div>
        </div>

        {/* Community Image Section */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="rounded-2xl overflow-hidden shadow-2xl mb-8">
            <img
              src="/sibling-strong/images/group-mountain-vista.png"
              alt="Diverse group of people standing together overlooking mountains at sunset"
              className="w-full h-auto"
            />
          </div>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Together in Nature, United in Support</h2>
            <p className="text-lg text-muted-foreground">
              Our retreats bring together people from all walks of life, united by the shared experience
              of sibling loss. In nature&apos;s healing embrace, we find strength in each other and hope
              for the journey ahead.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-primary/5 rounded-lg p-8 md:p-12 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Join Us for Our Next Retreat</h2>
          <p className="text-muted-foreground mb-6">
            Retreat dates will be announced soon. Contact us to be added to our notification list
            and learn more about upcoming retreat opportunities.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Get Retreat Information</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
