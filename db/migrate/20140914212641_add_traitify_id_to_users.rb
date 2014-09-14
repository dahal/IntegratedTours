class AddTraitifyIdToUsers < ActiveRecord::Migration
  def change
    add_column :users, :traitify_id, :string
  end
end
