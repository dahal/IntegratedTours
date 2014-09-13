class GuidesController < ApplicationController
  respond_to :json

  def index
    guides = Guide.near(params[:location])

    respond_with guides
  end
end
