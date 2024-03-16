"use client";
import { useGetDataByCategory } from "../api/api-hooks";
import { Preloader } from "../components/Preloader/Preloader";
import { endpoints } from "../api/config";
import { getGamesByCategory } from "../data/data-utils";
import { CardsList } from "../components/CardsList/CardsList";

export default function Shooters() {
  const shooterGames = useGetDataByCategory(endpoints.games, "shooter");
  return (
    <main className={"main-inner"}>
      {shooterGames ? (
        <CardsList id="shooter" title="Шутеры" data={shooterGames} />
      ) : (
        <Preloader />
      )}
    </main>
  );
}
