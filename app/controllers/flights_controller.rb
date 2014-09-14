class FlightsController < ApplicationController
  def destination
    # options = {
    #   :origin        => params[:origin],
    #   :destination   => params[:destination],
    #   :departuredate => params[:departure_date],
    #   :returndate    => params[:return_date]
    # }
    options = {
      :origin        => 'JFK',
      :destination   => 'LAX',
      :departuredate => '2014-10-01',
      :returndate    => '2014-11-05'
    }
    @flights = SabreDevStudio::Flight::Api.low_fare_forecast(options)
    require "pry"; binding.pry
    render json: @flights.to_json
  end

  def rantom_ass_destination
    options = {
      :origin        => params[:origin],
      :departuredate => params[:departure_date],
      :returndate    => params[:return_date],
      :theme         => params[:theme]
    }
    @flights = SabreDevStudio::Flight::Api.destination_air_shop(options)
    render json: @flights.to_json
  end
end
