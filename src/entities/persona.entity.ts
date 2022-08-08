import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity({ schema: 'public', name: 'persona' })
export class Persona {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id!: number

  @Column({ type: 'varchar' })
  nombre!: string

  @Column({ type: 'varchar', name: 'anio_nacimiento' })
  anioNacimiento!: string

  @Column({ type: 'varchar', name: 'color_ojos' })
  colorOjos!: string

  @Column({ type: 'varchar' })
  genero!: string

  @Column({ type: 'varchar', name: 'color_cabello' })
  colorCabello!: string

  @Column({ type: 'varchar' })
  altura!: string

  @Column({ type: 'varchar' })
  peso!: string

  @Column({ type: 'varchar', name: 'color_piel' })
  colorPiel!: string

  @Column({ type: 'varchar' })
  mundo!: string

  @Column({ type: 'json' })
  peliculas!: JSON

  @Column({ type: 'json' })
  especies!: JSON

  @Column({ type: 'json' })
  naves!: JSON

  @Column({ type: 'json' })
  vehiculos!: JSON

  @Column({ type: 'varchar' })
  url!: string

  @CreateDateColumn({ name: 'creado_en' })
  creadoEn!: Date

  @UpdateDateColumn({ name: 'actualizado_en' })
  actualizadoEn!: Date
}
