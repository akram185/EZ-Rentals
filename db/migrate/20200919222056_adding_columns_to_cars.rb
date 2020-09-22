class AddingColumnsToCars < ActiveRecord::Migration[6.0]
  def change
    add_column :cars, :description, :text
    add_column :cars, :imageURL, :string
    add_column :cars, :price, :integer

  end
end
