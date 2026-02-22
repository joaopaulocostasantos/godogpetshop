import styles from "./styles.module.scss";

interface BadgeProps {
  innerText: string;
}

export function Badge({ innerText }: BadgeProps) {
  return (
    <div className={styles.badge}>
      <span>{innerText}</span>
    </div>
  );
}
