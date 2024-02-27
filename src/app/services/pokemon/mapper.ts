import { Pokemon, PokemonListResponse, TypeDetail } from "src/app/interfaces/pokemon"
import { DtoPokemon, DtoPokemonListResponse, DtoTypeDetail } from "./dtos"


export class Mapper {
    static mapPokemonListResponse(data: DtoPokemonListResponse): PokemonListResponse {
        return {
            count: data.count,
            next: data.next,
            previous: data.previous,
            results: data.results.map((item: any) => {
                return {
                    name: item.name,
                    url: item.url
                }
            })
        }
    }

    static mapPokemon(data: DtoPokemon): Pokemon {
        return {
            abilities: data.abilities.map((item: any) => {
                return {
                    ability: {
                        name: item.ability.name,
                        url: item.ability.url
                    },
                    is_hidden: item.is_hidden,
                    slot: item.slot
                }
            }),
            base_experience: data.base_experience,
            cries: {
                latest: data.cries.latest,
                legacy: data.cries.legacy
            },
            forms: data.forms.map((item: any) => {
                return {
                    name: item.name,
                    url: item.url
                }
            }),
            game_indices: data.game_indices.map((item: any) => {
                return {
                    game_index: item.game_index,
                    version: {
                        name: item.version.name,
                        url: item.version.url
                    }
                }
            }),
            height: data.height,
            held_items: data.held_items,
            id: data.id,
            is_default: data.is_default,
            location_area_encounters: data.location_area_encounters,
            moves: data.moves.map((item: any) => {
                return {
                    move: {
                        name: item.move.name,
                        url: item.move.url
                    },
                    version_group_details: item.version_group_details.map((detail: any) => {
                        return {
                            level_learned_at: detail.level_learned_at,
                            version_group: {
                                name: detail.version_group.name,
                                url: detail.version_group.url
                            }
                        }
                    })
                }
            }),
            name: data.name,
            order: data.order,
            species: {
                name: data.species.name,
                url: data.species.url
            },
            sprites: { ...data.sprites },
            stats: data.stats.map((item: any) => {
                return {
                    base_stat: item.base_stat,
                    effort: item.effort,
                    stat: {
                        name: item.stat.name,
                        url: item.stat.url
                    }
                }
            }),
            types: data.types.map((item: any) => {
                return {
                    slot: item.slot,
                    type: {
                        name: item.type.name,
                        url: item.type.url
                    }
                }
            }),
            weight: data.weight
        }
    }

    static mapTypeDetail(data: DtoTypeDetail): TypeDetail{
        return {
            damage_relations: {...data.damage_relations},
            game_indices: [...data.game_indices],
            generation: {
                name: data.generation.name,
                url: data.generation.url
            },
            id: data.id,
            move_damage_class: {
                name: data.move_damage_class.name,
                url: data.move_damage_class.url
            },
            moves: data.moves.map((item: any) => {
                return {
                    name: item.name,
                    url: item.url
                }
            }),
            name: data.name,
            names: data.names.map((item: any) => {
                return {
                    language: {
                        name: item.language.name,
                        url: item.language.url
                    },
                    name: item.name
                }
            })
        }
    }
}