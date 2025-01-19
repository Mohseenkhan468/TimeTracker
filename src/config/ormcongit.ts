import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export default function getOrmConfig(): TypeOrmModuleOptions {
  const dbType = process.env.DB_TYPE || 'mongodb';
  try {
    if (dbType === 'postgres') {
      return {
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'abcd',
        database: 'timetracking',
        synchronize: true,
        autoLoadEntities: true,
      };
    } else if (dbType === 'mongodb') {
      return {
        type: 'mongodb',
        host: 'localhost',
        port: 27017,
        database: 'timetracking',
        useUnifiedTopology: true,
        autoLoadEntities: true,
      };
    } else {
      throw new Error('Unsupported database type');
    }
  } catch (err) {
    console.error('Error in ORM config:', err);
    return null; // or return some default config
  }
}
