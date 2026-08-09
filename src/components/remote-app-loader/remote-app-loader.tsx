import styles from './styles.module.css';

export function RemoteAppLoader() {
  return (
    <div className={styles.loader} role="status" aria-label="Loading remote app">
      <span className={styles.spinner} aria-hidden="true" />
    </div>
  );
}
