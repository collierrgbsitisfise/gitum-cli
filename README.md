# GITUM-CLI

GITUM(git user namagement) - is a simple CLI tool which provide posibilty to manage multiple git users on your machine

### Install
```sh
$ npm i -g gitum-cli
```

### Usage

| command | alias | description |
| ------ | ------ | ------ |
| gum help | gum h | get help info |
| gum new **[userName]** **[userEmail]** **[alias]** | gum n **[userName]** **[userEmail]** **[alias]**  | create new git user  |
| gum delete **[alias]** | gum d **[alias]**  | delete git user  |
| gum set **[alias]**| gum s **[alias]**  | set current git user by alias  |
| gum current | gum current  | get current git user info  |
| gum list | gum l | get git users list  |
