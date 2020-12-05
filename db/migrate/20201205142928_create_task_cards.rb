class CreateTaskCards < ActiveRecord::Migration[5.1]
  def change
    create_table :task_cards do |t|
      t.string :name
      t.datetime :due_date
      t.boolean :is_archived, default: false
      t.integer :position_in_tasklist
      t.references :task_list, foreign_key: true

      t.timestamps
    end
  end
end
