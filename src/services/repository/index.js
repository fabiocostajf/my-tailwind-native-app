const { Octokit } = require("@octokit/rest")

export const getRepository = async (filter) => {
    const octokit = new Octokit({
        auth: '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'
      })
      if(!filter)
        return []
      const repos = await octokit.request('GET /search/repositories', {q:`${filter} in:name`, per_page:10})
      return repos?.data?.items ?? []
   
}

