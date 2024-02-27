export interface DtoPokemonListItem {
    name: string;
    url: string;
}

export interface DtoPokemonListResponse {
    count: number;
    next: string;
    previous: string;
    results: DtoPokemonListItem[];
}

export interface DtoPokemon {
    abilities: DtoAbility[];
    cries: DtoCries;
    base_experience: number;
    forms: DtoForm[];
    game_indices: DtoGameIndex[];
    height: number;
    held_items: any[];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: DtoMove[];
    name: string;
    order: number;
    species: DtoSpecies;
    sprites: DtoSprites;
    stats: DtoStat[];
    types: DtoType[];
    weight: number;
}
export interface DtoCries {
    latest: string;
    legacy: string;
}

export interface DtoAbility {
    ability: DtoSpecies;
    is_hidden: boolean;
    slot: number;
}

export interface DtoSpecies {
    name: string;
    url: string;
}

export interface DtoForm {
    name: string;
    url: string;
}

export interface DtoGameIndex {
    game_index: number;
    version: DtoSpecies;
}

export interface DtoMove {
    move: DtoSpecies;
    version_group_details: DtoVersionGroupDetail[];
}

export interface DtoVersionGroupDetail {
    level_learned_at: number;
    move_learn_method: DtoSpecies;
    version_group: DtoSpecies;
}

export interface DtoSprites {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
}

export interface DtoStat {
    base_stat: number;
    effort: number;
    stat: DtoSpecies;
}

export interface DtoType {
    slot: number;
    type: DtoSpecies;
}

export interface DtoTypeDetail {
    damage_relations: DtoDamageRelations;
    game_indices: DtoGameIndex[];
    generation: DtoSpecies;
    id: number;
    move_damage_class: DtoSpecies;
    moves: DtoSpecies[];
    name: string;
    names: DtoName[];
    pokemon: DtoPokemon[];
}

export interface DtoDamageRelations {
    double_damage_from: DtoSpecies[];
    double_damage_to: DtoSpecies[];
    half_damage_from: DtoSpecies[];
    half_damage_to: DtoSpecies[];
    no_damage_from: any[];
    no_damage_to: any[];
}

export interface DtoName {
    language: DtoSpecies;
    name: string;
}