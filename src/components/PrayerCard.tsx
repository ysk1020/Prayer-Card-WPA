import styles from "./PrayerCard.module.css";
import CardFront from "./CardFront";
import CardBack from "./CardBack";
import { useState } from "react";

function PrayerCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  function showBack() {
    setIsFlipped(true);
  }

  function showFront() {
    setIsFlipped(false);
  }

  return (
    // div className={styles.card}>
    // <CardFront/>
    // </div>
    <div className={`${styles.card} ${styles.back}`}>
      {isFlipped ? (
        <CardBack onBack={showFront} />
      ) : (
        <CardFront onReveal={showBack} />
      )}
    </div>
  );
}

export default PrayerCard;
