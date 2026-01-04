import { Injectable } from '@nestjs/common';
import { UserDto, UserListDto } from './users.dto';

@Injectable()
export class UsersService {
  private generateRandomName(): string {
    const names = [
      'John Doe',
      'Jane Smith',
      'Bob Johnson',
      'Alice Brown',
      'Charlie Wilson',
    ];
    return names[Math.floor(Math.random() * names.length)];
  }

  private generateRandomEmail(): string {
    const domains = ['example.com', 'test.com', 'demo.com'];
    const names = ['john', 'jane', 'bob', 'alice', 'charlie'];
    const name = names[Math.floor(Math.random() * names.length)];
    const domain = domains[Math.floor(Math.random() * domains.length)];
    return `${name}@${domain}`;
  }

  private generateRandomRole(): string {
    const roles = ['user', 'admin', 'moderator'];
    return roles[Math.floor(Math.random() * roles.length)];
  }

  /**
   * Get a list of random users
   * @returns A list of users with random data
   */
  findAll(): UserListDto {
    // count should be between 1 and 10
    const count = Math.floor(Math.random() * 10) + 1;
    const users: UserDto[] = [];
    for (let i: number = 0; i < count; i++) {
      users.push({
        id: i + 1,
        name: this.generateRandomName(),
        email: this.generateRandomEmail(),
        role: this.generateRandomRole(),
      });
    }

    return {
      users,
      total: users.length,
      page: 1,
      pageSize: 10,
    };
  }

  /**
   * Find a user by ID
   * @param id The user ID to find
   * @returns The user data
   */
  findOne(id: number): UserDto {
    return {
      id,
      name: this.generateRandomName(),
      email: this.generateRandomEmail(),
      role: this.generateRandomRole(),
    };
  }
}
