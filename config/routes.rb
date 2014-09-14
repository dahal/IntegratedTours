Rails.application.routes.draw do
  devise_for :users

  resources :guides, only: [:index], defaults: { format: 'json' }

  root to: 'dashboard#show'
  match '/flights', to: 'flights#destination', via: [:get, :post]
  # post '/flights', to: 'flights#destination'
  get 'flights/random_destination'
end
