class AboutsController < ApplicationController
    before_action :authenticate_user!

    def index
      render :json => {
        "about"=>current_user
    }
  end

  def new
    render :json => {
    "user id"=>current_user.id,
    "about"=>current_user
  }
  end

  def create
      current_user.create(name: params[:name], bio: params[:bio], email: params[:email], phone: params[:phone])
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