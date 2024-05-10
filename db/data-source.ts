import { Employee } from 'src/users/entities/emoloyee.entity';
import { User } from 'src/users/entities/user.entity';
import { DataSource, DataSourceOptions, ExplainVerbosity } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  password: 'mypassword',
  username: 'myuser',
  entities: [User, Employee],
  database: 'postgres',
  logging: true,
  migrations: ['dist/db/migrations/*.js'],
};
const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
