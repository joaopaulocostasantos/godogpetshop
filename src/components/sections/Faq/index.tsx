import { Question } from "./Question";
import styles from "./styles.module.scss";

// components
import { Badge } from "@/components/ui";

export function Faq() {
  return (
    <section className={styles.faqContainer}>
      <div className={styles.headline}>
        <Badge innerText="FAQ" />
        <h2 className={styles.title}>Perguntas frequentes</h2>
      </div>

      <div className={styles.faq}>
        <Question
          question="Preciso agendar o atendimento com antecedência?"
          response="Sim. Trabalhamos com agendamento para garantir um atendimento tranquilo, organizado e personalizado para cada pet."
        />
        <Question
          question="Quais tipos de pets vocês atendem?"
          response="Atendemos cães e gatos de todos os portes e raças. Para outros pets, entre em contato para consultar disponibilidade"
        />
        <Question
          question="Quais formas de pagamento são aceitas?"
          response="Aceitamos Pix, cartão de crédito, cartão de débito e dinheiro. Os planos mensais podem ser pagos de forma recorrente."
        />
        <Question
          question="Meu pet precisa estar com as vacinas em dia?"
          response="Sim. Para serviços como creche e atendimentos coletivos, é obrigatório que as vacinas estejam atualizadas para a segurança de todos."
        />
        <Question
          question="Posso acompanhar o atendimento do meu pet?"
          response="Em alguns serviços, sim. Nosso objetivo é oferecer transparência e tranquilidade para os tutores."
        />
        <Question
          question="Vocês atendem emergências?"
          response="Sim. Contamos com atendimento 24h para emergências, oferecendo suporte rápido e profissional quando necessário."
        />
      </div>
    </section>
  );
}
