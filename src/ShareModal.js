import styles from "./shareModal.module.css";

export default function ShareModal({ title, link, isOpen, onClose }) {
  return (
    <section
      className={styles.shareModal + " " + (isOpen ? styles.active : "")}
    >
      <div className={styles.shadow} onClick={onClose} />
      <div className={styles.content}>
        <button className={styles.closeBtn} onClick={onClose}>
          &times;
        </button>
        <p>{title}</p>
        <a href={link}>Click here</a>
      </div>
    </section>
  );
}
