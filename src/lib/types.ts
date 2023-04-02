export interface OpenWeatherMapGeoCodingAPIResultOne {
    name: string;
    local_names: object;
    lat: number;
    lon: number;
    country: string;
    state?: string
}

export type OpenWeatherMapGeoCodingAPIResult = OpenWeatherMapGeoCodingAPIResultOne[]