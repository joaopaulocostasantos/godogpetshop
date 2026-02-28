import styles from "./styles.module.scss";

// Icons
import { FaBath, FaDog, FaUserMd, FaCalendarAlt } from "react-icons/fa";
import { RiHomeSmileFill, RiCustomerServiceFill } from "react-icons/ri";
import { Scissors } from "lucide-react";

// Components
import { Badge } from "@/components/ui/Badge";
import { CardPlan } from "./cardPlan";
import { CtaBtnPlans } from "@/components/ui/CtaBtnPlans";

export function Services() {
  return (
    <section className={styles.services} id="services">
      <div className={styles.headline}>
        <Badge innerText="Nossos serviços" />
        <h2 className={styles.title}>
          <span>Tudo o que seu pet precisa</span> em um só lugar
        </h2>
      </div>

      <div className={styles.cardContainer}>
        <CardPlan
          icon={<FaBath size={40} className={styles.icon} />}
          title="Banho"
          description="Banho para pets de todos os portes, utilizando produtos de alta qualidade que limpam profundamente sem agredir a pele. O resultado é um pet limpo, cheiroso e confortável."
        />
        <CardPlan
          icon={<Scissors size={40} className={styles.icon} />}
          title="Tosa por Raça"
          description="Tosa específica para cada raça, respeitando o padrão, a pelagem e o conforto do animal. Realizada com máquina e tesoura, sempre com higiene e cuidado."
        />
        <CardPlan
          icon={<FaDog size={40} className={styles.icon} />}
          title="Estética Pet"
          description="Tratamentos estéticos como hidratação, revitalização e recuperação da pelagem, deixando o pelo mais saudável, brilhante e bonito."
        />
        <CardPlan
          icon={<FaUserMd size={40} className={styles.icon} />}
          title="Atendimento Veterinário"
          description="Cuidado profissional para a saúde do seu pet, com foco em prevenção, diagnóstico e acompanhamento responsável."
        />
        <CardPlan
          icon={<RiHomeSmileFill size={40} className={styles.icon} />}
          title="Creche para Pets"
          description="Ambiente seguro, educativo e supervisionado para socialização, atividades e aprendizado de bons hábitos, proporcionando bem-estar físico e emocional."
        />
        <CardPlan
          icon={<RiCustomerServiceFill size={40} className={styles.icon} />}
          title="Atendimento 24h"
          description="Suporte disponível 24 horas para medicação, tratamentos, vacinação e emergências, garantindo tranquilidade para você e segurança para o seu pet."
        />
      </div>

      <CtaBtnPlans
        icon={<FaCalendarAlt size={20} />}
        innerText="Agendar horário agora"
      />
    </section>
  );
}
