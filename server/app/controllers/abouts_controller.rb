class AboutsController < ApplicationController
    before_action :authenticate_user!

    def index
      render :json => {
        "about"=>current_user
    }
  end

  def create
      current_user.name=params[:name]
      current_user.bio=params[:bio]
      current_user.email=params[:email]
      current_user.phone=params[:phone]
      current_user.username=params[:username]
      current_user.save
  end

  def update
      if update(params)
          redirect_to @abouts
      else
          render 'edit'
      end

      render :json => {"about"=>current_user}
  end

  def destroy
      current_user.destroy

      redirect_to user_path
  end

  private

  def user_params
    params.require(:user).permit(:name, :bio, :email, :phone, :user_ids => [])
  end

end