class Api::V1::TaskCardsController < ApplicationController
  skip_before_action :verify_authenticity_token, if: :json_request?
  respond_to :json

  def index
    @task_cards = TaskCard.all
    render json: @task_cards
  end

  def show
    @task_cards = TaskCard.find(params[:id])
    render json: @task_cards
  end

  def create
    @task_cards = TaskCard.new(task_cards_params)

    if @task_cards.save
      render json: @task_cards, status: :created
    else
      render json: @task_cards.errors, status: :unprocessable_entity
    end
  end

  def update
    @task_cards = TaskCard.find(params[:id])
    if @task_cards.update(task_cards_params)
      render json: @task_cards
    else
      render json: @task_cards.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @task_cards = TaskCard.find(params[:id])
    @task_cards.destroy
  end

  private

  def task_cards_params
    params.require(:task_card).permit(:name, :due_date, :is_archived, :task_list_id)
  end

  def json_request?
    request.format.json?
  end

end
