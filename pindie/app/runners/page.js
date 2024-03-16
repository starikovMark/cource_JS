"use client";
import { useGetDataByCategory } from "../api/api-hooks";
import { Preloader } from "../components/Preloader/Preloader";
import { endpoints } from "../api/config";
import { CardsList } from "../components/CardsList/CardsList";

export default function runners() {
  const runnerGames = useGetDataByCategory(endpoints.games, "runner");
  return (
    <main className={"main-inner"}>
      {runnerGames ? (
        <CardsList id="runner" title="Раннеры" data={runnerGames} />
      ) : (
        <Preloader />
      )}
    </main>
  );
}
