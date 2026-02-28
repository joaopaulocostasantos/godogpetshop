import styles from "./page.module.scss";

// components
import { Container } from "@/components/container";
import { Header } from "@/layout/header";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Plans } from "@/components/sections/plans";
import { FeedBacks } from "@/components/sections/Feedback";
import { About } from "@/components/sections/about";
import { Form } from "@/components/sections/Form";
import { Faq } from "@/components/sections/Faq";
import { Footer } from "@/layout/footer";

export default function Home() {
  return (
    <>
      <section className={`${styles.heroSection}`}>
        <Container>
          <Header />
          <Hero />
        </Container>
      </section>
      <main>
        <Container>
          <Services />
          <Plans />
          <FeedBacks />
          <About />
        </Container>
        <section className={styles.FormSection} aria-hidden>
          <Container>
            <Form />
          </Container>
        </section>
        <Container>
          <Faq />
        </Container>
      </main>
      <footer className={styles.Footerection}>
        <Container>
          <Footer />
        </Container>
      </footer>
    </>
  );
}
