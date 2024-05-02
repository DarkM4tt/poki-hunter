import { axiosClient } from "../axios/baseQuery";

export const listPokemon = async ({queryKey}) => {
    const { data } = await axiosClient.get(`search-pokemon/`, 
        { params: { s: queryKey[0] }
    }).then((res) => res);
    return data;
}