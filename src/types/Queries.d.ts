import type { SerieTeam } from './enums'

export interface IQueries {
  isInclude?: string
}

export interface IQueriesTeamStats extends IQueries {
  serie?: SerieTeam
}

export interface IQueriesCalendar extends IQueries {
  journeyId?: number
}

export interface IQueriesPlayerStats extends IQueries {
  order?: string
}
