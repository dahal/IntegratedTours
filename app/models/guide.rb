class Guide < User
  include Gravtastic

  gravtastic d: 'identicon', s: 100
end
