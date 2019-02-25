class ContactsController < ApplicationController
    # before_action :authenticate_user!

    def index
        render :json => {
          "id"=>current_user.id,
          "email"=>current_user.email
      }
      end

end