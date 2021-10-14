import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class pcpjp2021_tb_adm extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_adm: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ds_codigo: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    ds_senha: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pcpjp2021_tb_adm',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_adm" },
        ]
      },
    ]
  });
  return pcpjp2021_tb_adm;
  }
}
