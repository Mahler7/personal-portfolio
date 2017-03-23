class PagesController < ApplicationController
  def home
    @message = Message.new
  end
  def create
    @message = Message.new(message_params)
    if @message.save
      respond_to do |format|
        format.html
        format.js {render "create"}
      end
    else
      render '/'
      respond_to do |format|
        format.html
        format.js {render "messageErrors.js.erb"}
      end
    end
  end

  private

    def message_params
      params.require(:message).permit(
        :name,
        :email,
        :subject,
        :message
      )
    end
end
