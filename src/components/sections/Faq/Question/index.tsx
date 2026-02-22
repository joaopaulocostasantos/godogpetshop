"use client";

// CSS
import styles from "./styles.module.scss";

// React e Next
import { useState } from "react";

// Icons
import { FaAngleRight, FaAngleDown } from "react-icons/fa";

// Interface
interface QuestionProps {
  question: string;
  response: string;
}

export function Question({ question, response }: QuestionProps) {
  const [open, setOpen] = useState(false);

  function handleOpenQuestion() {
    setOpen(!open);
  }

  return (
    <div className={styles.questionContainer}>
      <button onClick={handleOpenQuestion} className={styles.question}>
        <h5>{question}</h5>
        {open ? (
          <FaAngleDown size={24} className={styles.arrow} />
        ) : (
          <FaAngleRight size={24} className={styles.arrow} />
        )}
      </button>
      {open && <p className={styles.res}>{response}</p>}
    </div>
  );
}
