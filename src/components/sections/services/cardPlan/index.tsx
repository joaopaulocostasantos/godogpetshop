import styles from "./styles.module.scss";

interface CardPlanProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function CardPlan({ icon, title, description }: CardPlanProps) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.iconContainer}>{icon}</div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  );
}
