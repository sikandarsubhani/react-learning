export const login = (email, password, role) => {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const user = users.find(user => user.email === email && user.password === password && user.role === role);
  if (user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
    return user;
  }
  return null;
};

export const signup = (email, password, role) => {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const user = { email, password, role };
  users.push(user);
  localStorage.setItem('users', JSON.stringify(users));
  localStorage.setItem('currentUser', JSON.stringify(user));
  return user;
};

export const logout = () => {
  localStorage.removeItem('currentUser');
};

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('currentUser'));
};
