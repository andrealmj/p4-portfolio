class UsersController < ApplicationController

    def index
      render :json => {
        "about"=>user.find(params[:id]),
        "project_data"=>user.find(params[:id]).project
        }
    end
  
  end