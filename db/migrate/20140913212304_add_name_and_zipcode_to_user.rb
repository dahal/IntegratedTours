class AddNameAndZipcodeToUser < ActiveRecord::Migration
  def change
    change_table :users do |t|
      t.string :name
      t.string :zipcode
    end
  end
end
