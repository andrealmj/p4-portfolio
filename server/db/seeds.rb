# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Project.destroy_all

User.create!([
    {email: "user@user.com", password: "password", password_confirmation: "password", reset_password_token: nil, reset_password_sent_at: nil, remember_created_at: nil},
    {email: "test@test.com", password: "password", password_confirmation: "password", reset_password_token: nil, reset_password_sent_at: nil, remember_created_at: nil},
    {email: "andrealmj@live.com", password: "password", password_confirmation: "password", reset_password_token: nil, reset_password_sent_at: nil, remember_created_at: nil}
])

# Dummy data for user 8 (user@user.com)
Project.create(title: "User proj 1", description: "My first project ever", project_link: "http://www.github.com", img_link: "https://www.mondragon-assembly.com/wp-content/uploads/2016/04/cosmetic1.jpg", :user_id => 8)
Project.create(title: "User proj 2", description: "My 2nd project ever", project_link: "http://www.github.com", img_link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtbhVn1BUPW61by8FOCtRbzOJsPM_ioN4tF3zQR5w-Yqh4XPFK", :user_id => 8)

# Dummy data for user 9 (test@test.com)
Project.create(title: "test Project 1", description: "first test project", project_link: "http://www.github.com", img_link: "http://www.pawculture.com/uploads/versions/scottishfold-2---x----670-440x---.jpg", :user_id => 9)
Project.create(title: "test Project 2", description: "second test project", project_link: "http://www.github.com", img_link: "https://i.pinimg.com/originals/a3/e1/6f/a3e16f68d8d04e3bfbfc602fe57f7f06.jpg", :user_id => 9)

