require 'faker'

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Car.destroy_all
Type.destroy_all
User.destroy_all
Vehicle.destroy_all

admin = User.create!(username: 'admin', email: 'admin@gmail.com', password: '123456')

puts "#{User.count} users created"

small = Type.create!(model: 'small')
medium = Type.create!(model: 'medium')
large = Type.create!(model: 'large')
suv = Type.create!(model: 'suv')

puts "#{Type.count} types created"

nissan = Car.create!(make: "nissan", user: admin)

puts "#{Car.count} cars created"

nissan.types << small
nissan.types.push(medium, large)

# honda = Vehicle.create!(name: 'honda', user: admin)
30.times do
  Vehicle.create(
    name: Faker::Vehicle.make_and_model,
    description: Faker::Vehicle.standard_specs,
    information: Faker::Vehicle.standard_specs,
    # imageURL: Faker::LoremPixel.image(category: 'vehicles')
    imageURL: Faker::LoremFlickr.image(search_terms: ['vehicles'])
    # imageURL: Faker::LoremPixel.image 
  )
end
puts "#{Vehicle.count} vehicles created"
# t.string :name
# t.text :description
# t.string :imageURL
# t.integer :price