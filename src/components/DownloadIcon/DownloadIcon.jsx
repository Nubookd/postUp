import styles from './DownloadIcon.module.scss'

export default function DownloadIcon() {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      className={styles.download__icon}
    >
      <path
        d="M30 44.8744V8M30 44.8744L14.6246 29.6791M30 44.8744L45.3754 29.6791M50 43V52L30 52H10V43"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="1"
        y="1"
        width="58"
        height="58"
        rx="9"
        strokeWidth="2"
      />
    </svg>
  );
}
