Rails.application.routes.draw do
  get 'account/profile'
  get 'account/settings'
  get 'account/update'

  devise_for :users
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'home#index'

end
