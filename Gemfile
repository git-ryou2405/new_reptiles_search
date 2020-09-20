source 'https://rubygems.org'

ruby '2.6.6'

gem 'rails', '~> 6.0.3', '>= 6.0.3.2'
# gem 'sqlite3', '~> 1.4'                        # RDB形式のデータベースまたはデータベース管理ソフト（RDB=SQLを扱うことのできるDBのこと）
gem 'puma', '~> 4.1'                           # スピードと並列処理を追求したRubyのスレッドベースのWebサーバー
gem 'sass-rails', '>= 6'                       # SCSS(Syntactically Awesome StyleSheet：効率的にCSSが書ける言語)
gem 'webpacker', '~> 4.0'                      # CSS、JavaScript、画像などを１つのファイルとしてまとめるためのモジュールバンドラー、node.jsモジュールの１つ
gem 'turbolinks', '~> 5'                       # Ajaxによるページ遷移の高速化のためのライブラリ
gem 'jbuilder', '~> 2.7'                       # json形式のデータを簡単に作る為のgem
gem 'bootsnap', '>= 1.4.2', require: false     # railsの起動時の処理を最適化することで起動時間を短縮してくれる便利なgemです。
# ここまでデフォルト

# ここから追加
gem 'coffee-rails', '~> 5.0.0'                 # JavaScriptのコードを生成するためのコンパクトなrubyライクなスクリプト言語
gem 'jquery-rails'                             # RailsでjQueryを使えるようにするためのgem
gem 'uglifier'                                 # JavaScriptの圧縮をしてくれるgem（ES5までしか対応してない）
gem 'bootstrap'                                # bootstrap導入
gem 'bootstrap-social-rails'                   # bootstrap-social for Rails asset pipeline
gem 'sassc', '~> 2.0.0'                        # Sass言語の利用

gem 'will_paginate'                            # ページネション
gem 'bootstrap-will_paginate'                  # ページネション(bootstrap)
gem 'carrierwave'                              # 画像のアップロード
gem 'mini_magick'                              # 画像リサイズ（ImageMagickのラッパー）
gem 'colorize'                                 # ログの色付け
# gem 'font-awesome-sass'                        # FontAwesome
gem 'gretel'                                   # パンくずリスト
gem 'gon'                                      # JavascriptとRails連携

gem 'rails-i18n'                               # 日本語化
gem 'faker'                                    # ダミーデータ自動生成用
gem 'bcrypt'                                   # パスワード暗号化 "Use ActiveModel has_secure_password"
gem 'dotenv-rails'                             # 環境変数を管理できるgem

# ログイン機能（OAuth認証）
gem 'devise'
gem 'devise-i18n'                              # 日本語化
gem 'devise-bootstrap-views', '~> 1.0'         # 日本語化
gem 'omniauth'
# gem "omniauth-rails_csrf_protection"           # OAuthはこっちのほうがセキュリティ上、安全らしい
gem 'omniauth-twitter'                         # Twitter
gem 'omniauth-facebook'                        # Facebook
gem 'omniauth-google-oauth2'                   # Google
# gem 'omniauth-github'                          # Github
# gem 'omniauth-line'                            # Line

# デバッグ機能
# gem 'pry-rails'                              # デバッグ機能（Rails console で Pry が起動するようになる）
# gem "pry-byebug"                             # デバッグ機能（binding.pry（Viewファイルでは<% binding.pry %>）をブレークポイントとして記述）
gem 'hirb'                                   # モデルの出力結果を表形式で表示するGem
gem 'hirb-unicode'                           # 日本語などマルチバイト文字の出力時の出力結果のずれに対応

# other
# gem "haml-rails", "~> 2.0"                   # haml導入
# gem 'mini_racer'                             # Javascriptの実行エンジンであるv8をRubyから叩ける用にしてくれるgem（※旧だと therubyracer らしい？）
# gem 'therubyracer'                           # Javascriptの実行エンジンであるv8をRubyから叩ける用にしてくれるgem

group :development, :test do
  gem 'sqlite3'
  # gem 'pg', '0.20.0'
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
end

group :development do
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '~> 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

group :test do
  gem 'capybara', '>= 2.15'
  gem 'selenium-webdriver'
  gem 'webdrivers'
end

group :production do
  gem 'pg', '0.20.0'
end
