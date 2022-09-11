import { useQuery } from "@tanstack/react-query";
import { pokemonAPI } from "../../config/axios";

export const FetchDataPage = () => {
  const pokemons = useQuery(["pokemons"], async () => {
    const { data } = await pokemonAPI.get("/pokemon");
    return data;
  });

  console.log(pokemons.data);

  return <div>FetchDataPage</div>;
};
