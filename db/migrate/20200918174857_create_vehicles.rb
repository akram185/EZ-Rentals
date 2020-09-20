class CreateVehicles < ActiveRecord::Migration[6.0]
  def change
    create_table :vehicles do |t|
      t.string :name
      t.text :description
      t.string :imageURL
      t.integer :price

      t.timestamps
    end
  end
end
