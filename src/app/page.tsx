import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Universities } from "@/components/universities";
import { Stats } from "@/components/stats";
import { Guarantee } from "@/components/guarantee";
import { FeaturesBento } from "@/components/features-bento";
import { Process } from "@/components/process";
import { Testimonials } from "@/components/testimonials";
import { Cta } from "@/components/cta";
import { Faq } from "@/components/faq";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Universities />
        <Stats />
        <Guarantee />
        <FeaturesBento />
        <Process />
        <Testimonials />
        <Cta />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
