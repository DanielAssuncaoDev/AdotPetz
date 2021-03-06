CREATE TABLE INFOB_APN_TB_ADM(
    ID_ADM			INT PRIMARY KEY AUTO_INCREMENT,
    DS_EMAIL		VARCHAR(100),
    DS_SENHA		VARCHAR(100),
	NM_ADM			VARCHAR(100)
)ENGINE=InnoDB ;


CREATE TABLE INFOB_APN_TB_USER(
    ID_USER			INT PRIMARY KEY AUTO_INCREMENT,
    NM_USER			VARCHAR(100),
    NM_SOBRENOME	VARCHAR(100),
  	DS_EMAIL		VARCHAR(100),
    DS_SENHA		VARCHAR(100)
)ENGINE=InnoDB ;


CREATE TABLE INFOB_APN_TB_PET(
	ID_PET			INT PRIMARY KEY AUTO_INCREMENT,
  	NM_PET			VARCHAR(100),
  	DS_ESPECIE		VARCHAR(100),
  	NM_RACA			VARCHAR(100),
  	DS_SEXO			VARCHAR(100),
  	DS_PESO			VARCHAR(100),
  	DT_NASCIMENTO	DATETIME,
  	DS_PORTE		VARCHAR(100),
  	DS_DESC			VARCHAR(100),
  	IMG_PET1		VARCHAR(1000),
  	IMG_PET2		VARCHAR(1000),
  	IMG_PET3		VARCHAR(1000),
  	BT_CASTRADO		BOOLEAN,
  	BT_VACINA_V10	BOOLEAN,
  	BT_VACINA_V8	BOOLEAN,
	BT_VACINA_V5	BOOLEAN,
  	BT_VACINA_V4	BOOLEAN,
 	BT_VACINA_V3	BOOLEAN,
  	BT_VACINA_ANTIRRABICA	
  					BOOLEAN,
  	DT_CADASTRO		DATETIME,
  	BT_DISPONIVEL	BOOLEAN  
)ENGINE=InnoDB ;


CREATE TABLE INFOB_APN_TB_ADOCAO(
	ID_ADOCAO		INT PRIMARY KEY AUTO_INCREMENT,
  	ID_USER			INT,
  	ID_PET			INT,
  	NM_NOME_COMPLETO VARCHAR(250),
  	DT_NASCIMENTO	DATE,
  	DS_RG			VARCHAR(100),
  	DS_TELEFONE		VARCHAR(100),
  	DS_CEP			VARCHAR(100),
  	DS_ENDERECO		VARCHAR(100),
  	DS_NUMERO		VARCHAR(100),
  	DS_COMPLEMENTO	VARCHAR(100),
  	DS_BAIRRO		VARCHAR(100),
  	DT_SOLICITACAO	DATETIME,
  	BT_ADOCAO_CONCLUIDA
  					BOOLEAN,
  	DT_ADOCAO		DATETIME,
	DS_CIDADE		VARCHAR(100),
  	FOREIGN KEY(ID_USER)REFERENCES INFOB_APN_TB_USER(ID_USER),
  	FOREIGN KEY(ID_PET) REFERENCES INFOB_APN_TB_PET(ID_PET) ON DELETE CASCADE ON UPDATE CASCADE

)ENGINE=InnoDB ;

SELECT * FROM INFOB_APN_TB_ADOCAO;