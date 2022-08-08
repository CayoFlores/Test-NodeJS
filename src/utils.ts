import { EntityMetadata } from 'typeorm'
import { ColumnMetadata } from 'typeorm/metadata/ColumnMetadata'

export function getMetadata(data: EntityMetadata) {
  return {
    titulo: data.targetName,
    requeridos: data.ownColumns
      .filter((column) => !column.isNullable)
      .map((column) => column.propertyAliasName),
    esquiema: data.schema,
    tipo: data.tableMetadataArgs.type,
    propiedades: getProperties(data.ownColumns),
  }
}
export function getProperties(data: ColumnMetadata[]) {
  var resp: { [key: string]: any } = {}
  data.forEach((column) => {
    resp[column.propertyAliasName] = {
      type: column.type,
    }
  })
  return resp
}
