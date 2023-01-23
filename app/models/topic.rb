class Topic < ApplicationRecord

    has_many :posts
    has_many :users, through: :posts

    def active_users
        User.all.length
    end
end
