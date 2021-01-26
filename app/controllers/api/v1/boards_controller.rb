class Api::V1::BoardsController < ApplicationController
  # before_action :authenticate_user!
  before_action :set_board, only: [:show, :edit, :update, :destroy]

  def index
    @user = User.find(params[:user_id])
    @boards = @user.boards
    respond_to { |format|
      format.json { render :json => @boards.to_json(:include => :task_lists) }
    }
  end

  def show
    # if authorized?
    # respond_to do |format|
    #   format.json { render :show }
    # end
    @user = User.find(params[:user_id])
    @boards = @user.boards
    render json: @boards
    # else
    # handle_unauthorized
    # end
  end

  def create
    @board = current_user.boards.build(board_params)
    if authorized?
      respond_to do |format|
        if @board.save
          format.json { render :show, status: :created, location: api_v1_board_path(@board) }
        else
          format.json { render json: @board.errors, status: :unprocessable_entity }
        end
      end
    else
      handle_unauthorized
    end
  end

  def update
    if authorized?
      respond_to do |format|
        if @board.update(board_params)
          format.json { render :show, status: :ok, location: api_v1_board_path(@board) }
        else
          format.json { render json: @board.errors, status: :unprocessable_entity }
        end
      end
    else
      handle_unauthorized
    end
  end

  def destroy
    if authorized?
      @board.destroy
      respond_to do |format|
        format.json { head :no_content }
      end
    else
      handle_unauthorized
    end
  end

  private

  def set_board
    @board = Board.find(params[:id])
  end

  def authorized?
    @board.uid == current_user
  end

  def handle_unauthorized
    unless authorized?
      respond_to do |format|
        format.json { render :unauthorized, status: 401 }
      end
    end
  end

  def board_params
    params.require(:board).permit(:name, :is_archived)
  end
end
