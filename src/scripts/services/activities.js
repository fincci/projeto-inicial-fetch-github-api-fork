import { baseUrl, activitiesQuantity } from "../variables.js";

async function getActivities(userName) {
    const response = await fetch(`${baseUrl}/${userName}/events?per_page=${activitiesQuantity}`)
    return await response.json()
}

export { getActivities }