import styles from "./page.module.scss";

// components
import { Container } from "@/components/Container";
import { Header } from "@/layout/Header";
import { Hero } from "@/components/Sections/Hero";
import { Services } from "@/components/Sections/Services";
import { Plans } from "@/components/Sections/Plans";
import { FeedBacks } from "@/components/Sections/Feedback";
import { About } from "@/components/Sections/About";
import { Form } from "@/components/Sections/Form";
import { Faq } from "@/components/Sections/Faq";
import { Footer } from "@/layout/Footer";

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
