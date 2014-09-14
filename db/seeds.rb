require 'faker'

[
  "San Francisco, CA",
  "1 main st, San Francisco",
  "Dely City, CA",
  "Palo Alto, CA",
  "Golden Gate Park, San Francisco",
  "Chicago",
  "New York"
].each_with_index do |address, i|
  Guide.where(email: "guide-#{i}@example.com").first_or_create!(
    name: Faker::Name.name,
    address: address,
    password: 'secret'
  )
end
