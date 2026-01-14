import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { CheckCircle, Settings, Palette, Users, Link as LinkIcon } from "lucide-react"

export default function CircleSetupPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Circle.so Integration Guide</h1>
          <p className="text-xl text-muted-foreground">
            Complete setup instructions for your Sibling Strong community on Circle.so
          </p>
        </div>

        {/* Quick Setup Steps */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Quick Setup Steps</h2>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                    1
                  </div>
                  <div>
                    <CardTitle>Create Your Circle Community</CardTitle>
                    <CardDescription>Sign up at circle.so and create your community</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Go to <a href="https://circle.so" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">circle.so</a> and sign up</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Choose your community subdomain (e.g., siblingstrong.circle.so)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Select a plan that fits your needs (Pro recommended for full features)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                    2
                  </div>
                  <div>
                    <CardTitle>Apply Sibling Strong Branding</CardTitle>
                    <CardDescription>Customize Circle with your brand colors and logo</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Go to <strong>Settings → Branding</strong> in your Circle dashboard and apply these settings:
                </p>
                <div className="bg-muted/50 rounded-lg p-4 space-y-3 text-sm">
                  <div>
                    <strong className="text-foreground">Primary Color:</strong>
                    <div className="flex items-center gap-3 mt-1">
                      <div className="w-12 h-12 rounded bg-primary border-2"></div>
                      <code className="bg-background px-2 py-1 rounded">#D15A3F</code>
                      <span className="text-muted-foreground">(Warm Terracotta)</span>
                    </div>
                  </div>
                  <div>
                    <strong className="text-foreground">Accent Color:</strong>
                    <div className="flex items-center gap-3 mt-1">
                      <div className="w-12 h-12 rounded bg-accent border-2"></div>
                      <code className="bg-background px-2 py-1 rounded">#E3A957</code>
                      <span className="text-muted-foreground">(Golden Amber)</span>
                    </div>
                  </div>
                  <div>
                    <strong className="text-foreground">Background:</strong>
                    <div className="flex items-center gap-3 mt-1">
                      <div className="w-12 h-12 rounded bg-background border-2"></div>
                      <code className="bg-background px-2 py-1 rounded">#FAF8F5</code>
                      <span className="text-muted-foreground">(Warm Cream)</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                    3
                  </div>
                  <div>
                    <CardTitle>Update Website Links</CardTitle>
                    <CardDescription>Connect your website to your Circle community</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Update the <code className="bg-muted px-1.5 py-0.5 rounded">CIRCLE_COMMUNITY_URL</code> constant in these files:
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <code className="bg-muted px-1.5 py-0.5 rounded text-xs">components/layout/Header.tsx</code>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <code className="bg-muted px-1.5 py-0.5 rounded text-xs">components/home/Features.tsx</code>
                  </li>
                </ul>
                <div className="mt-4 bg-muted/50 rounded p-3">
                  <code className="text-xs">
                    const CIRCLE_COMMUNITY_URL = &quot;https://YOUR-COMMUNITY.circle.so&quot;
                  </code>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                    4
                  </div>
                  <div>
                    <CardTitle>Create Your Spaces</CardTitle>
                    <CardDescription>Set up discussion spaces that match your offerings</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Recommended spaces for your community:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-forest-gradient rounded-lg p-4 space-y-2">
                    <h4 className="font-semibold">Weekly Discussions</h4>
                    <p className="text-sm text-muted-foreground">Facilitated peer support groups organized by loss circumstances</p>
                  </div>
                  <div className="bg-sunset-gradient rounded-lg p-4 space-y-2">
                    <h4 className="font-semibold">Expert Firesides</h4>
                    <p className="text-sm text-muted-foreground">Monthly live sessions with grief experts</p>
                  </div>
                  <div className="bg-campfire-glow rounded-lg p-4 space-y-2">
                    <h4 className="font-semibold">Sibling Spotlights</h4>
                    <p className="text-sm text-muted-foreground">Share your sibling&apos;s story and your healing journey</p>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                    <h4 className="font-semibold">General Support</h4>
                    <p className="text-sm text-muted-foreground">Open space for connecting and sharing</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                    5
                  </div>
                  <div>
                    <CardTitle>Configure Membership Tiers</CardTitle>
                    <CardDescription>Set up pricing and access levels</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Based on your original pricing from the Wix site:
                </p>
                <div className="space-y-3">
                  <div className="bg-muted/30 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold">Monthly Membership</h4>
                      <span className="text-2xl font-bold text-primary">$14.99</span>
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Full access to all discussion groups</li>
                      <li>• Expert firesides and events</li>
                      <li>• Early access to retreats</li>
                    </ul>
                  </div>
                  <div className="bg-muted/30 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Gift Memberships</h4>
                    <div className="flex gap-4 text-sm">
                      <div><strong>3 months:</strong> $39.99</div>
                      <div><strong>6 months:</strong> $74.99</div>
                      <div><strong>12 months:</strong> $124.99</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Circle Features */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Circle Features to Enable</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Member Profiles
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Let members share their stories and connect. Consider custom profile questions about their sibling.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <LinkIcon className="w-5 h-5 text-primary" />
                  Events
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Schedule expert firesides, discussion groups, and retreat info sessions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-5 h-5 text-primary" />
                  Courses
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Optional: Create grief support courses or onboarding content for new members.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="w-5 h-5 text-primary" />
                  Custom Domain
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Consider using community.siblingstrong.com for a seamless branded experience.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Best Practices */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Community Management Best Practices</h2>

          <Card className="bg-campfire-glow border-2 border-primary/20">
            <CardHeader>
              <CardTitle>Creating a Safe, Supportive Space</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Community Guidelines</h4>
                <p className="text-sm text-muted-foreground">
                  Establish clear guidelines about respect, confidentiality, and supportive communication.
                  Post these prominently in your Circle welcome space.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Trained Facilitators</h4>
                <p className="text-sm text-muted-foreground">
                  Ensure discussion group facilitators are trained in grief support and sibling loss.
                  Consider assigning moderator roles to facilitators in Circle.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Welcome New Members</h4>
                <p className="text-sm text-muted-foreground">
                  Create a welcoming onboarding experience. Consider a &quot;New Members&quot; space where people
                  can introduce themselves and their sibling.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Regular Engagement</h4>
                <p className="text-sm text-muted-foreground">
                  Post daily prompts, weekly discussion topics, and monthly spotlights to keep the
                  community active and connected.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
