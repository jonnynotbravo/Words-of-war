class TopicSerializer < ActiveModel::Serializer
  attributes :id, :title, :active_users, :image
  has_many :posts

end
