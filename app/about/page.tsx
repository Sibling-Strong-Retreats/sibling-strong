import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Users, Target, Sparkles } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Hero Image */}
        <div className="max-w-4xl mx-auto mb-12 rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="/sibling-strong/images/two-chairs-occupied.png"
            alt="Two people sitting together facing mountain vista at sunset, representing sibling connection"
            className="w-full h-auto"
          />
        </div>

        {/* Hero Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Sibling Strong</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We&apos;re building a compassionate community where adults who&apos;ve lost a sibling can
            find understanding, support, and connection on their grief journey.
          </p>
        </div>

        {/* Our Story */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              The loss of a sibling is a unique and often overlooked form of grief. While society
              recognizes the pain of losing a parent, spouse, or child, sibling loss can feel
              invisible—even though siblings are often our longest relationships, spanning the vast
              majority of our lives.
            </p>
            <p>
              Sibling Strong was created to address this gap. We understand that losing a brother or
              sister means losing someone who shared your childhood, your family stories, and your
              understanding of where you came from. It&apos;s losing your past and your imagined future
              together.
            </p>
            <p>
              Through peer support, expert guidance, and meaningful community, we provide a space
              where your grief is recognized, your sibling&apos;s memory is honored, and your healing
              is supported.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 shadow-md">
                  <Heart className="w-7 h-7 text-white" />
                </div>
                <CardTitle>Compassion First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We lead with empathy and understanding, creating a safe space where all grief
                  experiences are honored and validated.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-secondary flex items-center justify-center mb-4 shadow-md">
                  <Users className="w-7 h-7 text-foreground" />
                </div>
                <CardTitle>Peer Connection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We believe in the power of connecting with others who truly understand the unique
                  nature of sibling loss.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center mb-4 shadow-md">
                  <Target className="w-7 h-7 text-foreground" />
                </div>
                <CardTitle>Evidence-Based Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our programs are informed by grief research and led by trained facilitators who
                  understand the complexities of sibling loss.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary via-accent to-secondary flex items-center justify-center mb-4 shadow-md">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
                <CardTitle>Celebrating Life</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  While we honor grief, we also celebrate the beautiful lives of the siblings we&apos;ve
                  lost and the enduring bonds we share.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Why Sibling Loss is Unique */}
        <div className="max-w-4xl mx-auto bg-sunset-gradient rounded-lg p-8 md:p-12 shadow-md border-2 border-primary/20">
          <h2 className="text-3xl font-bold mb-6">Why Sibling Loss is Unique</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              <strong className="text-foreground">The Longest Relationship:</strong> Siblings often
              share 90-95% of their lives together, making it the longest relationship most people
              will ever have.
            </p>
            <p>
              <strong className="text-foreground">Shared History:</strong> Your sibling was there
              from the beginning, sharing your family history, childhood memories, and understanding
              of your roots in a way no one else can.
            </p>
            <p>
              <strong className="text-foreground">Disenfranchised Grief:</strong> Society often
              fails to recognize the profound impact of sibling loss, leaving many grieving siblings
              feeling unsupported and misunderstood.
            </p>
            <p>
              <strong className="text-foreground">Multiple Roles:</strong> A sibling can be a best
              friend, confidant, protector, rival, and so much more—losing them means losing someone
              who filled many roles in your life.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
