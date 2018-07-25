Rails.application.routes.draw do
  get 'admin/index'
  get 'admin/update'
  resources :users, defaults: {format: :json}
  post 'user_token' => 'user_token#create'
  resources :apartments, defaults: {format: :json}
  get "admin" => "admin#index"
  put "admin/:id" => "admin#update"
  patch "admin/:id" => "admin#update"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "apartments#index"
end
