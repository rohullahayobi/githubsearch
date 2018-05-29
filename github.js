class Github{
  constructor() {
    this.client_id = "0c04a2a3ecbc60743934";
    this.client_secret = "9f95702202fe7f01ef6e4c54ece2b4009e1e4a07";
  }


 async getUser(user) {

  const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

  const profile = await profileResponse.json();

  return {
    profile
  }
}
}