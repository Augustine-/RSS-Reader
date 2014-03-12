NewReader::Application.routes.draw do
  root to: "static_pages#root"

  resources :feeds, only: [:index, :create, :show, :new] do
    resources :entries, only: [:index]
  end

  resources :entries, only: [:show]

end
