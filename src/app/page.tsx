// components
import { Container } from "@/components/container";
import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Plans } from "@/components/sections/plans";
import { Services } from "@/components/sections/services";

export default function Home() {
  return (
    <>
      <div
        style={{
          background: "var(--bg-hero)",
          width: "100%",
          height: "1000px",
        }}
      >
        <Container>
          <Header />
          <Hero />
        </Container>
      </div>

      <Container>
        <Services />
        <Plans />
      </Container>
    </>
  );
}
