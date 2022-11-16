import { InformeTasacionTipoUso } from '@app/modules/informe-tipouso/entities/informe-tipouso.entity';
import { SharedEntity } from '@app/modules/shared/entities/shared.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity('informe_tasacion')
export class InformeTasacion extends SharedEntity {
    @Column({ type: 'int', nullable: false, name: 'coor_id' })
    coor_id: number;

    @Column({ type: 'int', nullable: false, name: 'cliente_id' })
    cliente_id: number;

    @Column({ type: 'int', nullable: false, name: 'solicitante_id' })
    solicitante_id: number;

    @Column({ type: 'varchar', nullable: false, name: 'oficina' })
    oficina: string;

    @Column({ type: 'date', nullable: false, name: 'f_inspeccion' })
    fecha_inspeccion: Date;

    @Column({ type: 'varchar', nullable: false })
    latitud: string;

    @Column({ type: 'varchar', nullable: false })
    longitud: string;

    @Column({ type: 'varchar', nullable: false })
    direccion_rrpp: string;

    @Column({ type: 'varchar', nullable: false })
    direccion_muni: string;

    @Column({ type: 'varchar', nullable: false })
    direccion_situ: string;

    @OneToMany(() => InformeTasacionTipoUso, (itasaciontipouso) => itasaciontipouso.informeTasacion)
    public tipoUsoConn: InformeTasacionTipoUso[];

    @Column({ type: 'int', nullable: false })
    porc_uso: number;

    @Column({ type: 'int', nullable: false })
    antiguedad: number;

    @Column({ type: 'varchar', nullable: false })
    obten_antiguedad: string;

    @Column({ type: 'bool', width: 1, nullable: true })
    cargas: boolean;

    @Column({ type: 'bool', width: 1, nullable: true })
    gravamenes: boolean;

    @Column({ type: 'decimal', precision: 6, scale: 2, default: 0, nullable: true })
    moneda_cambio: number;

    //CONTACTO TRAER DE COORDINACION DE LA TABLA CONTACTO
    @Column({ type: 'int', nullable: false, name: 'funcionario_id' })
    funcionario_id: number;

    @Column({ type: 'int', nullable: false, name: 'propietario_id' })
    propietario_id: number;
}
