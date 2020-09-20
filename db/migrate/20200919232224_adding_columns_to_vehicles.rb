class AddingColumnsToVehicles < ActiveRecord::Migration[6.0]
  def change
    add_column :vehicles, :information, :text
  end
end
