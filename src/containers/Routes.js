import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './Home/HomePage';
import TheoryClassesPage from './TheoryClasses/TheoryClassesPage';
import PracticalClassesPage from './PracticalClasses/PracticalClassesPage';
import StudentsPage from './Students/StudentsPage';
import EnrollmentsPage from './Enrollments/EnrollmentsPage';
import SettingsPage from './Settings/SettingsPage';
import AboutPage from './About/AboutPage';
import PageNotFound from './PageNotFound/PageNotFound';
import TeachersPage from './Teachers/TeachersPage';
import CarsPage from './Cars/CarsPage';

export const menu = [
  { icon: 'home', label: 'Página Inicial', path: '/' },
  { icon: 'class', label: 'Aulas Teóricas', path: '/theory-classes' },
  { icon: 'speed', label: 'Aulas Práticas', path: '/practical-classes' },
  { icon: 'person', label: 'Alunos', path: '/students' },
  { icon: 'school', label: 'Professores', path: '/teachers' },
  { icon: 'directions_car', label: 'Carros', path: '/cars' },
  { icon: 'settings', label: 'Configurações', path: '/settings' },
  { icon: 'info', label: 'Sobre', path: '/about' }
];

const Routes = ({ onCloseMenu }) => (
  <Switch>
    <Route path='/' exact render={() => <HomePage onCloseMenu={onCloseMenu} />} />
    <Route path='/theory-classes' exact component={TheoryClassesPage} />
    <Route path='/practical-classes' exact component={PracticalClassesPage} />
    <Route path='/students' exact component={StudentsPage} />
    <Route path='/teachers' exact component={TeachersPage} />
    <Route path='/cars' exact component={CarsPage} />
    <Route path='/enrollments' exact component={EnrollmentsPage} />
    <Route path='/settings' exact component={SettingsPage} />
    <Route path='/about' exact component={AboutPage} />
    <Route component={PageNotFound} />
  </Switch>
);

export default Routes;
