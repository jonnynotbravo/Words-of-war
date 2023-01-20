class PostSerializer < ActiveModel::Serializer

  attributes :id, :content, :stance, :topic_id, :user
  belongs_to :user
  
end
