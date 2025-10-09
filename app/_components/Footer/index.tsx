import sytles from "./index.module.css";

export default function Footer() {
  return (
    <footer className={sytles.footer}>
      <nav className={sytles.nav}>
        <ul className={sytles.items}>
          <li className={sytles.item}>
            <a href="/news">ニュース</a>
          </li>
          <li className={sytles.item}>
            <a href="/memebers">メンバー</a>
          </li>
          <li className={sytles.item}>
            <a href="/contact">お問い合わせ</a>
          </li>
        </ul>
      </nav>
      <p className={sytles.cr}>&copy; SIMPLE All Rights Reserved 2024</p>
    </footer>
  );
}
