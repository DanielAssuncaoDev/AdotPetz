import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _apn_tb_adm from  "./apn_tb_adm.js";
import _apn_tb_adocao from  "./apn_tb_adocao.js";
import _apn_tb_pet from  "./apn_tb_pet.js";
import _apn_tb_user from  "./apn_tb_user.js";
import _dtn_tb_avaliacao from  "./dtn_tb_avaliacao.js";
import _dtn_tb_cliente from  "./dtn_tb_cliente.js";
import _dtn_tb_endereco from  "./dtn_tb_endereco.js";
import _dtn_tb_favoritos from  "./dtn_tb_favoritos.js";
import _dtn_tb_produtos from  "./dtn_tb_produtos.js";
import _dtn_tb_tamanhos from  "./dtn_tb_tamanhos.js";
import _dtn_tb_venda from  "./dtn_tb_venda.js";
import _pcpjp2021_tb_adm from  "./pcpjp2021_tb_adm.js";
import _pcpjp2021_tb_controle_estoque from  "./pcpjp2021_tb_controle_estoque.js";
import _pcpjp2021_tb_produto from  "./pcpjp2021_tb_produto.js";
import _pcpjp2021_tb_usuario from  "./pcpjp2021_tb_usuario.js";
import _tb_chat from  "./tb_chat.js";
import _tb_login from  "./tb_login.js";
import _tb_matricula from  "./tb_matricula.js";
import _tb_produto from  "./tb_produto.js";
import _tb_sala from  "./tb_sala.js";
import _tb_usuario from  "./tb_usuario.js";

export default function initModels(sequelize) {
  var apn_tb_adm = _apn_tb_adm.init(sequelize, DataTypes);
  var apn_tb_adocao = _apn_tb_adocao.init(sequelize, DataTypes);
  var apn_tb_pet = _apn_tb_pet.init(sequelize, DataTypes);
  var apn_tb_user = _apn_tb_user.init(sequelize, DataTypes);
  var dtn_tb_avaliacao = _dtn_tb_avaliacao.init(sequelize, DataTypes);
  var dtn_tb_cliente = _dtn_tb_cliente.init(sequelize, DataTypes);
  var dtn_tb_endereco = _dtn_tb_endereco.init(sequelize, DataTypes);
  var dtn_tb_favoritos = _dtn_tb_favoritos.init(sequelize, DataTypes);
  var dtn_tb_produtos = _dtn_tb_produtos.init(sequelize, DataTypes);
  var dtn_tb_tamanhos = _dtn_tb_tamanhos.init(sequelize, DataTypes);
  var dtn_tb_venda = _dtn_tb_venda.init(sequelize, DataTypes);
  var pcpjp2021_tb_adm = _pcpjp2021_tb_adm.init(sequelize, DataTypes);
  var pcpjp2021_tb_controle_estoque = _pcpjp2021_tb_controle_estoque.init(sequelize, DataTypes);
  var pcpjp2021_tb_produto = _pcpjp2021_tb_produto.init(sequelize, DataTypes);
  var pcpjp2021_tb_usuario = _pcpjp2021_tb_usuario.init(sequelize, DataTypes);
  var tb_chat = _tb_chat.init(sequelize, DataTypes);
  var tb_login = _tb_login.init(sequelize, DataTypes);
  var tb_matricula = _tb_matricula.init(sequelize, DataTypes);
  var tb_produto = _tb_produto.init(sequelize, DataTypes);
  var tb_sala = _tb_sala.init(sequelize, DataTypes);
  var tb_usuario = _tb_usuario.init(sequelize, DataTypes);


  return {
    apn_tb_adm,
    apn_tb_adocao,
    apn_tb_pet,
    apn_tb_user,
    dtn_tb_avaliacao,
    dtn_tb_cliente,
    dtn_tb_endereco,
    dtn_tb_favoritos,
    dtn_tb_produtos,
    dtn_tb_tamanhos,
    dtn_tb_venda,
    pcpjp2021_tb_adm,
    pcpjp2021_tb_controle_estoque,
    pcpjp2021_tb_produto,
    pcpjp2021_tb_usuario,
    tb_chat,
    tb_login,
    tb_matricula,
    tb_produto,
    tb_sala,
    tb_usuario,
  };
}
