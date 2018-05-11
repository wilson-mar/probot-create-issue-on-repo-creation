# Probot Example: Create Issue upon Repo Creation

This repository contains a sample GitHub App built with [probot](https://github.com/probot/probot) creates a new issue in a newly-created repository and `@mention`s the creator with instructions for first steps.

## Setup

Please note that this app is meant to demonstrate the functional capabilities of a Probot app and is not production-ready. It is strongly recommended that a user takes the following steps prior to use:

- [Duplicate](https://help.github.com/articles/duplicating-a-repository/) this repository into a repository in your own user account or organization
- In your new repository, open a pull request between the `new-repo-issue` and `master` branches and review the changes introduced. This represents all of the code used to implement this app.
  - Note that this app does not have any testing implemented. It is strongly recommended that you implement testing prior to production deployment. For guidance on implementing testing in a Probot app, see this [documentation](https://probot.github.io/docs/testing/).
- Configure a [GitHub App](https://probot.github.io/docs/development/#configuring-a-github-app) on GitHub
- Read the in-line documentation explaining the functionality of the app
- Customize the implementation to fit your needs

## Configuration
Under the current implementation, there are several configurable attributes. Defaults for these attributes can be set in the [defaults.js](./lib/defaults.js) file, but it is recommended that each org in which this is implemented creates an override file with a file called `.github/open-issue-on-repo-creation.yml` file in the Repository, `org-settings`. This Repository will contain global settings for the Organization. You can name the settings repository anything you'd like; just add the repository name to your defaults.js file.

```yml
# Configuration for Create Issue Upon Repo Creation


# Enables detection and removal of any Outside Collaborator being added to the assigned repositories
enableIssueCreation: true

# Issue Title when a repository is created
createdIssueTitle: 'Repository Setup First Steps'

# Issue Body when a repository is created
createdIssueBody: 'Congratulations! You\'ve just created a new repository. Please complete the following tasks to make sure that your work can be seen and discoverable by other members of the organization:\n- [ ] Give @[YOUR_ORG_NAME]/[YOUR_TEAM_NAME] at least read access\n- [ ] Add some [topics](https://blog.github.com/2017-01-31-introducing-topics/) that describe the content and purpose of your repository'

# Users/Groups that should be cc'ed on the issue. Should be users/groups separated by a space.
# ccList: '@user123 @user456'
```

## Deployment

Probot is a standard NodeJS app, and thus can be deployed as such. [Documentation](https://probot.github.io/docs/deployment) is available on the Probot website, which provides directions for deployment using Glitch, Heroku, and Now.

If you have multiple Probot apps that you would like to deploy together, see [Combining apps](https://probot.github.io/docs/deployment/#combining-apps).
