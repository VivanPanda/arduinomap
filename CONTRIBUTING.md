# Contributing to ArduinoMap

First off, thank you so much for expressing interest in contributing! People like you help ArduinoMap flourish. ❤️

All types of contributions are encouraged and valued. Please make sure to understand how to contribute to this community. We look forward to your contributions. 🎉

## Code of Conduct

This project and everyone participating in it is governed by the
[Code of Conduct](CODE_OF_CONDUCT.md).
By participating, you are expected to uphold this code. 

## I Want To Contribute

### Minor Changes

To correct minor issues, you can open an issue or a PR to contribute. Some minor issues include:

- Typos or grammar errors
- Syntax errors
- Other small-scale changes. For instance, "I think this video in the `Next Steps` section would be a useful addition."

### Major Changes

Major changes have a larger impact on the curriculum and website. Examples of major issues are:

- Adding a new section to an existing lesson
- Adding a completely new lesson
- A new feature for the website

To get started working on a major change easily, open an [Issue](/issues/new) and wait for a response rather than submitting a pull request (PR). This is to prevent your time and work from going to waste if your proposal isn't accepted. 

#### Creating an Issue

If you will be working on suggesting a major change, create a new issue and read the issue template, using it to fill out all the sections appropriately. This allows your contribution to be dealt with quicker. 

## Setting Up Your Local Clone

Before you begin working on anything, make sure you follow these steps in order to set up a clone on your local machine:

1. Fork the repo to your own GitHub account so that you can work on adding a feature. If you don't know how to do so, follow the GitHub documentation on how to [fork a repo](https://docs.github.com/en/get-started/quickstart/fork-a-repo).

2. Clone the forked repo to your local machine with one of the commands below. Be sure the `<your username>` text is replaced with your actual GitHub username, and the `<repo name>` with the actual repo name. You can also read the GitHub documentation on [cloning a repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository).

    ```bash
    # If you have SSH set up with Git:
    git clone git@github.com:<your username>/<repo name>.git
    # Otherwise for HTTPS:
    git clone https://github.com/<your username>/<repo name>.git

    # An example:
    git clone git@github.com:ILoveArduinoMap/arduinomap-new-feature.git
    ```

3. `cd` into the directory of your local clone, then set the upstream remote so you can keep your local clone synced with ArduinoMap's original repo. The `<repo name>` below should be the same as the one you used when creating your local clone in the previous step.

## Working on an Issue

Once you have the repo forked and cloned, and the upstream remote has been set, you can begin working on your issue:

1. Create a new branch, replacing the `<your branch name>` with an actual branch name that briefly explains the purpose of the branch in some way:

    ```bash
    git checkout -b <your branch name>

    # Some examples:
    git checkout -b fix_servo_motor_exercise
    git checkout -b serial_port_lesson_update
    ```

2. Add commits as you work on your issue, replacing the `<your commit message>` text with your actual commit message:

   ```bash
   git commit -m "<your commit message>"

   # An example:
   git commit -m "Update assignment instructions"
   ```

3. Sync your work with the upstream remote every so often. 

4. Push your branch to your forked repo, replacing the `<your branch name>` with the branch you've been working on locally:

    ```bash
    git push origin <your branch name>

    # An example:
    git push origin arduinomap-new-feature
    ```

### Opening a Pull Request

1. After pushing your changes, go to your forked repo on GitHub and click the "Compare & pull request" button. If you have multiples of this button, be sure you click the one for the correct branch.
   * If you don't see this button, you can click the branch dropdown menu and then select the branch you just pushed from your local clone:

   * Once you have switched to the correct branch on GitHub, click the "Contribute" dropdown and then click the "Open pull request" button.

2. **Read the PR template in its entirety before filling it out and submitting a PR**. Not filling out the template correctly will delay a PR getting merged.

3. At this point a maintainer will either leave general comments, request changes, or approve and merge your PR.
   * It is important to respond to any comments or requested changes in a timely manner, otherwise your PR may be closed without being merged due to inactivity.
   * After pushing any requested changes to the branch you opened the PR with, be sure to re-request a review from the maintainer that requested those changes at the top of the right sidebar (this will only appear when a maintainer is assigned as a reviewer or has requested changes):
