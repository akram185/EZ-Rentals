Rails.application.routes.draw do
  resources :vehicles
  resources :types, only: :index
  resources :cars
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :users, only: :create
  get '/cars/:car_id/types/:id', to: 'types#add_type_to_car'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
