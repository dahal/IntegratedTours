Rails.application.routes.draw do
  devise_for :users

  resources :guides, only: [:index], defaults: { format: 'json' }

  root to: 'dashboard#show'
  get 'flights/destination'
end
