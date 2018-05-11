var OpenIssueOnRepoCreation = require('./lib/open-issue-on-repo-creation')

function openIssueOnRepoCreation (robot) {
  robot.on('repository.created', async context => {
    return OpenIssueOnRepoCreation.analyze(context.github, context.repo(), context.payload, robot.log)
  })
}

module.exports = openIssueOnRepoCreation
