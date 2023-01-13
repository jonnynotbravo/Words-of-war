class TopicsController < ApplicationController

    skip_before_action :authorize, only: [:index]

    def index 
       render json: Topic.all, status: :ok
    end

end
