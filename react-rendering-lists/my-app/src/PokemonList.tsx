type Props = {
  pokedex: {
    name: string;
    number: string;
  }[];
};

export default function PokemonList({ pokedex }: Props): JSX.Element {
  const listItems = pokedex.map((pokemon: { number: string; name: string }) => (
    <li key={pokemon.number}>{pokemon.name}</li>
  ));
  return <ul>{listItems}</ul>;
}
