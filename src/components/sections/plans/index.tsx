import { Bagde } from "@/components/ui/Bagde";
import styles from "./styles.module.scss";

export function Plans() {
  return (
    <section className={styles.plans}>
      <div className={styles.headline}>
        <Bagde innerText="Plans" />
        <h2 className={styles.title}>
          <span>Planos que cabem no seu bolso</span> e cuidam do seu pet
        </h2>
      </div>
    </section>
  );
}
