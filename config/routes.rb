Rails.application.routes.draw do
  devise_for :users

  authenticated :user do
    root 'pages#my_boards', as: :authenticated_root
  end

  root 'pages#home'

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :boards, only: [:index, :show, :create, :update, :destroy]
    end
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
