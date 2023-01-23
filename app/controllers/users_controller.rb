class UsersController < ApplicationController

    skip_before_action :authorize, only: [:create]
    
    def show
        user = User.find_by(id: session[:user_id])
        if user 
            render json: user, status: :created
        else
            render json: {error: "Not Authorized"}, status: :unauthorized
        end
    end

    def index 
        render json: User.all,status: :ok
    end

    def create 
        new_user = User.create!(user_params)
        session[:user_id] = new_user.id
        render json: new_user, status: :created
    end

    def update 
        user = User.find(session[:user_id])
        user.update!(user_params)
        render json: user, status: :accepted

    end

    def destroy 
        user = User.find(session[:user_id])
        user.destroy
        head :no_content
    end


    private 

    def user_params
        params.permit(:email, :username, :password, :password_confirmation)
    end

end
