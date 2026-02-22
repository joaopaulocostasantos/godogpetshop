// components
import { Container } from "@/components/Container";
import { Header } from "@/layout/header";
import {
  Hero,
  Services,
  Plans,
  FeedBacks,
  About,
  Form,
  Faq,
} from "@/components/sections";
import styles from "./page.module.scss";
import { Footer } from "@/layout/footer";

export default function Home() {
  return (
    <>
      <section className={styles.heroSection}>
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
