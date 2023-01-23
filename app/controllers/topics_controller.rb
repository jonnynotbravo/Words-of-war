class TopicsController < ApplicationController

    skip_before_action :authorize, only: [:index]

    def index 
       render json: Topic.order(created_at: :desc), status: :ok
    end


    def show 
        topic = Topic.find(params[:id])
        render json: topic, status: :ok
    end

end
