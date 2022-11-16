import { InformeTasacionTipoUso } from '@app/modules/informe-tipouso/entities/informe-tipouso.entity';
import { SharedEntity } from '@app/modules/shared/entities/shared.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity('informe_tipouso')
export class TipoUso extends SharedEntity {
    @Column({ type: 'varchar', nullable: false })
    descripcion: string;

    @OneToMany(() => InformeTasacionTipoUso, (itasaciontipouso) => itasaciontipouso.tipoUso)
    public informeTasacionConn!: InformeTasacionTipoUso[];
}
