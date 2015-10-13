# Automatic image dimensions on image_tag helper
# activate :automatic_image_sizes
require "uglifier"

set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'
set :slim, pretty: true
set :relative_links, true

configure :development do
  activate :livereload
end

configure :build do
  activate :relative_assets
  activate :gzip
  activate :minify_html
  activate :minify_css
  activate :minify_javascript, :compressor => Uglifier.new({
    :output => {
      :comments => :none
    }
  })
  activate :imageoptim
end

activate :blog do |blog|
  blog.default_extension = ".md"
  blog.layout = "blog"
  blog.permalink = "{title}.html"
  blog.prefix = "blog"
  blog.sources = "{title}"
end

activate :directory_indexes

activate :deploy do |deploy|
  deploy.build_before = true
  deploy.method = :git
end
