import { Navbar } from "@/components/luxury/navbar";
import { Hero } from "@/components/luxury/hero";
import { About } from "@/components/luxury/about";
import { Differentials } from "@/components/luxury/differentials";
import { NaturalLux } from "@/components/luxury/natural-lux";
import { Services } from "@/components/luxury/services";
import { Team } from "@/components/luxury/team";
import { Testimonials } from "@/components/luxury/testimonials";
import { Location } from "@/components/luxury/location";
import { FAQ } from "@/components/luxury/faq";
import { Contact } from "@/components/luxury/contact";
import { Footer } from "@/components/luxury/footer";
import { FloatingActions } from "@/components/luxury/floating-actions";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        <Hero />
        <About />
        <Differentials />
        <NaturalLux />
        <Services />
        <Team />
        <Testimonials />
        <Location />
        <FAQ />
        <Contact />
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
