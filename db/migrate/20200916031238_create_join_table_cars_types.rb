class CreateJoinTableCarsTypes < ActiveRecord::Migration[6.0]
  def change
    create_join_table :cars, :types do |t|
      # t.index [:car_id, :type_id]
      # t.index [:type_id, :car_id]
    end
  end
end
