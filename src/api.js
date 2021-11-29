const path = "https://api.github.com/users";

export const getUsers = async () => fetch(path).then((res) => res.json());

export const getUserByName = async (username) =>
  fetch(`${path}/${username}`).then((res) => res.json());

export const getUserRepos = async (username) =>
  fetch(`${path}/${username}/repos`).then((res) => res.json());
