import { Book, Clock, Home, PersonStanding, Rainbow, User } from 'lucide-react';

export const menus = [
  {
    name: 'home',
    icon: Home,
    text: 'Home',
    link: '/home'
  },
  {
    name: 'appointments',
    icon: Book,
    text: 'Appointments',
    link: '/appointments'
  },
  {
    name: 'doctors',
    icon: User,
    text: 'Doctors',
    link: '/doctors'
  },
  {
    name: 'patients',
    icon: PersonStanding,
    text: 'Patients',
    link: '/patients'
  },
  {
    name: 'Disponibilités',
    icon: Clock,
    text: 'Disponibilités',
    link: '/disponibilites'
  },
  {
    name: 'specialities',
    icon: Rainbow,
    text: 'Specialities',
    link: '/specialities'
  },
];