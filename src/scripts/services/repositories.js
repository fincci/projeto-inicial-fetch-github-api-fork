import { baseUrl, reposQuantity, reposSortBy } from '../variables.js'

async function getRepos(userName) {
    const response = await fetch(`${baseUrl}/${userName}/repos?per_page=${reposQuantity}&sort=${reposSortBy}`)
    return await response.json()
}

export { getRepos }