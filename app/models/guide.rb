class Guide < User
  after_initialize :default_values

  def default_values
    self.role ||= 'Guide'
  end

end
