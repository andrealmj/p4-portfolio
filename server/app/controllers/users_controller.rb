class UsersController < ApplicationController
    before_action :authenticate_user!


    def validate
      render :json => {"success" => true}
    end
  
  end