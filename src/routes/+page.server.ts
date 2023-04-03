import type { PageServerLoad } from './$types';
import { getCities } from "$lib/api";

export const load = (async ({ url }) => {
    const query = url.searchParams.get("q")

    if (!query) {
        return { cities: null };
        // TODO: improve searching
    }

    const cities = await getCities(query)

    return {
        cities
    }
}) satisfies PageServerLoad;