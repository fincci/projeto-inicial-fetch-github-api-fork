const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '',
    repos: [],
    setUserInfo(gitHubUser) {
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
    },
    setReposInfo(repos) {
        this.repos = repos
    }
}

export { user }