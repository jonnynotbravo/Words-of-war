Rails.application.routes.draw do
  resources :users
  
  post '/login', to: 'sessions#create'
  post '/logout', to: 'sessions#destroy' 
  get '/me', to: 'users#show'
  
end
