class AboutsController < ApplicationController
    # before_action :authenticate_user!

    def index
      p current_user.email
      
      render :json => {
        "id"=>current_user.id,
        "email"=>current_user.email
    }
    end

end