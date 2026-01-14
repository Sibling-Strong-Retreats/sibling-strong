import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Heart, Mountain, Users, MessageCircle, Sparkles, Target } from "lucide-react"

export default function StyleGuidePage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Style Guide</h1>
          <p className="text-xl text-muted-foreground">
            Design system and color palette for the Sibling Strong website
          </p>
        </div>

        {/* Color Palette */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Color Palette</h2>
          <p className="text-muted-foreground mb-8">
            Inspired by the outdoors, campfires, and nature - warm, welcoming, and comforting.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <div className="w-full h-24 rounded-lg bg-primary mb-4"></div>
                <CardTitle>Primary</CardTitle>
                <CardDescription>Warm terracotta / Campfire</CardDescription>
              </CardHeader>
              <CardContent>
                <code className="text-sm">hsl(15, 70%, 52%)</code>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-full h-24 rounded-lg bg-accent mb-4"></div>
                <CardTitle>Accent</CardTitle>
                <CardDescription>Golden amber / Sunrise</CardDescription>
              </CardHeader>
              <CardContent>
                <code className="text-sm">hsl(40, 75%, 62%)</code>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-full h-24 rounded-lg bg-secondary mb-4"></div>
                <CardTitle>Secondary</CardTitle>
                <CardDescription>Soft sage / Forest moss</CardDescription>
              </CardHeader>
              <CardContent>
                <code className="text-sm">hsl(145, 25%, 88%)</code>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-full h-24 rounded-lg bg-muted mb-4"></div>
                <CardTitle>Muted</CardTitle>
                <CardDescription>Light sage / Misty green</CardDescription>
              </CardHeader>
              <CardContent>
                <code className="text-sm">hsl(145, 20%, 92%)</code>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-full h-24 rounded-lg bg-background mb-4 border-2"></div>
                <CardTitle>Background</CardTitle>
                <CardDescription>Warm cream</CardDescription>
              </CardHeader>
              <CardContent>
                <code className="text-sm">hsl(30, 30%, 98%)</code>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-full h-24 rounded-lg bg-foreground mb-4"></div>
                <CardTitle>Foreground</CardTitle>
                <CardDescription>Deep forest brown</CardDescription>
              </CardHeader>
              <CardContent>
                <code className="text-sm">hsl(25, 35%, 20%)</code>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Gradients */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Gradient Styles</h2>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="w-full h-32 rounded-lg bg-forest-gradient mb-4"></div>
                <CardTitle>Forest Gradient</CardTitle>
                <CardDescription>Used for feature sections and backgrounds</CardDescription>
              </CardHeader>
              <CardContent>
                <code className="text-sm">bg-forest-gradient</code>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-full h-32 rounded-lg bg-sunset-gradient mb-4"></div>
                <CardTitle>Sunset Gradient</CardTitle>
                <CardDescription>Used for highlighted sections and callouts</CardDescription>
              </CardHeader>
              <CardContent>
                <code className="text-sm">bg-sunset-gradient</code>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-full h-32 rounded-lg bg-campfire-glow mb-4"></div>
                <CardTitle>Campfire Glow</CardTitle>
                <CardDescription>Warm, comforting gradient for special sections</CardDescription>
              </CardHeader>
              <CardContent>
                <code className="text-sm">bg-campfire-glow</code>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-full h-32 rounded-lg bg-gradient-to-br from-orange-50 via-amber-50 to-green-50 mb-4"></div>
                <CardTitle>Hero Gradient</CardTitle>
                <CardDescription>Main hero section background</CardDescription>
              </CardHeader>
              <CardContent>
                <code className="text-sm">from-orange-50 via-amber-50 to-green-50</code>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Typography */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Typography</h2>

          <div className="space-y-6">
            <div>
              <h1 className="text-5xl font-bold mb-2">Heading 1</h1>
              <code className="text-sm text-muted-foreground">text-5xl font-bold</code>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-2">Heading 2</h2>
              <code className="text-sm text-muted-foreground">text-4xl font-bold</code>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-2">Heading 3</h3>
              <code className="text-sm text-muted-foreground">text-3xl font-bold</code>
            </div>
            <div>
              <h4 className="text-2xl font-semibold mb-2">Heading 4</h4>
              <code className="text-sm text-muted-foreground">text-2xl font-semibold</code>
            </div>
            <div>
              <p className="text-xl mb-2">Large body text for hero sections and intros</p>
              <code className="text-sm text-muted-foreground">text-xl</code>
            </div>
            <div>
              <p className="text-base mb-2">Regular body text for main content</p>
              <code className="text-sm text-muted-foreground">text-base</code>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">Small text for captions and metadata</p>
              <code className="text-sm text-muted-foreground">text-sm text-muted-foreground</code>
            </div>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Buttons */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Buttons</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Default</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button>Primary Button</Button>
                <br />
                <code className="text-sm">variant="default"</code>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Outline</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline">Outline Button</Button>
                <br />
                <code className="text-sm">variant="outline"</code>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Secondary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="secondary">Secondary Button</Button>
                <br />
                <code className="text-sm">variant="secondary"</code>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Ghost</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="ghost">Ghost Button</Button>
                <br />
                <code className="text-sm">variant="ghost"</code>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Link</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="link">Link Button</Button>
                <br />
                <code className="text-sm">variant="link"</code>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Sizes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Icons */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Icon Treatment</h2>
          <p className="text-muted-foreground mb-8">
            Icons are displayed in gradient circles for a warm, outdoor-inspired look.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="flex flex-col items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-md">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <p className="text-sm text-center">Primary to Accent</p>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-secondary flex items-center justify-center shadow-md">
                <Users className="w-7 h-7 text-foreground" />
              </div>
              <p className="text-sm text-center">Accent to Secondary</p>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center shadow-md">
                <Mountain className="w-7 h-7 text-foreground" />
              </div>
              <p className="text-sm text-center">Secondary to Primary</p>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary via-accent to-secondary flex items-center justify-center shadow-md">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <p className="text-sm text-center">Multi-gradient</p>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center shadow-md">
                <MessageCircle className="w-7 h-7 text-white" />
              </div>
              <p className="text-sm text-center">Accent to Primary</p>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary via-accent to-primary flex items-center justify-center shadow-md">
                <Target className="w-7 h-7 text-foreground" />
              </div>
              <p className="text-sm text-center">Reverse Multi</p>
            </div>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Cards */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Card Components</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Standard Card</CardTitle>
                <CardDescription>Basic card with header and content</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Cards are used throughout the site for organizing content and creating visual hierarchy.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors hover:shadow-lg bg-white/80 backdrop-blur">
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 shadow-md">
                  <Heart className="w-7 h-7 text-white" />
                </div>
                <CardTitle>Feature Card</CardTitle>
                <CardDescription>Card with gradient icon and hover effect</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Feature cards include gradient icons and enhanced hover states for interactive sections.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Design Principles */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Design Principles</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-campfire-glow">
              <CardHeader>
                <CardTitle>Warm & Welcoming</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Colors inspired by campfires, sunsets, and nature create a warm, inviting atmosphere appropriate for grief support.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-forest-gradient">
              <CardHeader>
                <CardTitle>Outdoor Connection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Earth tones, forest greens, and natural gradients reflect our retreat-focused community and healing through nature.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-sunset-gradient">
              <CardHeader>
                <CardTitle>Professional & Comforting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  The color palette balances professionalism with warmth, creating a safe and supportive environment.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Camp-Inspired</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Design elements evoke the comfort and community of camp experiences - gathering, connection, and shared experiences.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}
