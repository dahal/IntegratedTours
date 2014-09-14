class CreateMessages < ActiveRecord::Migration
  def change
    create_table :messages do |t|
      t.text :message
      t.integer :sender_id
      t.integer :receiver_id
      t.timestamp :timestamp
    end
    add_index(:messages, [:receiver_id, :sender_id], :name => "conversation")
  end

end
