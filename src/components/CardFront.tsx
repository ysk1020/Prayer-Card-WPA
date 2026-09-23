import styles from "./CardFront.module.css";

interface CardFrontProps {
  onReveal: () => void;
}

function CardFront({ onReveal }: CardFrontProps) {
  return (
    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
      <div className={styles.header}>
        <svg
          className={styles.icon}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.6z" />
        </svg>
        <span className={styles.title}>Praying for</span>
      </div>
      <p className={styles.subtitle}>Enter up to three names.</p>

      <label className={styles.label} htmlFor="name1">
        Name 1
      </label>
      <input
        className={styles.input}
        id="name1"
        type="text"
        placeholder="Mom"
      />

      <label className={styles.label} htmlFor="name2">
        Name 2 (optional)
      </label>
      <input
        className={styles.input}
        id="name2"
        type="text"
        placeholder="Dad"
      />

      <label className={styles.label} htmlFor="name3">
        Name 3 (optional)
      </label>
      <input
        className={styles.input}
        id="name3"
        type="text"
        placeholder="A friend"
      />

      <label className={styles.label} htmlFor="note">
        Note (optional)
      </label>
      <textarea
        className={styles.textarea}
        id="note"
        rows={2}
        placeholder="What's on your heart for them"
      />

      <button className={styles.button} type="submit" onClick={onReveal}>
        Reveal verse
      </button>
    </form>
  );
}

export default CardFront;
