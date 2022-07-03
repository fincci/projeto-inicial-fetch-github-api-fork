import { getUser } from './services/user.js'
import { getRepos } from './services/repositories.js'

import { user } from "./objects/user.js";
import { screen } from "./objects/screen.js";
import { getActivities } from './services/activities.js';

document.getElementById('btn-search').addEventListener('click', () => {
    const userName = document.getElementById('input-search').value

    if (validateEmptyInput(userName)) return
    getUserData(userName)
})

function validateEmptyInput(userName) {
    if (userName.length === 0) {
        alert('Preencha o campo com o nome do usuário do GitHub')
        return true
    }
}

document.getElementById('input-search').addEventListener('keyup', (e) => {
    const userName = e.target.value
    const key = e.which || e.keyCode
    const isEnterKeyPressed = key === 13

    if (isEnterKeyPressed) {
        if (validateEmptyInput(userName)) return
        getUserData(userName)
    }
})

async function getUserData(userName) {
    const userResponse = await getUser(userName)
    const reposResponse = await getRepos(userName)
    const activitiesResponse = await getActivities(userName)
    if (userResponse.message === 'Not Found') {
        screen.renderNotFound()
        console.log(userResponse.message);
    } else {
        user.setUserInfo(userResponse)
        user.setReposInfo(reposResponse)
        user.setActivitiesInfo(activitiesResponse)
        screen.renderUser(user)
    }

}