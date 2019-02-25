class Projects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.string :title
      t.text :description
      t.string :project_link
      t.string :img_link
      t.timestamps
    end
  end
end
