class ContactsMailer < ApplicationMailer
  default :from => 'jjungstprogramming@gmail.com'

  def contact_email(message)
    @message = message
    mail( :to => 'jjungstprogramming@gmail.com',
    :subject => 'Personal Contact Info Filled Out' )
  end
end
