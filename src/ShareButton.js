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
      console.warn(`oops it seems share api is not available on your browswer`);
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
