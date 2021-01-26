class Api::V1::UsersController < ApplicationController
    skip_before_action :verify_authenticity_token, if: :json_request?
    respond_to :json
  
    def index
      @users = User.all
      respond_to { |format|
        format.json { render :json => @users.to_json(:include => :boards) }
      }
    end
  
    def show
      @users = User.find(params[:id])
      render json: @users
    end
  
    def create
      @users = User.new(users_params)
  
      if @users.save
        render json: @users, status: :created
      else
        render json: @users.errors, status: :unprocessable_entity
      end
    end
  
    def update
      @users = User.find(params[:id])
      if @users.update(users_params)
        render json: @users
      else
        render json: @users.errors, status: :unprocessable_entity
      end
    end
  
    def destroy
      @users = User.find(params[:id])
      @users.destroy
    end

    def searchUserForEmail
      @user = User.where(email: params[:email])
      render json: @user
    end
  
    private
  
    def users_params
      params.require(:user).permit(:name, :is_archived, :board_id, :googleId)
    end
  
    def json_request?
      request.format.json?
    end
  end
  