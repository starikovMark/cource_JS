"use client";
import { useGetDataByCategory } from "../api/api-hooks";
import { Preloader } from "../components/Preloader/Preloader";
import { endpoints } from "../api/config";
import { CardsList } from "../components/CardsList/CardsList";

export default function Tds() {
  const tdsGames = useGetDataByCategory(endpoints.games, "TDS");
  return (
    <main className={"main-inner"}>
      {tdsGames ? (
        <CardsList id="tds" title="TDS" data={tdsGames} />
      ) : (
        <Preloader />
      )}
    </main>
  );
}
