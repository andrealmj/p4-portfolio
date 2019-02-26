class AboutsController < ApplicationController
    before_action :authenticate_user!

    def index
      render :json => {
        "about"=>current_user
    }
  end

end