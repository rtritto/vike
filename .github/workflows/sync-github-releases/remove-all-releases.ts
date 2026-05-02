export { removeAllReleases }

import { getAllReleases, getGithubToken, getRepository, githubRequest } from './github-utils'

async function removeAllReleases() {
  const token = getGithubToken()

  const { owner, repo } = getRepository()
  console.log(`Fetching releases for ${owner}/${repo} …`)

  const releases = await getAllReleases(owner, repo, token)

  console.log(`Starting delete of ${releases.length} releases …`)

  for (const release of releases) {
    console.log(`Deleting release ${release.tag_name} (ID: ${release.id}) …`)

    // https://docs.github.com/en/rest/releases/releases#delete-a-release
    await githubRequest(`/repos/${owner}/${repo}/releases/${release.id}`, {
      method: 'DELETE',
      token,
    })
  }

  console.log(`Deleted ${releases.length} releases.`)
}
