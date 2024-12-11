import {User} from '@/types/user';


export const mockUsers: User[] = [
  {
        id: '1',
        firstname: 'John',
        lastname: 'Doe',
        gender:"male",
        phoneNumber: '123456789',
        email: 'johndoe@gmail.com',
        username: 'johndoe',
        password:'123',
        dateOfBirth:'12/12/1990',
        isActive: true,
        lastLogin: new Date(),
  }
]