# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
apartments = Apartment.create([
  {
    street1: 'ABC Street',
    city: 'San Diego',
    zip: '91942',
    state: 'CA',
    manager: 'Best Manager',
    phone: '111-111-1111',
    hours: '9am-5pm M-F'
  },
  {
    street1: 'Example Street',
    city: 'San Diego',
    zip: '91927',
    state: 'CA',
    manager: 'John Snow',
    phone: '123-456-7890',
    hours: '8am-6pm Mon-Sun'
  }
])

users = User.create([
  {
    email: 'exampleuser@me.com',
    password: '123123',
    password_confirmation: '123123'
  },
  {
    email: 'me@example.com',
    password: '123123',
    password_confirmation: '123123'
  }
])
