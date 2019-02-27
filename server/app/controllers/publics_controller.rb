class UsersController < ApplicationController

    def show
      render :json => {
        "about"=>current_user,
        "project_data"=>current_user.project
        }
    end
  
  end