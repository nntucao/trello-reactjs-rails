class AddGoogleIdToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :googleId, :integer
  end
end
