export interface PokemonListItem {
    name: string;
    url: string;
}

export interface PokemonListResponse {
    count: number;
    next: string;
    previous: string;
    results: PokemonListItem[];
}

export interface Pokemon {
    abilities: Ability[];
    base_experience: number;
    cries: Cries;
    forms: Form[];
    game_indices: GameIndex[];
    height: number;
    held_items: any[];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: Move[];
    name: string;
    order: number;
    species: Species;
    sprites: Sprites;
    stats: Stat[];
    types: Type[];
    weight: number;
}

export interface Cries {
    latest: string;
    legacy: string;
}

export interface Ability {
    ability: Species;
    is_hidden: boolean;
    slot: number;
}

export interface Species {
    name: string;
    url: string;
}

export interface Form {
    name: string;
    url: string;
}

export interface GameIndex {
    game_index: number;
    version: Species;
}

export interface Move {
    move: Species;
    version_group_details: VersionGroupDetail[];
}

export interface VersionGroupDetail {
    level_learned_at: number;
    move_learn_method: Species;
    version_group: Species;
}

export interface Sprites {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
}

export interface Stat {
    base_stat: number;
    effort: number;
    stat: Species;
}

export interface Type {
    slot: number;
    type: Species;
}

export interface TypeDetail {
    damage_relations: DamageRelations;
    game_indices: GameIndex[];
    generation: Species;
    id: number;
    move_damage_class: Species;
    moves: Species[];
    name: string;
    names: Name[];
}

export interface DamageRelations {
    double_damage_from: Species[];
    double_damage_to: Species[];
    half_damage_from: Species[];
    half_damage_to: Species[];
    no_damage_from: Species[];
    no_damage_to: Species[];
}

export interface Name {
    language: Species;
    name: string;
}