import { Badge } from "@/components/ui/Badge";
import styles from "./styles.module.scss";

// images
import avatar01 from "@/assets/avatar_01.png";
import avatar02 from "@/assets/avatar_02.png";
import avatar03 from "@/assets/avatar_03.png";

// components
import { FeedbackCard } from "./FeedbackCard";

export function FeedBacks() {
  return (
    <section className={styles.testimonials}>
      <div className={styles.headline}>
        <Badge innerText="Depoimentos" />
        <h2 className={styles.title}>
          <span>A confiança de quem</span> já conhece nosso cuidado
        </h2>
      </div>

      <div className={styles.feedbacks}>
        <FeedbackCard
          imageAuhor={avatar01}
          description="Meu cachorro sempre volta feliz, cheiroso e claramente bem cuidado. Dá pra perceber o carinho e a atenção da equipe em cada detalhe, desde o atendimento até o pós-banho. Já testei outros lugares, mas aqui virou padrão ouro. Não troco por outro petshop."
          authorName="Maria Souza"
          authorRole="Mãe do pipoca"
        />
        <FeedbackCard
          imageAuhor={avatar02}
          description="Minha gata é super sensível e sempre tive receio de levá-la a petshops. Aqui fui surpreendida positivamente: cuidado, paciência e muito respeito com o tempo dela. Confio totalmente e recomendo de olhos fechados."
          authorName="Carlos Silva"
          authorRole="Pai do gato"
        />
        <FeedbackCard
          imageAuhor={avatar03}
          description="Atendimento excelente do começo ao fim, com profissionais realmente atenciosos e preparados. Os planos mensais facilitam demais a rotina e trazem muita tranquilidade, porque sei que meu pet está sempre em dia. Praticidade que faz diferença no dia a dia."
          authorName="Ana Oliveira"
          authorRole="Mãe da poodle"
        />
      </div>
    </section>
  );
}
