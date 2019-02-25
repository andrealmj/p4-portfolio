class AboutsController < ApplicationController
    # before_action :authenticate_user!

    def index
      p current_user.email
      render :json => {
        "email"=>current_user.email.order(created_at: :desc)
    }
    end

end