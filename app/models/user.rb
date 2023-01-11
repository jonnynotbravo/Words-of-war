class User < ApplicationRecord
    
    has_secure_password

    validates_presence_of :username, :password, :email
    validates :username, uniqueness: true
    validates :email, uniqueness: true
end
