import { Hero } from "@/components/home/Hero"
import { Mission } from "@/components/home/Mission"
import { Community } from "@/components/home/Community"
import { Features } from "@/components/home/Features"
import { GiftMembership } from "@/components/home/GiftMembership"

export default function Home() {
  return (
    <>
      <Hero />
      <Mission />
      <Community />
      <Features />
      <div id="gift-membership">
        <GiftMembership />
      </div>
    </>
  )
}
