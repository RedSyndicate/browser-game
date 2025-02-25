import { fail } from "@sveltejs/kit"
import { db } from "$lib/db"
import type { PageServerLoad } from "./$types"

export const load: PageServerLoad = async ({ params }) => {
    const server = await db.server.findUnique({
        where: {
            id: params.id
        },
        include: {
            worlds: true,
            players: {
                include: {
                    profile: true,
                    settlements: true
                }
            }
        }
    });

    if (!server) {
        fail(404, { success: false, id: params.id })
    }

    return {
        server
    }
}
