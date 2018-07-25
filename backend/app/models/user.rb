class User < ApplicationRecord
  rolify
  has_secure_password
  after_create :assign_role

 def assign_role
   add_role(:buyer)
 end
end
