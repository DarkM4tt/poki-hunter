import { axiosClient } from "../axios/baseQuery";

export const GetPokemonDetails = async ({queryKey}) => {
    const { data } = await axiosClient.get(`pokemon-details/`, 
        { params: { s: queryKey[0] }
    }).then((res) => res);
    return data;
}