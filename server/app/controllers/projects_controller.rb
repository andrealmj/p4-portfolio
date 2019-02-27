class ProjectsController < ApplicationController
    before_action :authenticate_user!

    def index
        render :json => {
          "project_data"=>current_user.project
      }
    end

    def new
        render :json => {
            "project_data"=>current_user.project
        }
    end

    def create
        current_user.project.create(title: params[:title], description: params[:description], project_link: params[:project_link], img_link: params[:img_link])
    end

    def edit
        
        proj=current_user.project.find(params[:id])
        proj.title=params[:title]
        proj.description=params[:description]
        proj.project_link=params[:project_link]
        proj.img_link=params[:img_link]
        proj.save

        render :json => {"project_data"=>current_user.project}
    end

    def destroy
        current_user.project.destroy(params[:id])
    end

    private

    def project_params
        params.require(:project).permit(:title, :description, :project_link, :img_link, :project_ids => [])
    end
    
end