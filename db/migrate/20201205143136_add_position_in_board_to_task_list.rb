class AddPositionInBoardToTaskList < ActiveRecord::Migration[5.1]
  def change
    add_column :task_lists, :position_in_board, :integer
  end
end
