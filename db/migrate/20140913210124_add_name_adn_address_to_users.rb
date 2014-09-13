class AddNameAdnAddressToUsers < ActiveRecord::Migration
  def change
    add_column :users, :type, :string, null: false
    add_column :users, :name, :string, null: false
    add_column :users, :address, :string, null: false
  end
end
