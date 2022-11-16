import { MigrationInterface, QueryRunner } from "typeorm";

export class ModuleLevelUser1665092797787 implements MigrationInterface {
    name = 'ModuleLevelUser1665092797787'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`informe_tasacion\` (\`id\` bigint NOT NULL AUTO_INCREMENT COMMENT 'Generar ID', \`created_at\` timestamp(6) NOT NULL COMMENT 'Fecha de creación' DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL COMMENT 'Fecha de Actualización' DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` timestamp(6) NULL COMMENT 'Fecha de Eliminación', \`is_hidden\` tinyint NOT NULL COMMENT 'oculto' DEFAULT 0, \`coor_id\` int NOT NULL, \`cliente_id\` int NOT NULL, \`solicitante_id\` int NOT NULL, \`oficina\` varchar(255) NOT NULL, \`f_inspeccion\` date NOT NULL, \`latitud\` varchar(255) NOT NULL, \`longitud\` varchar(255) NOT NULL, \`direccion_rrpp\` varchar(255) NOT NULL, \`direccion_muni\` varchar(255) NOT NULL, \`direccion_situ\` varchar(255) NOT NULL, \`tipouso_id\` int NOT NULL, \`porc_uso\` int NOT NULL, \`antiguedad\` int NOT NULL, \`obten_antiguedad\` varchar(255) NOT NULL, \`cargas\` tinyint(1) NULL, \`gravamenes\` tinyint(1) NULL, \`moneda_cambio\` decimal(6,2) NULL DEFAULT '0.00', \`funcionario_id\` int NOT NULL, \`propietario_id\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`module_level_user\` DROP FOREIGN KEY \`FK_db4198cbd763e7cf599aeba7497\``);
        await queryRunner.query(`ALTER TABLE \`module_level_user\` DROP FOREIGN KEY \`FK_4c207662ca0550ed9da49eb7d1a\``);
        await queryRunner.query(`ALTER TABLE \`module_level_user\` CHANGE \`module_level_id\` \`module_level_id\` bigint NOT NULL COMMENT 'Generar ID'`);
        await queryRunner.query(`ALTER TABLE \`module_level_user\` CHANGE \`user_id\` \`user_id\` bigint NOT NULL COMMENT 'Generar ID'`);
        await queryRunner.query(`ALTER TABLE \`module_level_user\` ADD CONSTRAINT \`FK_db4198cbd763e7cf599aeba7497\` FOREIGN KEY (\`module_level_id\`) REFERENCES \`module_level\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`module_level_user\` ADD CONSTRAINT \`FK_4c207662ca0550ed9da49eb7d1a\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`module_level_user\` DROP FOREIGN KEY \`FK_4c207662ca0550ed9da49eb7d1a\``);
        await queryRunner.query(`ALTER TABLE \`module_level_user\` DROP FOREIGN KEY \`FK_db4198cbd763e7cf599aeba7497\``);
        await queryRunner.query(`ALTER TABLE \`module_level_user\` CHANGE \`user_id\` \`user_id\` bigint NULL COMMENT 'Generar ID'`);
        await queryRunner.query(`ALTER TABLE \`module_level_user\` CHANGE \`module_level_id\` \`module_level_id\` bigint NULL COMMENT 'Generar ID'`);
        await queryRunner.query(`ALTER TABLE \`module_level_user\` ADD CONSTRAINT \`FK_4c207662ca0550ed9da49eb7d1a\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`module_level_user\` ADD CONSTRAINT \`FK_db4198cbd763e7cf599aeba7497\` FOREIGN KEY (\`module_level_id\`) REFERENCES \`module_level\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`DROP TABLE \`informe_tasacion\``);
    }

}
