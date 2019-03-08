class UsersController < ApplicationController
  before_action :authenticate_user!

    def validate
      render :json => {"success" => true}
    end

    def index
      render :json => {
        "about"=>current_user.find(params[:id]),
        "project_data"=>current_user.find(params[:id]).project.order(created_at: :desc)
      }
    end
  
  end