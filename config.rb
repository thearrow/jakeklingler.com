# Automatic image dimensions on image_tag helper
# activate :automatic_image_sizes
require "uglifier"

configure :development do
  activate :livereload
end

activate :bower
set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'
set :slim, pretty: true
sprockets.append_path '/vendor'

# Build-specific configuration
configure :build do
  activate :minify_html
  activate :minify_css
  activate :minify_javascript, :compressor => Uglifier.new({
    :output => {
      :comments => :none
    }
  })
  activate :gzip
  activate :imageoptim do |image_optim|
    image_optim.pngout_options = false
  end

  # Enable cache buster
  # activate :asset_hash

  activate :relative_assets
  # Or use a different image path
  # set :http_prefix, "/Content/images/"
end

activate :deploy do |deploy|
  deploy.build_before = true
  deploy.method = :git
end
