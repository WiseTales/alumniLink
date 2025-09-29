import { Alumni, Student, Event, Donation } from '../types';

export const mockAlumni: Alumni[] = [
  {
    id: 'ALM001',
    name: 'Sarah Johnson',
    email: 'sarah.johnson@email.com',
    batch: '2018',
    department: 'Computer Science',
    location: 'San Francisco, CA',
    profession: 'Software Engineer at Google',
    profilePicture: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
    bio: 'Passionate software engineer with 5 years of experience in cloud computing.',
    linkedIn: 'linkedin.com/in/sarahjohnson',
    phone: '+1-555-0123'
  },
  {
    id: 'ALM002',
    name: 'Michael Chen',
    email: 'michael.chen@email.com',
    batch: '2016',
    department: 'Business Administration',
    location: 'New York, NY',
    profession: 'Product Manager at Microsoft',
    profilePicture: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
    bio: 'Strategic product manager with expertise in B2B software solutions.',
    linkedIn: 'linkedin.com/in/michaelchen',
    phone: '+1-555-0124'
  },
  {
    id: 'ALM003',
    name: 'Emily Rodriguez',
    email: 'emily.rodriguez@email.com',
    batch: '2020',
    department: 'Marketing',
    location: 'Los Angeles, CA',
    profession: 'Marketing Director at Startup Inc',
    profilePicture: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
    bio: 'Creative marketing professional focused on digital growth strategies.',
    linkedIn: 'linkedin.com/in/emilyrodriguez',
    phone: '+1-555-0125'
  },
  {
    id: 'ALM004',
    name: 'David Thompson',
    email: 'david.thompson@email.com',
    batch: '2015',
    department: 'Mechanical Engineering',
    location: 'Chicago, IL',
    profession: 'Senior Engineer at Tesla',
    profilePicture: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
    bio: 'Mechanical engineer specializing in automotive innovation and sustainable design.',
    linkedIn: 'linkedin.com/in/davidthompson',
    phone: '+1-555-0126'
  }
];

export const mockStudents: Student[] = [
  {
    id: 'STU001',
    name: 'Alex Kumar',
    email: 'alex.kumar@student.edu',
    department: 'Computer Science',
    year: '2024',
    profilePicture: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
    bio: 'Final year CS student interested in machine learning and AI.'
  },
  {
    id: 'STU002',
    name: 'Jessica Park',
    email: 'jessica.park@student.edu',
    department: 'Business Administration',
    year: '2025',
    profilePicture: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
    bio: 'Business student with passion for entrepreneurship and innovation.'
  }
];

export const mockEvents: Event[] = [
  {
    id: 'EVT001',
    title: 'Alumni Networking Workshop',
    description: 'Join us for an interactive workshop on professional networking and career development.',
    date: '2024-02-15',
    organizer: 'Sarah Johnson',
    type: 'workshop',
    location: 'Main Auditorium'
  },
  {
    id: 'EVT002',
    title: 'Class of 2018 Reunion',
    description: 'Celebrate 6 years since graduation with your classmates!',
    date: '2024-03-20',
    organizer: 'Michael Chen',
    type: 'reunion',
    location: 'Campus Grounds'
  },
  {
    id: 'EVT003',
    title: 'Tech Industry Insights Webinar',
    description: 'Learn about the latest trends in technology and career opportunities.',
    date: '2024-02-28',
    organizer: 'Emily Rodriguez',
    type: 'webinar',
    location: 'Online'
  }
];

export const mockDonations: Donation[] = [
  {
    id: 'DON001',
    alumniId: 'ALM001',
    amount: 1000,
    purpose: 'Scholarship Fund',
    date: '2024-01-15',
    status: 'completed'
  },
  {
    id: 'DON002',
    alumniId: 'ALM002',
    amount: 2500,
    purpose: 'Infrastructure',
    date: '2024-01-10',
    status: 'completed'
  }
];