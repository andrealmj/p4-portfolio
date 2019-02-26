Rails.application.routes.draw do
  devise_for  :users,
              controllers: {
                sessions: 'sessions',
                registrations: 'registrations'
              }
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/users/validate' => 'users#validate'

  # ABOUT ME
  get '/abouts' => 'abouts#index', as: 'abouts'
  get '/abouts/new' => 'abouts#new', as: 'new_about'
  post '/abouts' => 'abouts#create'

  patch '/abouts/:id' => 'abouts#update'
  delete '/abouts/:id' => 'abouts#destroy'


  # CONTACT INFO
  get '/contacts' => 'contacts#index', as: 'contacts'
  get '/contacts/new' => 'contacts#new', as: 'new_contact'
  post '/contacts' => 'contacts#create'

  patch '/contacts/:id' => 'contacts#update'
  delete '/contacts/:id' => 'contacts#destroy'


  # PROJECTS
  get '/projects' => 'projects#index', as: 'projects'
  get '/projects/new' => 'projects#new', as: 'new_project'
  post '/projects' => 'projects#create'

  patch '/projects/:id' => 'projects#update'
  delete '/projects/:id' => 'projects#destroy'
end
