import styles from "./styles.module.scss";

// next
import Image from "next/image";
import Link from "next/link";

// assets
import logoGoDog from "@/assets/logo-godog.png";

// icons
import { FaCalendarAlt } from "react-icons/fa";

// components
import { CtaBtn } from "@/components/ui/CtaBtn";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* logo */}
        <Image src={logoGoDog} alt="GoDog" className={styles.logo} />

        {/* navegação */}
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li>
              <Link href="#services">Serviços</Link>
            </li>
            <li>
              <Link href="#plans">Planos</Link>
            </li>
            <li>
              <Link href="#about">Quem somos</Link>
            </li>
            <li>
              <Link href="#faq">Dúvidas</Link>
            </li>
          </ul>
        </nav>

        {/* CTA */}
        <CtaBtn icon={<FaCalendarAlt />} innerText="Agendar horário agora" />
      </div>
    </header>
  );
}
