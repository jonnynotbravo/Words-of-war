class PostsController < ApplicationController

    skip_before_action :authorize, only: [:index]
    def index 
        render json: Post.all, status: :created
    end
end
