import styles from "./CardBack.module.css";
import type { Passage } from "../api/bible";
interface CardBackProps {
  names: string[];
  note: string;
  verse: Passage | null;
  loading: boolean;
  error: string;
  onNewVerse: () => void;
  onBack: () => void;
}
function CardBack({
  names,
  note,
  verse,
  loading,
  error,
  onNewVerse,
  onBack,
}: CardBackProps) {
  const filledNames = names.filter(Boolean).join(", ");
  const book = verse?.ref.replace(/\s[\d:-]+$/, "");

  return (
    <div className={styles.back}>
      {book && !loading && (
        <div className={styles.pill}>
          <span className={styles.dot} />
          <span>{book}</span>
        </div>
      )}

      <p className={styles.names}>For {filledNames}</p>
      {loading ? (
        <p className={styles.ref}> Finding a verse...</p>
      ) : error ? (
        <p className={styles.ref}>{error}</p>
      ) : (
        verse && (
          <>
            <blockquote className={styles.verse}>"{verse.text}"</blockquote>
            <p className={styles.ref}>{verse.ref}</p>
          </>
        )
      )}

      {note && <p className={styles.note}>{note}</p>}
      <div className={styles.actions}>
        <button
          className={`${styles.button} ${styles.ghost}`}
          type="button"
          onClick={onNewVerse}
          disabled={loading}
        >
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
