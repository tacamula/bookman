source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

gem 'coffee-rails', '~> 4.2'
gem 'haml-rails'
gem 'jbuilder', '~> 2.5'
gem 'jwt'
gem 'knock'
gem 'puma', '~> 4.3'
gem 'rails', '~> 5.1.1'
gem 'sass-rails', '~> 5.0'
gem 'shrine'
gem 'sqlite3'
gem 'uglifier', '>= 1.3.0'
gem 'webpacker', '~> 3.0'

group :development, :test do
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  gem 'foreman'
end

group :development do
  gem 'erb2haml'
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'temple'
  gem 'web-console', '>= 3.3.0'
end
