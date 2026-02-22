import styles from "./styles.module.scss";

// next
import Image, { StaticImageData } from "next/image";

// icons
import { ImQuotesLeft } from "react-icons/im";

interface FeedbackCardProps {
  imageAuhor: StaticImageData;
  description: string;
  authorName: string;
  authorRole: string;
}

export function FeedbackCard({
  imageAuhor,
  description,
  authorName,
  authorRole,
}: FeedbackCardProps) {
  return (
    <div className={styles.feedbackCard}>
      <div className={styles.icon}>
        <ImQuotesLeft size={65} />
      </div>

      <p>{description}</p>

      <div className={styles.author}>
        <Image src={imageAuhor} alt={authorName} width={64} height={64} />
        <div className={styles.authorInfo}>
          <h5>{authorName}</h5>
          <span>{authorRole}</span>
        </div>
      </div>
    </div>
  );
}
