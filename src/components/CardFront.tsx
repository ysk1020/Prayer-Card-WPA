import styles from "./CardFront.module.css";
import type { SubmitEvent } from "react";

interface CardFrontProps {
  names: string[];
  note: string;
  onNameChange: (index: number, value: string) => void;
  onNoteChange: (value: string) => void;
  onReveal: () => void;
}

function CardFront({
  names,
  note,
  onNameChange,
  onNoteChange,
  onReveal,
}: CardFrontProps) {
  function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    onReveal();
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
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
        required
        value={names[0]}
        onChange={(e) => onNameChange(0, e.target.value)}
      />

      <label className={styles.label} htmlFor="name2">
        Name 2 (optional)
      </label>
      <input
        className={styles.input}
        id="name2"
        type="text"
        placeholder="Dad"
        value={names[1]}
        onChange={(e) => onNameChange(1, e.target.value)}
      />

      <label className={styles.label} htmlFor="name3">
        Name 3 (optional)
      </label>
      <input
        className={styles.input}
        id="name3"
        type="text"
        placeholder="A friend"
        value={names[2]}
        onChange={(e) => onNameChange(2, e.target.value)}
      />

      <label className={styles.label} htmlFor="note">
        Note (optional)
      </label>
      <textarea
        className={styles.textarea}
        id="note"
        rows={2}
        placeholder="What's on your heart for them"
        value={note}
        onChange={(e) => onNoteChange(e.target.value)}
      />

      <button className={styles.button} type="submit">
        Reveal verse
      </button>
    </form>
  );
}

export default CardFront;
