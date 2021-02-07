const getUrlSlug = artistName => {
  return artistName
    .replace(/ /g, "-")
    .replace("#", "")
    .replace(",", "")
    .replace(".", "")
    .replace("'", "")
    .replace("%", "")
    .toLowerCase()
}

const getAllReleases = (artists, nonLabelReleases) => {
  let releases = []

  nonLabelReleases.map(release => {
    releases.push({
      artistName: release.node.artistName,
      releaseName: release.node.releaseName,
      releaseDate: release.node.releaseDate,
      releaseImages: [...release.node.releaseImages],
      link: release.node.link,
      preOrderLink: release.node.preOrderLink,
      releaseDescription: release.node.releaseDescription,
      trackListing: release.node.trackListing && [...release.node.trackListing],
    })
  })

  artists.map(artist => {
    artist.node.releases &&
      artist.node.releases.map(release =>
        releases.push({
          artistName: artist.node.artistName,
          releaseName: release.releaseName,
          releaseDate: release.releaseDate,
          releaseImages: [...release.releaseImages],
          link: release.link,
          preOrderLink: release.preOrderLink,
          releaseDescription: release.releaseDescription,
          trackListing: release.trackListing && [...release.trackListing],
        })
      )
  })

  return releases
}

exports.getUrlSlug = getUrlSlug
exports.getAllReleases = getAllReleases
