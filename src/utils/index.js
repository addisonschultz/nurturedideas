const getArtistSlug = artistName => {
  return artistName.replace(/ /g, "-").toLowerCase()
}

const orderReleases = (artists, nonLabelReleases) => {
  let releases = []

  console.log("ARTISTS", artists)
  console.log("nonArtistReleases", nonLabelReleases)

  nonLabelReleases.map((release, index) => {
    console.log(release)

    releases.push({
      artistName: release.node.artistName,
      releaseName: release.node.releaseName,
      releaseDate: release.node.releaseDate,
      image: release.node.image,
      link: release.node.link,
    })
  })

  // artists.map((artist, artistIndex) => {
  //   artist.node.releases &&
  //     artist.node.releases.map((release, releaseIndex) =>
  //       releases.push({
  //         release,
  //         artistName: artist.node.artistName,
  //         artistId: artistIndex,
  //         releaseId: releaseIndex,
  //       })
  //     )
  // })

  console.log("TOTAL RELEASES", releases)

  // return releases
}

exports.getArtistSlug = getArtistSlug
exports.orderReleases = orderReleases
