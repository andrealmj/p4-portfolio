class ContactsController < ApplicationController
    before_action :authenticate_user!

    def index
        render :json => {
          "contact_data"=>current_user.contact
      }
      end

end