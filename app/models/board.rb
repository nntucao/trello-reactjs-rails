class Board < ApplicationRecord
  # default_scope { order(created_at: :desc) }
  validates :name, presence: true

  belongs_to :user
  has_many :task_lists
end
