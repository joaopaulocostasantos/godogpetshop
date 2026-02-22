import Link from "next/link";
import styles from "./styles.module.scss";

// Interfaces e types
interface CtaButtonProps {
  icon?: React.ReactNode;
  innerText?: string;
}

export function CtaBtnHero({ icon, innerText }: CtaButtonProps) {
  return (
    <Link className={styles.ctaButton} href={"#plans"}>
      <span className={styles.icon}>{icon}</span>
      {innerText || "Conheça nossos planos"}
    </Link>
  );
}
