import { fail } from "@sveltejs/kit"
import { db } from "$lib/db"
import type { PageServerLoad } from "./$types"

export const load: PageServerLoad = async ({ params }) => {
    const tile = await db.tile.findUnique({
        where: {
            id: params.id
        },
        include: {
            Biome: true,
            Plots: true,
            Region: true
        }
    });

    if (!tile) {
        fail(404, { success: false, id: params.id })
    }

    return {
        tile
    }
}