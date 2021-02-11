import React, { useState } from "react";
import styles from "./shareButton.module.css";

export default function ShareButton({ title, url = "", fallback }) {
  const [showFallback, setShowFallback] = useState(false);
  const onClick = () => {
    if (navigator.share) {
      navigator.share({
        title,
        url,
      });
    } else {
      console.warn(`oops it seems share api is not supported on your browser`);
      console.warn(`Consider leaving the planet. Haha! just kidding`);
      setShowFallback(true);
    }
  };

  return (
    <>
      {showFallback &&
        typeof fallback === "function" &&
        fallback({
          title,
          url,
          isOpen: showFallback,
          close: () => {
            console.log("closing fallback");
            setShowFallback(false);
          },
        })}
      <button onClick={onClick} className={styles.shareBtn}>
        Share
      </button>
    </>
  );
}
