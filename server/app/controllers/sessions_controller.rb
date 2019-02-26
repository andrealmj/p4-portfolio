class SessionsController < Devise::SessionsController
    respond_to :json
  
    def create
      super
      session[:user_id] = current_user.id
    end
 
    private
  
    def respond_with(resource, _opts = {})
      p resource
      render json: resource
    end
  
    def respond_to_on_destroy
      head :no_content
    end
  end