import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class dtn_tb_venda extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_venda: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_cliente: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ds_nota_fiscal: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    tp_pagamento: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    qtd_parcelas: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    bt_presente: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    dt_venda: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'dtn_tb_venda',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_venda" },
        ]
      },
      {
        name: "id_cliente",
        using: "BTREE",
        fields: [
          { name: "id_cliente" },
        ]
      },
    ]
  });
  return dtn_tb_venda;
  }
}
