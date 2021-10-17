import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _infob_apn_tb_adm from  "./infob_apn_tb_adm.js";
import _infob_apn_tb_adocao from  "./infob_apn_tb_adocao.js";
import _infob_apn_tb_pet from  "./infob_apn_tb_pet.js";
import _infob_apn_tb_user from  "./infob_apn_tb_user.js";

export default function initModels(sequelize) {
  var infob_apn_tb_adm = _infob_apn_tb_adm.init(sequelize, DataTypes);
  var infob_apn_tb_adocao = _infob_apn_tb_adocao.init(sequelize, DataTypes);
  var infob_apn_tb_pet = _infob_apn_tb_pet.init(sequelize, DataTypes);
  var infob_apn_tb_user = _infob_apn_tb_user.init(sequelize, DataTypes);
  

  return {
    
    infob_apn_tb_adm,
    infob_apn_tb_adocao,
    infob_apn_tb_pet,
    infob_apn_tb_user,
  };
}
