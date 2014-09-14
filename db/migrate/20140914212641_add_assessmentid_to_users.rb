class AddAssessmentidToUsers < ActiveRecord::Migration
  def change
    add_column :users, :assessmentid, :string
  end
end
