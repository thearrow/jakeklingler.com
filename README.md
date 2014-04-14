[View on GitHub Pages](http://thearrow.github.io/personal-site)

###About
Personal static resume site built with:
- [Middleman](http://middlemanapp.com/)
- [Bower](http://bower.io/)

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