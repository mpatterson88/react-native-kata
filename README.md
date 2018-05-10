[![Build Status](https://travis-ci.org/mpatterson88/react-native-kata.svg?branch=master)](https://travis-ci.org/mpatterson88/react-native-kata)


# Steps to Complete Kata

## Machine Setup

* Install nvm to manage node versions: https://github.com/creationix/nvm
* Install current version of nodejs: `nvm install node`
* Update npm to the most recent version: `npm i -g npm`
* Install yarn: `brew install yarn --without-node`
* Install react-native-cli: `npm install -g react-native-cli`
* Install create-react-native-app: `npm install -g create-react-native-app`
* Create project: `create-react-native-app top-notch-recipes`

Running `yarn start` in the project directory failed, so I had to run the following commands to get it working:
* `sudo sysctl -w kern.maxfiles=5242880`
* `sudo sysctl -w kern.maxfilesperproc=524288`

Running `yarn test` in the project directory failed, suffering from this issue: https://github.com/facebook/react-native/issues/19120

Downgrading to the most recent LTS version of nodejs fixed the problem.
* `nvm install --lts`
* `nvm use lts/*`
