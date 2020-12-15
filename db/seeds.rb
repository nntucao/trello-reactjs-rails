# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# 2.times do |i|
#   User.create(email: "user-#{i+1}@example.com", password: "password", password_confirmation: "password")
# end

# User.create(email: "user-4@example.com", password: "password", password_confirmation: "password")
# User.create(email: "user-5@example.com", password: "password", password_confirmation: "password") =end
#
# =begin
# 5.times do |b|
#     Board.create(name: "board-#{b+1}", uid: "#{b+2}")
# end

#
# 5.times do |ub|
#   if ub.even?
#     UserBoard.create(user_id: 1, board_id: ub)
#   else
#     UserBoard.create(user_id: 2, board_id: ub)
#   end
# end

# TaskList.create!(name: "First Task List Seed", is_archived: false, board_id: 1)
# TaskCard.create!(name: 'First Task Card Seed', is_archived: false, task_list_id: 1)
TaskCard.create!(name: 'Seconde Task Card Seed', is_archived: false, task_list_id: 1)
