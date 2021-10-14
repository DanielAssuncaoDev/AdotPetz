import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class dtn_tb_produtos extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_produto: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ds_titulo: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    nm_produto: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    ds_descricao: {
      type: DataTypes.STRING(800),
      allowNull: true
    },
    ds_categoria: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    vl_preco: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    id_tamanho: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    img_imagem: {
      type: DataTypes.STRING(500),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'dtn_tb_produtos',
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
        name: "id_tamanho",
        using: "BTREE",
        fields: [
          { name: "id_tamanho" },
        ]
      },
    ]
  });
  return dtn_tb_produtos;
  }
}
