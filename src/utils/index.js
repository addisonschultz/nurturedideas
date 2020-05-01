const getArtistSlug = artistName => {
  return artistName.replace(/ /g, "-").toLowerCase()
}

const getAllReleases = (artists, nonLabelReleases) => {
  let releases = []

  nonLabelReleases.map((release, index) => {
    releases.push({
      index: index,
      artistName: release.node.artistName,
      releaseName: release.node.releaseName,
      releaseDate: release.node.releaseDate,
      image: release.node.image,
      link: release.node.link,
    })
  })

  artists.map(artist => {
    artist.node.releases &&
      artist.node.releases.map((release, releaseIndex) =>
        releases.push({
          index: releaseIndex,
          artistName: artist.node.artistName,
          releaseName: release.releaseName,
          releaseDate: release.releaseDate,
          image: release.image,
          link: release.link,
        })
      )
  })

  return releases
}

exports.getArtistSlug = getArtistSlug
exports.getAllReleases = getAllReleases
