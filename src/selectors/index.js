export const getFilteredPlays = (allPlays, filter, watched) =>
  !filter.length
    ? allPlays
    : allPlays.filter( play =>
      (
        play.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1
        || play.director.toLowerCase().indexOf(filter.toLowerCase()) !== -1
        || play.theater.toLowerCase().indexOf(filter.toLowerCase()) !== -1
        || play.actors.filter( actor => actor.toLowerCase().indexOf(filter.toLowerCase()) !== -1).length > 0
      ) && (watched || !play.watched)
    )
