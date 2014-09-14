require 'faker'

traitify_ids = [
  "fef5867a-a4a6-43e0-aa4e-94711ae71c51",
  "9c848797-25bd-4b4a-b5cb-b81052a52eb1",
  "f46c70ef-8b36-49c9-bf1e-6b3fcba2f0ad",
  "311d902f-24a9-4944-91da-dc3066e12b28",
  "3448fbdc-0dcd-4040-a137-d0b85a85f3f4",
  "195c1416-362a-4f88-9641-d9494b92e086",
]

[
  "San Francisco, CA",
  "1 main st, San Francisco",
  "Dely City, CA",
  "Palo Alto, CA",
  "Golden Gate Park, San Francisco",
  "Chicago",
  "New York"
].each_with_index do |address, i|
  guide = Guide.where(email: "guide-#{i}@example.com").first_or_initialize
  guide.name        = Faker::Name.name
  guide.address     = address
  guide.traitify_id = traitify_ids[rand(traitify_ids.length + 1)]
  guide.password    = 'secret'
  guide.save!
end
