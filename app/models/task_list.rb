class TaskList < ApplicationRecord
  belongs_to :board
  has_many :task_cards
end
