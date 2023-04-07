import { getCities } from '$lib/api';
import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        const searchQuery = data.get('search-query');


        if (!searchQuery) return fail(400, { searchQuery, missing: true })

        const cities = await getCities(searchQuery.toString())
        console.log(cities);

        return { cities }
    }
} satisfies Actions;