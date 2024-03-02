import { getGamesByCategory } from "../data/data-utils";
import { CardsList } from "../components/CardsList/CardsList";

export default function Tds() {
  const tdsGames = getGamesByCategory("TDS");
  return (
    <main className={"main-inner"}>
      <CardsList id="tds" title="TDS" data={tdsGames} />
    </main>
  );
}
