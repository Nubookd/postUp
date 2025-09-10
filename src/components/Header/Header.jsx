import styles from "./Header.module.scss";

import Logo from "../Logo/Logo";
import HeaderAction from "../HeaderAcion/HeaderAction";

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <Logo />
        <HeaderAction />
      </header>
    </>
  );
}
