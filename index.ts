import express from 'express';
import axios from 'axios';

const app = express();
const PORT = 3000;
const GITHUB_API_URL = 'https://api.github.com/'

interface Repo {
  name: string;
  stargazers_count: number;
  html_url: string;
}

// 1. Consumo de APIs
const getPopularRepos = async (username: string): Promise<Repo[]> => {
  try {
    const response = await axios.get(`${GITHUB_API_URL}search/repositories?q=org:${username}&sort=stars&order=desc`);

    const repos = response.data.items.map((repo: any) => ({
        name: repo.name,
        stargazers_count: repo.stargazers_count,
        html_url: repo.html_url,
      }));
  

    return repos.slice(0, 10);
  } catch (error: any) {
    console.error(`Error fetching repos for user ${username}:`, error.message);
    throw error;
  }
};

app.get('/', async (req, res) => {
  const username = 'google';
  try {
    const repos = await getPopularRepos(username);
    res.json(repos);
  } catch (error) {
    res.status(500).send('Error fetching repos');
  }
});

// 2. Nomenclatura
function sinOfProduct(sum1: number, sum2:number, multiplier:number) {
    let sum = sum1 + sum2;
    let product = sum * multiplier;
    let sin = Math.sin(product);
    return sin;
} 

// 3. Pensamiento lógico
function getOddNumbersUpTo(n: number) {
    const oddNumbers = [];
    for (let i = 1; i <= n; i += 2) {
        oddNumbers.push(i);
    }
    return oddNumbers;
}

console.log(getOddNumbersUpTo(9)); // [1, 3, 5, 7, 9]

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
