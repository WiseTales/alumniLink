import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { Alumni, Student, Event, UserRole } from '../types';
import { mockAlumni, mockStudents, mockEvents } from '../data/mockData';

interface AppState {
  currentUser: { id: string; name: string; role: UserRole } | null;
  alumni: Alumni[];
  students: Student[];
  events: Event[];
  searchQuery: string;
  searchFilters: {
    batch: string;
    department: string;
    location: string;
    profession: string;
  };
}

type AppAction =
  | { type: 'SET_USER'; payload: { id: string; name: string; role: UserRole } | null }
  | { type: 'ADD_ALUMNI'; payload: Alumni[] }
  | { type: 'UPDATE_ALUMNI'; payload: Alumni }
  | { type: 'ADD_STUDENT'; payload: Student }
  | { type: 'UPDATE_STUDENT'; payload: Student }
  | { type: 'ADD_EVENT'; payload: Event }
  | { type: 'SET_SEARCH_QUERY'; payload: string }
  | { type: 'SET_SEARCH_FILTERS'; payload: Partial<AppState['searchFilters']> };

const initialState: AppState = {
  currentUser: null,
  alumni: mockAlumni,
  students: mockStudents,
  events: mockEvents,
  searchQuery: '',
  searchFilters: {
    batch: '',
    department: '',
    location: '',
    profession: ''
  }
};

const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, currentUser: action.payload };
    case 'ADD_ALUMNI':
      return { ...state, alumni: [...state.alumni, ...action.payload] };
    case 'UPDATE_ALUMNI':
      return {
        ...state,
        alumni: state.alumni.map(alum => 
          alum.id === action.payload.id ? action.payload : alum
        )
      };
    case 'ADD_STUDENT':
      return { ...state, students: [...state.students, action.payload] };
    case 'UPDATE_STUDENT':
      return {
        ...state,
        students: state.students.map(student => 
          student.id === action.payload.id ? action.payload : student
        )
      };
    case 'ADD_EVENT':
      return { ...state, events: [...state.events, action.payload] };
    case 'SET_SEARCH_QUERY':
      return { ...state, searchQuery: action.payload };
    case 'SET_SEARCH_FILTERS':
      return {
        ...state,
        searchFilters: { ...state.searchFilters, ...action.payload }
      };
    default:
      return state;
  }
};

const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
} | null>(null);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
};