"use client";

import { CtaBtnPlans } from "@/components/ui/CtaBtnPlans";
import styles from "./styles.module.scss";

// Icons
import { FaCheck } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";

// Interfaces
interface CardPlansProps {
  title: string;
  description: string;
  price: number;
  benefits: string[];
}

export function CardPlans({
  title,
  description,
  price,
  benefits,
}: CardPlansProps) {
  return (
    <div className={styles.cardPlans}>
      <div className={styles.cardPlansContainer}>
        <div className={styles.Headline}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>

        <div className={styles.cta}>
          <CtaBtnPlans
            icon={<FaCalendarAlt />}
            innerText="Agendar horário agora"
          />
        </div>

        <div className={styles.price}>
          <p>
            R$ <span>{price}</span>/mês
          </p>
        </div>

        <ul className={styles.benefits}>
          {benefits.map((benefit, index) => (
            <li key={index}>
              <FaCheck className={styles.checkIcon} />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
