[
  "San Francisco, CA",
  "1 main st, San Francisco",
  "Dely City, CA",
  "Palo Alto, CA"
].each_with_index do |address, i|
  Guide.where(email: 'guide-#{i}@example.com').first_or_create!(
    name: 'John Smith #{i}',
    address: address,
    password: 'secret'
  )
end
