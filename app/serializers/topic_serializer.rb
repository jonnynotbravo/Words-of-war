class TopicSerializer < ActiveModel::Serializer
  attributes :id, :title, :active_users
  has_many :posts

end
