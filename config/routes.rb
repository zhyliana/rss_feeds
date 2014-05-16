NewReader::Application.routes.draw do
  root to: "site#root"

  namespace :api do
    resources :feeds, only: [:index, :create, :show] do
      resources :entries, only: [:index]
    end
  end

  # root to: "feeds#index"
end
