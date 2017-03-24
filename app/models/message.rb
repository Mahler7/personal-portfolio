class Message < ApplicationRecord
  validates :subject, :name, :email, :message, presence: true
end
