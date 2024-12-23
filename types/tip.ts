export interface ITipApi {
  id: number
  odds: number
  starts: string
  description: string
  homeTeam: { id: number, name: string, logo: { url: string } }
  awayTeam: { id: number, name: string, logo: { url: string } }
  tipSelections: [
    { title: string }
  ]
  league: {
    title: string
    id: string
    logo: { url: string }
  }
}
