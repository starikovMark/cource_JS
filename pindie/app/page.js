import { getGamesByCategory } from "./data/data-utils.js";

import { Banner } from "./components/Banner/Banner.jsx";
import { Promo } from "./components/Promo/Promo.jsx";
import { CardsList } from "./components/CardsList/CardsList.jsx";

export default function Home() {
  const popularGames = getGamesByCategory("popular");
  const newGames = getGamesByCategory("new");
  return (
    <main className="main">
      <Banner />
      <CardsList id="popular" title="Популярные" data={popularGames} />
      <CardsList id="new" title="Новинки" data={newGames} />
      <Promo />
    </main>
  );
}
