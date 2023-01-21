class TopicsController < ApplicationController

    skip_before_action :authorize, only: [:index]

    def index 
       render json: Topic.order(created_at: :desc), status: :ok
    end



end
