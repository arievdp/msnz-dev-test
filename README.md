# README

Welcome!

This project is a blog that displays Markdown files using Ruby on Rails as the backend, and React JS as the frontend.

I have deployed the app on Heroku - url: https://msnz-md-blog.herokuapp.com/

This project uses:
- [Ruby on Rails](https://rubyonrails.org/)
- [React JS](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [Material UI](https://material-ui.com/)
- [Axios](https://github.com/axios/axios)
- [RedCarpet](https://github.com/vmg/redcarpet)

## Installation
This app requires Ruby version 2.6.6 on your computer. You may already have Ruby installed on your computer. You can check inside a terminal emulator by typing:

```ruby -v```

If your version of Ruby is different to 2.6.6, you can use `rbenv`, a Ruby Version Manager, to install a specific version of Ruby. Check out the [documentation](https://github.com/rbenv/rbenv#installing-ruby-version).

If you need help with installing Ruby using `rbenv`, you can follow these guides: 
- [Mac OSX](https://www.digitalocean.com/community/tutorials/how-to-install-ruby-on-rails-with-rbenv-on-macos)
- [Ubuntu](https://www.digitalocean.com/community/tutorials/how-to-install-ruby-on-rails-with-rbenv-on-ubuntu-18-04)

## Setup

```bash
# clone the repo
git clone git@github.com:arievdp/msnz-dev-test.git

# install dependencies
cd msnz-dev-test
bundle install
yarn install --check-files

# database creation
rails db:create

```

## Run the app
```bash
# start your rails server
rails server

# alternatively, you can use this shortcut
rails s
```
