class CreateTaskLists < ActiveRecord::Migration[5.1]
  def change
    create_table :task_lists do |t|
      t.string :name
      t.boolean :is_archived, default: false
      t.references :board, foreign_key: true

      t.timestamps
    end

    add_index :task_lists, :name
  end
end
