# frozen_string_literal: true

source "https://rubygems.org"

ruby "3.0.2"
DECIDIM_VERSION = { git: "https://github.com/decidim/decidim", branch: "feat/privacy_policy_summary" }

gem "decidim", DECIDIM_VERSION
# gem "decidim-conferences", "0.27.0.dev"
# gem "decidim-consultations", "0.27.0.dev"
# gem "decidim-elections", "0.27.0.dev"
# gem "decidim-initiatives", "0.27.0.dev"
# gem "decidim-templates", "0.27.0.dev"

gem "bootsnap", "~> 1.3"

gem "puma", ">= 5.0.0"

gem "faker", "~> 2.14"

gem "wicked_pdf", "~> 2.1"

group :development, :test do
  gem "byebug", "~> 11.0", platform: :mri

  gem "brakeman"
  gem "decidim-dev", DECIDIM_VERSION
end

group :development do
  gem "letter_opener_web", "~> 1.3"
  gem "listen", "~> 3.1"
  gem "spring", "~> 2.0"
  gem "spring-watcher-listen", "~> 2.0"
  gem "web-console", "~> 4.2"
end

group :production do
end
