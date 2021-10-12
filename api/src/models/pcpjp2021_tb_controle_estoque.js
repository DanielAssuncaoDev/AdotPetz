import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class pcpjp2021_tb_controle_estoque extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_controle_estoque: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_produto: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    qtd_produtos: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ds_movimentacao: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    vl_lucro: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    dt_movimentacao: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pcpjp2021_tb_controle_estoque',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_controle_estoque" },
        ]
      },
      {
        name: "id_produto",
        using: "BTREE",
        fields: [
          { name: "id_produto" },
        ]
      },
    ]
  });
  return pcpjp2021_tb_controle_estoque;
  }
}
