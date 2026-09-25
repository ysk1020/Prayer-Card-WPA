import styles from "./PrayerCard.module.css";
import CardFront from "./CardFront";
import CardBack from "./CardBack";
import { useState } from "react";
import { fetchRandomVerse, type Passage } from "../api/bible";

function PrayerCard() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [names, setNames] = useState(["", "", ""]);
  const [note, setNote] = useState("");
  const [verse, setVerse] = useState<Passage | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleUpdateNames(index: number, value: string) {
    setNames((prev) => prev.map((n, i) => (i === index ? value : n)));
  }
  async function loadVerse() {
    setLoading(true);
    setError("");
    try {
      setVerse(await fetchRandomVerse());
    } catch {
      setError("Couldn't load a verse. Try again.");
    } finally {
      setLoading(false);
    }
  }

  function showBack() {
    setIsFlipped(true);
    loadVerse();
  }

  function showFront() {
    setIsFlipped(false);
  }

  return (
    <div className={`${styles.card} ${styles.back}`}>
      {isFlipped ? (
        <CardBack
          onBack={showFront}
          names={names}
          note={note}
          verse={verse}
          error={error}
          loading={loading}
          onNewVerse={loadVerse}
        />
      ) : (
        <CardFront
          names={names}
          note={note}
          onNameChange={handleUpdateNames}
          onNoteChange={setNote}
          onReveal={showBack}
        />
      )}
    </div>
  );
}

export default PrayerCard;
