class UserMailer < ApplicationMailer
  def welcome(user, password)
    binding.pry
    @user = user
    @password = password
    mail(
        to: @user.email,
        from: "admin@test.com",
        subject: "Welcome #{@user.first_name}"
    )
  end
end