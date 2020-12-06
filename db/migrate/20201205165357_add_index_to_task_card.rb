class AddIndexToTaskCard < ActiveRecord::Migration[5.1]
  def change
    add_index :task_cards, :name
  end
end
