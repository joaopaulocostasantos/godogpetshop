import styles from "./styles.module.scss";

// Next
import Image from "next/image";

// Imagens
import imageHero from "@/assets/imageHero.png";
import imageCustomers from "@/assets/imageCustomers.png";

// Ícones
import iconPlans from "@/assets/iconPlans.png";

// compeonentes
import { CtaBtnHero } from "@/components/ui/CtaBtnHero";

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <h1>
            <span>Onde seu melhor amigo</span> é tratado como família
          </h1>

          <p>
            <span>
              No PetShop GoGog, cada pet recebe cuidado, atenção e carinho de
              verdade.
            </span>{" "}
            Unimos profissionais qualificados, ambiente seguro e serviços
            completos para garantir saúde e bem-estar em todas as fases da vida
            do seu pet.
          </p>

          {/* CTA */}
          <CtaBtnHero
            icon={<Image src={iconPlans} alt="Ícone de planos" />}
            innerText="Conheça nossos planos"
          />

          <div className={styles.heroFeedbacksCustomers}>
            <Image src={imageCustomers} alt="Clientes satisfeitos" />

            <div className={styles.heroFeedbacksCustomersText}>
              <strong>+100 famílias de pets</strong>
              <span>atendidas com excelência</span>
            </div>
          </div>
        </div>

        <div className={styles.heroImage}>
          <Image src={imageHero} alt="Imagem de um pet feliz" />
        </div>
      </div>
    </section>
  );
}
