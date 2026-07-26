import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column({ unique: true })
  username?: string;

  @Column({ unique: true })
  email?: string;

  @Column()
  password?: string;

  @Column({ default: true })
  isActive?: boolean;

  @Column({ nullable: true })
  profile?: string;

  @Column({ type: 'varchar', nullable: true })
  googleId: string | undefined | null; // Agrega | null aquí

  @Column({ type: 'varchar', nullable: true }) // <--- Asegúrate de incluir 'type: varchar'
  avatarUrl?: string | null;
}