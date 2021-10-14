import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class pcpjp2021_tb_produto extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_produto: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nm_produto: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    ds_categoria: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    nr_codigo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    qtd_atual: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    qtd_minima: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vl_custo: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    vl_venda: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    dt_cadastro: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pcpjp2021_tb_produto',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_produto" },
        ]
      },
      {
        name: "id_usuario",
        using: "BTREE",
        fields: [
          { name: "id_usuario" },
        ]
      },
    ]
  });
  return pcpjp2021_tb_produto;
  }
}
