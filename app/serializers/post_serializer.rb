class PostSerializer < ActiveModel::Serializer

  attributes :id, :content, :stance, :user_id, :topic_id
  has_one :user
  
end
