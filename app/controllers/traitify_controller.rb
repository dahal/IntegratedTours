class TraitifyController

Traitify.configure do |config|
  # live url
  # config.api_host = "https://api.traitify.com"

  # testing url
  config.api_host = "https://api-sandbox.traitify.com"

  config.api_version = "v1"
  config.secret = ENV['TRAITIFY_SECRET_KEY']
  config.deck_id = "super-hero"
end


end
