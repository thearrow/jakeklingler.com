[jakeklingler.com](http://jakeklingler.com)
--
([View on GitHub Pages](http://thearrow.github.io/jakeklingler.com/))

###About
Personal static resume site built with:
- [Middleman](http://middlemanapp.com/)
    - [Slim](http://slim-lang.com/)
    - [SASS](http://sass-lang.com/)
    - [CoffeeScript](http://coffeescript.org/)
    - [YAML](http://www.yaml.org/)
- [GitHub Pages](https://pages.github.com/)
- [Entypo Icons](http://www.entypo.com/)

Built with a focus on simplicity and maintainability, using languages chosen to wage war on squiggly braces, angle brackets, and semicolons.
All actual content is in the `/data` folder, all layout is in `/source`.

###Development
(*OSX with Homebrew*)
```
git clone git@github.com:thearrow/personal-site.git
cd personal-site
bundle install
brew install advancecomp gifsicle jhead jpegoptim jpeg optipng pngcrush
middleman server
```

###Deployment
```
middleman deploy
```
