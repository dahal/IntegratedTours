class AddCoordsToUsers < ActiveRecord::Migration
  def change
    add_column :users, :latitude, :float, null: false
    add_column :users, :longitude, :float, null: false
  end
end
