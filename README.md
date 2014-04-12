###About
Personal static resume site built with:
- [Middleman](http://middlemanapp.com/)

###Development
(*OSX with Homebrew*)
```
git clone git@github.com:thearrow/personal-site.git
cd personal-site
gem install bundler
bundle install
brew install advancecomp gifsicle jhead jpegoptim jpeg optipng pngcrush
middleman server
```

###Deployment
```
middleman deploy
```