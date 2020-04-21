const getArtistSlug = artistName => {
  return artistName.replace(/ /g, "-").toLowerCase()
}

const getReleases = artists => {
  let releases = []
  artists.map((artist, artistIndex) => {
    artist.node.releases &&
      artist.node.releases.map((release, releaseIndex) =>
        releases.push({
          release,
          artistName: artist.node.artistName,
          artistId: artistIndex,
          releaseId: releaseIndex,
        })
      )
  })
  return releases
}

exports.getArtistSlug = getArtistSlug
exports.getReleases = getReleases
