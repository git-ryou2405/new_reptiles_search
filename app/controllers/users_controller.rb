class UsersController < ApplicationController
  before_action :set_user, only: [:show]
  # require 'active_support'
  # require 'active_support/core_ext'
  # require 'open-uri'
  # require 'net/http'
  # require 'uri'
  # require 'json'

  def show
    debug_log("[d] Users_Ctrl: ac: show")  # log
    @show_option = "user"
    @current_reptiles = Reptile.where(user_id: current_user)
    
    # ショップが持つ、新入荷レプタイル情報を取得
    if @current_reptiles
      @created_at_desc = @current_reptiles.all.order(created_at: "DESC")  # 降順
      debug_log("[d] Users_Ctrl: ac: show @created_at_desc.count=#{@created_at_desc.count}")  # log
      
      if @created_at_desc.count <= 5
        @new_arrivals = @created_at_desc.first(@created_at_desc.count)
      else
        @new_arrivals = @created_at_desc.first(5)
      end
      debug_log("[d] Users_Ctrl: ac: show @new_arrivals=#{@new_arrivals.inspect}")  # log
      debug_log("[d] Users_Ctrl: ac: show @new_arrivals.count=#{@new_arrivals.count}")  # log
    end
    
    # ショップが持つ、タイプ毎のReptile情報を取得
    if params[:current_reptile_type].present?
      @show_option = params[:current_reptile_type]
      @current_reptile_type = @current_reptiles.where(type1: params[:current_reptile_type])
      debug_log("[d] Users_Ctrl: ac: show @current_reptile_type=#{@current_reptile_type}")  # log
      unless @current_reptile_type.present?
        flash.now[:warning] = "「#{params[:current_reptile_type]}」の登録は現在ありません"
      end
    end
    
    # ショップ内で、選択したレプタイルページへ遷移
    if params[:current_select].present?
      @show_option = params[:current_select]
      @current_select_reptile = @current_reptiles.find(params[:current_select])
      debug_log("[d] Users_Ctrl: ac: show @current_select_reptile=#{@current_select_reptile}")  # log
    end
    
    debug_log("[d] Users_Ctrl: ac: show @show_option=#{@show_option}")  # log
  end
  
  # ショップidを取得
  def set_user
    if params[:id]
      debug_log("[d] Users_Ctrl: ac: set_user id=#{params[:id]}")  # log
      @user = User.find(params[:id])
    end
  end
end
