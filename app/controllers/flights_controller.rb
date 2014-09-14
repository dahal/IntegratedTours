class FlightsController < ApplicationController
  def destination
    # options = {
    #   :origin        => params[:origin],
    #   :destination   => params[:destination],
    #   :departuredate => params[:departure_date],
    #   :returndate    => params[:return_date]
    # }
    options = {:query=>{
      :origin        => 'JFK',
      :destination   => 'LAX',
      :departuredate => '2014-10-01',
      :returndate    => '2014-10-15'
      } 
    }
    @flights = SabreDevStudio::Base.get('/v1/shop/flights', options)
    render json: @flights.to_json
  end

  def random_destination
    # options = {
    #   :origin        => params[:origin],
    #   :departuredate => params[:departure_date],
    #   :returndate    => params[:return_date],
    #   :theme         => params[:theme]
    # }

    options = {:query=>{
      :origin        => 'JFK',
      :departuredate => '2014-10-01',
      :returndate    => '2014-10-15',
      :theme         => 'BEACH'
      } 
    }
    @flights = SabreDevStudio::Base.get('/v1/shop/flights/fares',options)
    render json: @flights.to_json
  end
end