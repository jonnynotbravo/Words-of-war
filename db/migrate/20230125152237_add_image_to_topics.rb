class AddImageToTopics < ActiveRecord::Migration[7.0]
  def change
    add_column :topics, :image, :string
  end
end
