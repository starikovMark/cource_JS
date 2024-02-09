import "./globals.css";

export const metadata = {
  title: "Pindie",
  description: "Портал инди-игр от студентов Яндекс Практикума",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <header class="header">
          <a href="./index.html" class="logo">
            <img
              class="logo__image"
              src="/images/logo.svg"
              alt="Логотип Pindie"
            />
          </a>
          <nav class="menu">
            <ul class="menu__list">
              <li class="menu__item">
                <a href="" class="menu__link">
                  Новинки
                </a>
              </li>
              <li class="menu__item">
                <a href="" class="menu__link">
                  Популярные
                </a>
              </li>
              <li class="menu__item">
                <a href="" class="menu__link">
                  Шутеры
                </a>
              </li>
              <li class="menu__item">
                <a href="" class="menu__link">
                  Ранеры
                </a>
              </li>
              <li class="menu__item">
                <a href="" class="menu__link">
                  Пиксельные
                </a>
              </li>
              <li class="menu__item">
                <a href="" class="menu__link">
                  TDS
                </a>
              </li>
            </ul>
            <div class="auth">
              <button class="auth__button">Войти</button>
            </div>
          </nav>
        </header>
        {children}
        <footer class="footer">
          <a href="./index.html" class="footer__logo">
            <span class="footer__logo-name">pindie</span>
            <span class="footer__logo-copy">, XXI век</span>
          </a>
          <ul class="social-list">
            <li class="social-list__item">
              <a href="" class="button social-list__link">
                YT
              </a>
            </li>
            <li class="social-list__item">
              <a href="" class="button social-list__link">
                ВК
              </a>
            </li>
            <li class="social-list__item">
              <a href="" class="button social-list__link">
                TG
              </a>
            </li>
          </ul>
        </footer>
      </body>
    </html>
  );
}
