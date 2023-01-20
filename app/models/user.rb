class User < ApplicationRecord
    
    has_secure_password
    has_many :posts, dependent: :destroy
    has_many :topics, through: :posts

    validates_presence_of :username, :password, :email
    validates :username, uniqueness: true
    validates :email, uniqueness: true

    
end
