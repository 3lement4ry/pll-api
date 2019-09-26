import { get } from 'superagent'

const getFromPll = async (path: string) => {
  const url = `https://dn0a11v09sa0t.cloudfront.net/_Internal/${path}`
  try {
    const res = await get(url)
    return res.body
  } catch (err) {
    console.error(err)
  }
}
export const getPlayers = async () => {
  const playersPath = 'Players.json'
  const result = await getFromPll(playersPath)
  console.log(result)
}
export const getGames = async () => {
  const gamesPath = 'Games.json'
  const result = await getFromPll(gamesPath)
  console.log(result)
}