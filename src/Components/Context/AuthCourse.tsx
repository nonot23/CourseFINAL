import React,{ createContext, useState, useEffect } from 'react'

interface AuthContextType {
    isAuthenticated: boolean;
    login: (email: string, password: string) => boolean;
    logout: () => void;
    signup: (email: string, password: string) => void;
    user: string | null;
    error: string | null;
    isLoading: boolean;

}

  interface User {
    email: string;
    password: string;
  }

  

export const AuthContext = createContext<AuthContextType>({
    isAuthenticated: false,
    login: () => false,
    logout: () => {},
    signup: () => {},
    user: null,
    error: null, 
    isLoading: true,
});

export const AuthCourse: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loginUser = localStorage.getItem('loggedInUser');
    if (loginUser) {
      setIsAuthenticated(true);
      setUser(loginUser);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
  console.log("auth status:", isAuthenticated);
}, [isAuthenticated]);


  const login  = (email: string, password: string): boolean => {
    const usersString = localStorage.getItem('users');
    const users: User[] = usersString ? JSON.parse(usersString) : [];
    const found = users.find((user: User) => user.email === email && user.password === password);
    if (found) {
      setIsAuthenticated(true);
      setUser(email);
      localStorage.setItem('loggedInUser', email);
      console.log("Login successful for user:", email);
      setError(null);
      return true;
      
    } else {
      setError('Invalid email or password');
      return false;
    }
  }
  
  const signup = (email: string, password: string) => {
    console.log("signup called with:", email, password);
    const usersString = localStorage.getItem('users');
    const users: User[] = usersString ? JSON.parse(usersString) : [];
    const userfind = users.find((user: User) => user.email === email);
    if (userfind) {
      setError('User already exists');
      return false;
    } else {
      const newUser: User = { email, password };
      const updatedUsers = [...users, newUser];
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      localStorage.setItem('loggedInUser', email);
      setIsAuthenticated(true);
      setUser(email);
      setError(null);
      return true;
    }
  }
  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem('loggedInUser');
    alert("ออกจากระบบเรียบร้อยแล้ว");
  }
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, signup, user, error, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}
export const useAuth = () => React.useContext(AuthContext);

