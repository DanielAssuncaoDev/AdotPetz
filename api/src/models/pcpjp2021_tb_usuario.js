import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class pcpjp2021_tb_usuario extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_usuario: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nm_usuario: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    ds_email: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ds_turma: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    nr_chamada: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ds_senha: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    bt_ativo: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pcpjp2021_tb_usuario',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_usuario" },
        ]
      },
    ]
  });
  return pcpjp2021_tb_usuario;
  }
}
