class FixUidColumnInBoards < ActiveRecord::Migration[5.1]
  def change
    rename_column :boards, :uid, :user_id
  end
end
