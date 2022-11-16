import { InformeTasacion } from '@app/modules/informe-tasacion/entities/informe-tasacion.entity';
import { SharedEntity } from '@app/modules/shared/entities/shared.entity';
import { TipoUso } from '@app/modules/tipo-uso/entities/tipouso.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity('informe_to_tipouso')
export class InformeTasacionTipoUso extends SharedEntity {
    @ManyToOne(() => TipoUso, (tipouso) => tipouso.informeTasacionConn, { nullable: false })
    public tipoUso: TipoUso;

    @ManyToOne(() => InformeTasacion, (informetasacion) => informetasacion.tipoUsoConn, { nullable: false })
    public informeTasacion: InformeTasacion;

    @Column({ type: 'varchar', nullable: false })
    porcentaje: string;
}
