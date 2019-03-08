Rails.application.routes.draw do
  devise_for  :users,
              controllers: {
                sessions: 'sessions',
                registrations: 'registrations'
              }
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html


  get '/users/validate' => 'users#validate'
  get '/users/index' => 'users#index'

  # to render the user's portfolio page to the public (wo authenticating the user first)
  get '/users/:id' => 'publics#index'
  get '/users/:id/abouts' => 'publics#index'
  get '/users/:id/contacts' => 'publics#index'
  get '/users/:id/projects' => 'publics#index'

  # ABOUT ME
  get '/abouts' => 'abouts#index', as: 'abouts'
  post '/abouts' => 'abouts#create'

  patch '/abouts/:id' => 'abouts#update'
  delete '/abouts/:id' => 'abouts#destroy'


  # CONTACT INFO
  get '/contacts' => 'contacts#index', as: 'contacts'
  post '/contacts' => 'contacts#create'

  patch '/contacts/:id' => 'contacts#update'
  delete '/contacts/:id' => 'contacts#destroy'


  # PROJECTS
  get '/projects' => 'projects#index'
  post '/projects' => 'projects#create'
  post '/projects/edit' => 'projects#edit'

  patch '/projects/:id' => 'projects#update'
  delete '/projects/:id' => 'projects#destroy'
end
