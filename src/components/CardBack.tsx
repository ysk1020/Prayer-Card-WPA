import styles from "./CardBack.module.css";

interface CardBackProps {
  onBack: () => void;
}
function CardBack({ onBack }: CardBackProps) {
  return (
    <div className={styles.back}>
      <div className={styles.pill}>
        <span className={styles.dot} />
        <span>Comfort</span>
      </div>
      <p className={styles.name}>{/* some data */}</p>

      <blockquote className={styles.verse}>
        {/* dummy data for now */}
        “The LORD is nigh unto them that are of a broken heart; and saveth such
        as be of a contrite spirit.”
      </blockquote>
      <p className={styles.ref}>Psalm 34:18</p>

      <p className={styles.note}>Keep them steady this week.</p>
      <div className={styles.actions}>
        <button className={`${styles.button} ${styles.ghost}`} type="button">
          New Verse
        </button>
        <button
          className={`${styles.button} ${styles.filled}`}
          type="button"
          onClick={onBack}
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default CardBack;
