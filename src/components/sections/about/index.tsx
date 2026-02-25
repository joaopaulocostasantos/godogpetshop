import Image from "next/image";
import styles from "./styles.module.scss";

// imagens
import aboutImage from "@/assets/petshop.png";

// components
import { Badge } from "@/components/ui/Badge";

export function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.content}>
        <Badge innerText="Quem somos" />
        <h2>
          Mais que um petshop. <span>Um lugar de cuidado e confiança.</span>
        </h2>
        <p>
          O <strong>PetShop GoGog</strong> nasceu de um propósito claro:{" "}
          <strong>
            transformar a experiência de cuidado animal em algo verdadeiramente
            excepcional.
          </strong>
          Entendemos que pets não são apenas animais de estimação, são membros
          da família, e por isso cada atendimento é pautado no respeito, na
          segurança e na responsabilidade.
        </p>

        <p>
          Nosso compromisso vai além do serviço;{" "}
          <strong>
            criamos um ambiente acolhedor onde tutores encontram tranquilidade e
            os pets recebem um tratamento repleto de afeto.
          </strong>{" "}
          Na GoGog, cada detalhe é planejado para que seu melhor amigo se sinta
          em casa.
        </p>
      </div>

      <div className={styles.image}>
        <Image src={aboutImage} alt="Clínica Petshop" />
      </div>
    </section>
  );
}
