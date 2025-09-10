import DownloadIcon from "../DownloadIcon/DownloadIcon";
import TgIcon from "../TgIcon/TgIcon";
import styles from "./HeaderAction.module.scss";

export default function HeaderAction() {
  return (
    <div className={styles.header__action}>
      <TgIcon />
      <DownloadIcon />
    </div>
  );
}
