class Tourist < User
  after_initialize :default_values

  def default_values
    self.role ||= 'Tourist'
  end

end
