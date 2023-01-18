class PostsController < ApplicationController

    # skip_before_action :authorize, only: [:index]

    def index 
        render json: Post.all, status: :created
    end

    def create
       
        user = User.find(session[:user_id])
        topic = Topic.find(params[:id])
        new_post = topic.user.posts.create!(post_params)
        render json: new_post, status: :created
       
    end

    private 

    def post_params
        params.permit(:content, :stance)
    end

end
