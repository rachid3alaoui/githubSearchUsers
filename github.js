class Github {
  constructor() {
    this.client_id = 'a452718f16deebbaf12c';
    this.client_secret = '86c03250a88d8cdc1bacf32568022e5b5a2ceaf8';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`
  		https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}
  	`);

    const repoResponse = await fetch(`
  		https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}
    `);

    const profileData = await profileResponse.json();
    const repositories = await repoResponse.json();
    return {
      profile: profileData,
      repos: repositories,
    };
  }
}
