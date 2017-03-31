class Admin::UsersController < AdminController
  before_action :set_admin_user, only: [:show, :edit, :update, :destroy]
  before_action :get_current_index, only: [:update, :create]

  def index
    @users = User.all
  end

  def show
  end

  def new
    #@page = Admin::Page.new
  end

  def edit
  end

  def create
    # @page = Admin::Page.new(page_params)
    # respond_to do |format|
    #   if @page.save!
    #     if @page.is_index && @index.present?
    #       @index.is_index = false
    #       @index.save!
    #     end
    #     format.html { redirect_to edit_admin_page_url(@page), notice: t('.successfully_created') }
    #   else
    #     format.html { render :new }
    #   end
    # end
  end

  def update
    # respond_to do |format|
    #   if @page.update(page_params)
    #     if @page.is_index && @index.present?
    #       @index.is_index = false
    #       @index.save!
    #     end
    #     format.html { redirect_to admin_pages_url, notice: t('.successfully_updated') }
    #   else
    #     format.html { render :edit }
    #   end
    # end
  end

  def destroy
    respond_to do |format|
      if @user.destroy
        format.html { redirect_to admin_users_url, notice: t('.successfully_destroyed') }
      else
        format.html { redirect_to admin_users_url, notice: t('.error_occured') }
      end
    end
  end

  private
    def set_admin_user
      @user = User.find(params[:id])
    end
  #
  # def get_current_index
  #   @index = Admin::Page.where(is_index: true).first
  # end
  #
  # def page_params
  #   params.require(:admin_page).permit(
  #       :name,
  #       :meta_description,
  #       :page_title,
  #       :is_index
  #   )
  # end
end