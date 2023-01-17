class PostUserSerializer < ActiveModel::Serializer
  attributes :id, :username
  has_one :user
end
