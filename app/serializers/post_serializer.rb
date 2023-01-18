class PostSerializer < ActiveModel::Serializer

  attributes :id, :content, :stance, :topic_id, :user_id
  
end
