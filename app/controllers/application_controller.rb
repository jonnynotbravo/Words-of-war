class ApplicationController < ActionController::API
    include ActionController::Cookies

    rescue_from ActiveRecord::RecordInvalid, with: :invalid_response
    rescue_from ActiveRecord::RecordNotFound, with: :not_found_response

    before_action :authorize

    private
    def authorize
        return render json: {error: "Unauthorized"}, status: :unauthorized unless session.include? :user_id
    end

    def invalid_response(exception)
        render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
    end

    def not_found_response(exception)
        render json: {errors: {exception.model => "Not found"}}, status: :not_found
    end
end
