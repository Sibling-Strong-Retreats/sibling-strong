export function Mission() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                The bond between siblings is one of the longest-lasting relationships in our lives.
                When we lose a brother or sister, we lose someone who shared our history, our memories,
                and our understanding of family in a way no one else can.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Sibling Strong, we create space for adults navigating this unique grief. Through peer
                support, expert guidance, and meaningful connection, we help you honor your sibling&apos;s
                memory while finding your path forward.
              </p>
            </div>
            <div className="order-1 lg:order-2 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/sibling-strong/images/forest-walk-together.png"
                alt="Two people walking together on a forest trail, representing sibling connection"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
