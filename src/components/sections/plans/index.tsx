import { Badge } from "@/components/ui/Badge";
import styles from "./styles.module.scss";
import { CardPlans } from "./cardPlans";

export function Plans() {
  return (
    <section className={styles.plans} id="plans">
      <div className={styles.headline}>
        <Badge innerText="Plans" />
        <h2 className={styles.title}>
          <span>Planos que cabem no seu bolso</span> e cuidam do seu pet
        </h2>
      </div>

      <div className={styles.cardsPlans}>
        <CardPlans
          title="Plano Essencial"
          description="Cuidados básicos para manter seu pet sempre limpo e bem cuidado."
          price={250}
          benefits={[
            "1 banho simples",
            "1 tosa",
            "Corte de unhas",
            "Limpeza de ouvido",
            "Escovação dos dentes",
          ]}
        />
        <CardPlans
          title="Plano Complete"
          description="Higiene completa + acompanhamento veterinário."
          price={450}
          benefits={[
            "1 banho simples",
            "1 tosa",
            "Corte de unhas",
            "Limpeza de ouvido",
            "Escovação dos dentes",
            "Veterinário",
          ]}
        />
        <CardPlans
          title="Plano Premium"
          description="Cuidado total, creche e atendimento 24h."
          price={650}
          benefits={[
            "1 banho simples",
            "1 tosa",
            "Corte de unhas",
            "Limpeza de ouvido",
            "Escovação dos dentes",
            "Veterinário",
            "Creche",
            "Atendimento 24h",
          ]}
        />
      </div>
    </section>
  );
}
