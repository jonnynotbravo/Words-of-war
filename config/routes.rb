Rails.application.routes.draw do
  resources :posts
  resources :topics
  resources :users
  
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy' 
  get '/me', to: 'users#show'
  post '/posts/:id', to: 'posts#create'
  get '/topics/:id', to: 'topics#show'

end
