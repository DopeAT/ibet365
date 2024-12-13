export interface ITipApi {
  id: number
  odds: number
  starts: string
  description: string
  homeTeam: { name: string, logo: { url: string } }
  awayTeam: { name: string, logo: { url: string } }
  league: {
    title: string
    id: string
    logo: { url: string }
    country: {
      name: string
      id: string
      flag: { slug: string }
    }
  }
}
