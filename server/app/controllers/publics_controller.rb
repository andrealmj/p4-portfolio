class PublicsController < ApplicationController

    def index
      render :json => {
        "about"=>User.find(params[:id]),
        "project_data"=>User.find(params[:id]).project
        }
    end
  
  end