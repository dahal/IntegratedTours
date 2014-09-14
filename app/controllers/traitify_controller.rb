class TraitifyController < ApplicationController
  def index
    @tratify = Traitify.new
  end
end
