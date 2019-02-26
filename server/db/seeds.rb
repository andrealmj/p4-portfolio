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

# Dummy data for user 1 (user@user.com)
Project.create(title: "Project 1", description: "My first project ever", project_link: "http://www.github.com", img_link: "http://www.pawculture.com/uploads/versions/scottishfold-2---x----670-440x---.jpg", :user_id => 1)
Project.create(title: "Project 2", description: "My second project", project_link: "http://www.github.com", img_link: "https://i.pinimg.com/originals/a3/e1/6f/a3e16f68d8d04e3bfbfc602fe57f7f06.jpg", :user_id => 1)

# Dummy data for user 2 (test@test.com)
Project.create(title: "test proj 1", description: "first project by test user", project_link: "http://www.github.com", img_link: "https://www.mondragon-assembly.com/wp-content/uploads/2016/04/cosmetic1.jpg", :user_id => 2)