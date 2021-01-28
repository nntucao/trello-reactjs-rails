class RemoveUniqueIndexInBoards < ActiveRecord::Migration[5.1]
  def change
    remove_index :boards, :user_id
    add_index :boards, :user_id
  end
end
