import styles from "./styles.module.scss";

// Interfaces
interface BagdeProps {
  innerText: string;
}

export function Bagde({ innerText }: BagdeProps) {
  return (
    <div className={styles.badge}>
      <span>{innerText}</span>
    </div>
  );
}
