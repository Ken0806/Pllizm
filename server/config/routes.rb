Rails.application.routes.draw do
  namespace 'v1' do
    mount_devise_token_auth_for 'User', at: 'auth', controllers: {
      registrations: 'v1/auth/registrations',
    }
    put '/user/disable_lock_description', to: 'users#disable_lock_description', as: :user_disableLockDescription
    resources :posts, only: [:create, :destroy]
    put '/posts/:id/change_lock', to: 'posts#change_lock', as: :post_changeLock
    post '/follow_requests', to: 'follow_requests#create', as: :follow_requests
    delete '/follow_requests_to_me', to: 'follow_requests#destroy_follow_request_to_me', as: :follow_request_to_me
    resources :followers, only: [:create]
  end
end
