class TopicSerializer < ActiveModel::Serializer
  attributes :id, :title

  has_many :users 

end
