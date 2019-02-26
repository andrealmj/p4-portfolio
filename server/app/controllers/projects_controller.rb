class ProjectsController < ApplicationController
    # before_action :authenticate_user!

    def index
        render :json => {
          "id"=>current_user.id,
          "title"=>current_user.projects.title,
          "description"=>current_user.projects.description,
          "project_link"=>current_user.projects.project_link,
          "img_link"=>current_user.projects.img_link
      }
      end

end