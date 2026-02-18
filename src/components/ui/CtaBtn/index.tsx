import Link from "next/link";
import styles from "./styles.module.scss";

// Interfaces e types
interface CtaButtonProps {
  icon?: React.ReactNode;
  innerText?: string;
}

export function CtaBtn({ icon, innerText }: CtaButtonProps) {
  return (
    <Link className={styles.ctaButton} href={"#formLead"}>
      <span className={styles.icon}>{icon}</span>
      {innerText || "Agendar horário agora"}
    </Link>
  );
}
