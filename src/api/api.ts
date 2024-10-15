import axios, { AxiosResponse } from "axios"

const contriesApi = axios.create({
    baseURL: 'https://restcountries.com/v3.1'
})

export const getCountriesByRegion = async (region: string) => {
    try {
        const response: AxiosResponse = await contriesApi.get(`/region/${region}`, {
            params: {
                fields: 'name,capital,currencies,languages,population'
            }
        })
        return response.data
    } catch (error) {
        throw error
    }
}
