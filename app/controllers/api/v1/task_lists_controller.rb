class Api::V1::TaskListsController < ApplicationController
  skip_before_action :verify_authenticity_token, if: :json_request?
  respond_to :json

  def index
    @task_lists = TaskList.all
    respond_to { |format|
      format.json { render :json => @task_lists.to_json(:include => :task_cards) }
    }
  end

  def show
    @task_lists = TaskList.find(params[:id])
    render json: @task_lists
  end

  def create
    @task_lists = TaskList.new(task_lists_params)

    if @task_lists.save
      render json: @task_lists, status: :created
    else
      render json: @task_lists.errors, status: :unprocessable_entity
    end
  end

  def update
    @task_lists = TaskList.find(params[:id])
    if @task_lists.update(task_lists_params)
      render json: @task_lists
    else
      render json: @task_lists.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @task_lists = TaskList.find(params[:id])
    @task_lists.destroy
  end

  private

  def task_lists_params
    params.require(:task_list).permit(:name, :is_archived, :board_id)
  end

  def json_request?
    request.format.json?
  end
end
