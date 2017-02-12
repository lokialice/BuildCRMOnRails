class AccountController < ApplicationController
	before_action :authenticate_user!

  	def profile

  	end

  	def settings
  		if user_signed_in?
  			redirect_to edit_user_registration_path
  		end
  	end

end
