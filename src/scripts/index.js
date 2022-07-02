async function user() {
    const response = await fetch('https://api.github.com/users/fincci')
    return await response.json()
}

user()

console.log(user());