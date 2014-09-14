class FlightsController < ApplicationController
  def destination
    options = {:query=>{
      :origin        => params[:origin],
      :destination   => params[:destination],
      :departuredate => params[:departuredate],
      :returndate    => params[:returndate]
    }
    }
    if options[:query][:origin] != nil

      @flights = SabreDevStudio::Base.get('/v1/shop/flights', options)["PricedItineraries"]
      # @flights = @flights['PricedItineraries']
    end
    # render json: @flights.to_json
    # require "pry"; binding.pry
 
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