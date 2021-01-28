class Api::V1::BoardsController < ApplicationController
  # before_action :authenticate_user!
  # before_action :set_board, only: [:show, :edit, :update, :destroy]
  skip_before_action :verify_authenticity_token, if: :json_request?
  respond_to :json

  def index
    @user = User.find(params[:user_id])
    @boards = @user.boards
    
    # respond_to { |format|
    #   format.json { render :json => @boards.to_json(:include => :task_lists) }
    # }
    
    render json: @boards
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
    # @board = current_user.boards.build(board_params)
    # if authorized?
    #   respond_to do |format|
    #     if @board.save
    #       format.json { render :show, status: :created, location: api_v1_board_path(@board) }
    #     else
    #       format.json { render json: @board.errors, status: :unprocessable_entity }
    #     end
    #   end
    # else
    #   handle_unauthorized
    # end

    @user = User.find(params[:user_id])
    @board = @user.boards.build(board_params)
    @board.user = @user
    @user.user_boards.build(user_id: @user.id, board_id: @board.id)
    @user.boards.push(@board)

    if @board.save
      render json: @board, status: :created
    else
      render json: @board.errors, status: :unprocessable_entity
    end
  end

  def update
    respond_to do |format|
      if @board.update(board_params)
        format.json { render :show, status: :ok, location: api_v1_board_path(@board) }
      else
        format.json { render json: @board.errors, status: :unprocessable_entity }
      end
    end
    
  end

  def destroy
      @board.destroy
      respond_to do |format|
        format.json { head :no_content }
      end
  end

  private

  def board_params
    params.require(:board).permit(:name)
  end

  def json_request?
    request.format.json?
  end
end
