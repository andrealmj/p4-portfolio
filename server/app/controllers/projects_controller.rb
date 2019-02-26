class ProjectsController < ApplicationController
    before_action :authenticate_user!

    def index
        render :json => {
          "project_data"=>current_user.project
      }
    end

end