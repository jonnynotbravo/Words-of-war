Rails.application.routes.draw do
  resources :posts
  resources :topics
  resources :users
  
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy' 
  get '/me', to: 'users#show'
  post '/topics/:id', to: 'posts#create'

end
