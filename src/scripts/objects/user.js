const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '',
    followers: '',
    following: '',
    repos: [],
    activities: [],
    setUserInfo(gitHubUser) {
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
        this.followers = gitHubUser.followers
        this.following = gitHubUser.following
    },
    setReposInfo(repos) {
        this.repos = repos
    },
    setActivitiesInfo(activities) {
        this.activities = activities
    }
}

export { user }