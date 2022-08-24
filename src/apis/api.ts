import teams from './teams.json'
export const getTeams =(team:string) => {
    switch (team) {
        case 'All':
            return teams.teams
        
        case 'Favorites':
            return teams.teams.filter((t)=>t.is_favorited)

        case 'Archived':
            return teams.teams.filter((t)=>t.is_archived)
        default:
            return [];
    }
}

export const getActivities = () => {
    return teams.activities
}