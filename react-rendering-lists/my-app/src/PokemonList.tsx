type Pokedex = {
  name: string;
  number: string;
};
type Props = {
  pokedex: Pokedex[];
};

export default function PokemonList({ pokedex }: Props): JSX.Element {
  const listItems = pokedex.map((pokemon: Pokedex) => (
    <li key={pokemon.number}>{pokemon.name}</li>
  ));
  return <ul>{listItems}</ul>;
}
