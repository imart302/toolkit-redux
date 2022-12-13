export interface INamedAPIResource {
  name: string;
  url: string;
}

export interface IPokemonAbility {
  is_hiden: boolean;
  slot: number;
  ability: INamedAPIResource;
}

export interface IVersionGameIndex {
  game_index: number;
  version: INamedAPIResource;
}

export interface IPokemonHeldItemVersion {
  version: INamedAPIResource;
  rarity: number;
}

export interface IPokemonHeldItem {
  item: INamedAPIResource;
  version_details: IPokemonHeldItemVersion
}

export interface IPokemonMoveVersion {
  move_learn_method: INamedAPIResource;
  version_group: INamedAPIResource;
  level_learned_at: number;
}

export interface IPokemonMove {
  move: INamedAPIResource;
  version_group_details: IPokemonMoveVersion[];
}

export interface IPokemonType {
  slot: number;
  type: INamedAPIResource;
}

export interface IPokemonTypePast {
  generation: INamedAPIResource;
  types: IPokemonType[]
}

export interface IPokemonSprites {
  front_default: string;
  front_shiny: string;
  front_female: string;
  front_shiny_female: string;
  back_default: string;
  back_shiny: string;
  back_female: string;
  back_shiny_female: string;
}

export interface IPokemonStat {
  stat: INamedAPIResource;
  effort: number;
  base_stat: number;
}

export interface IPokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: IPokemonAbility[];
  forms: INamedAPIResource;
  game_indices: IVersionGameIndex[];
  held_items: IPokemonHeldItem[];
  location_area_encountes: string;
  moves: IPokemonMove[];
  past_types: IPokemonTypePast[];
  sprites: IPokemonSprites;
  species: INamedAPIResource;
  stats: IPokemonStat[];
  types: IPokemonType[];
}

export interface IPokemons {
  count: number;
  next: string | null;
  previous: string | null;
  results: INamedAPIResource[];
}

