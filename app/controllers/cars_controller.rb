class CarsController < ApplicationController
  before_action :authorize_request, only: [:create, :update, :destroy]
  before_action :set_car, only: [:update, :destroy]

  # GET /cars
  def index
    @cars = Car.all

    render json: @cars
  end

  # GET /cars/1
  def show
    @car = Car.find(params[:id])

    render json: @car, include: :types
  end

  # POST /cars
  def create
    @car = Car.new(car_params)
    @car.user = @current_user

    if @car.save
      render json: @car, status: :created
    else
      render json: @car.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /cars/1
  def update
    if @car.update(car_params)
      render json: @car
    else
      render json: @car.errors, status: :unprocessable_entity
    end
  end

  # DELETE /cars/1
  def destroy
    # @car = @current_user.cars.find(params[:id])
    @car.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_car
      @car = @current_user.cars.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def car_params
      params.require(:car).permit(:make)
    end
end
