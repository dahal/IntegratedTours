200.times do
  user_password        = 'Password'
  user_name            = Faker::Name.name
  user_email           = Faker::Internet.email
  user_zip             = Faker::Address.zip_code

  Guide.create(
    name: user_name,
    email: user_email,
    password: user_password,
    zipcode: user_zip
    )

end

200.times do

  user_password        = 'Password'
  user_name            = Faker::Name.name
  user_email           = Faker::Internet.email
  user_zip             = Faker::Address.zip_code
  
  Tourist.create(
    name: user_name,
    email: user_email,
    password: user_password,
    zipcode: user_zip
    )
end