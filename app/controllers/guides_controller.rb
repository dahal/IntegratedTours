class GuidesController < ApplicationController
  def index
    guides = Guide.near(params[:location])

    render json: guides.to_json(methods: [:gravatar_url])
  end
end
