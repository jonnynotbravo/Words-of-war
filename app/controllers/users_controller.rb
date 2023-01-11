class UsersController < ApplicationController

    skip_before_action :authorize, only: [:create, :show]
    
    def show
        user = User.find_by(id: session[:user_id])
        render json: user, status: :created
    end

    def index 
        render json: User.all, status: :ok
    end

    def create 
        new_user = User.create!(user_params)
        session[:user_id] = new_user.id
        render json: new_user, status: :created
    end

    private 

    def user_params
        params.permit(:username, :password, :password_confirmation, :email)
    end

end


