
# Caso de Uso - AdotPets



Caso de uso ADM
---

<img src="https://i.imgur.com/vrgpXCa.png" />

<br>


### LOGIN ADM -- Will

**DESCRIÇÃO**: Essa funcionalidade permite que os ADMs entrem em suas contas admistrativas.

 **REGRAS:** 
 * As informações do ADM devem constar no Banco de Dados para eles poderem acessar a página inicial do ADM.

 **EVENTOS:** Mouse click.

---

<br>


### ADICIONAR CADASTRO DO PET -- Will


**DESCRIÇÃO:** Esta funcionalidade permite que o ADM do site cadastre um animal para ser adotado. Nesse cadastro irão ter as informações do animal (idade, porte, personalidade, fotos, sexo e saúde).

**REGRAS:**

* O cadastro do animal deverá ter no máximo três fotos do mesmo.
*  Nenhum campo pode deixar de ser preench1ido.
* As vacinas devem estar de acordo com a espécie. 
    * (V8, V10) - Cães
    * (V5, V4, V3) - Gatos
    * (Antirrabica) - Ambos
    * (Castrado) - Ambos

* A descrição do animal deve ter no máximo 250 caracteres.
* O campo **dt_cadastro** (tb_pet), deve ser preenchido automaticamente com a data e hora atual do cadastro do animal.
* O campo **bt_disponivel**(tb_pet), deve iniciar como **true**

<br>

**EVENTOS:** Mouse click e Upload de imagens.

---

<br>

<<<<<<< HEAD
### EXCLUIR PET -- Erik 
=======
### EXCLUIR PET -- Erik okk
>>>>>>> f0e181f43afa46b37873d14247533d10324402e2

 **DESCRIÇÃO:** Essa funcionalidade permite que o ADM exclua o cadastro do animal desejado.

 **REGRAS:**
* Deve ser enviado um PopUp para o ADM perguntando se ele realmente deseja excluir o cadastro.
* Deve ser excluído APENAS o cadastro do animal selecionado.

 **EVENTO:** Mouse click.
	
<br>


---

### EDITAR PET -- Pedro

 **DESCRIÇÃO:** Essa funcionalide permite que o ADM altere as informações de cadastro do animal.

 **REGRAS:** 
 * O ADM deve ser encaminhado para a página de **Cadastro do Animal**, porém com as respectivas infomações do animal. 
* O cadastro do animal deverá ter no máximo três fotos do mesmo.
*  Nenhum campo pode deixar de ser preenchido.
* As vacinas devem estar de acordo com a espécie. 
    * (V8, V10) - Cães
    * (V5, V4, V3) - Gatos
    * (Antirrabica) - Ambos

* A descrição do animal deve ter no máximo 250 caracteres.
* O campo **dt_cadastro** (tb_pet), não deve ser alterado.
* O campo **bl_disponivel**(tb_pet), deve iniciar como **true**
* Deve ser alterado APENAS o cadastro do animal selecionado


 **EVENTOS:** Upload de imagens e Mouse click.

<br>

---

 ### ALTERAR SITUAÇÃO DE ADOÇÃO -- Lele

 **DESCRIÇÃO:**  Esta funcionalidade permite que o ADM aceite ou rejeite a solicitação de adoção do usuário.

 **REGRAS:**
* Caso a solicitação seja aceita.
    * O campo **bl_adocao_concluida**(tb_adocao), deve ser alterado para, **true**.
    * O campo **dt_adocao**(tb_adocao), deve conter a data e hora de quando a adoção foi concluida.
    * O campo **bl_disponivel**(tb_pet), deve ser alterado para false.

* Caso a solicitação seja negada.
    * O registro deve ser deletado.


* Deve ser enviado um PopUp para o ADM perguntando se ele realmente deseja aceitar ou rejeitar a adoção do animal.

**EVENTOS**: Mouse click

<br>

---

### LISTAR SOLICITAÇÕES DE ADOÇÃO -- Lele

**DESCRIÇÃO:** Deve ser listados todas as solicitações de adoção para o ADM.

**REGRAS:** 
* Deve conter os campos:  **ID_ADOCAO**, **NM_NOME_COMPLETO**, **NM_PET (TB_PET)**, **DS_TELEFONE**, **DT_SOLICITACAO_ADOCAO**.
* Deve ser retornado todos os registros da **tb_adocao** onde o campo **bl_adocao_concluida** for igual a **NULL**

* O ADM pode filtrar por:

    * ID_ADOCAO
    * NM_NOME_COMPLETO
    * NM_PET
    * DS_TELEFONE
    * DT_SOLICITACAO_ADOCAO

---


### LISTAR ANIMAIS CADASTRADOS -- Erik

**DESCRIÇÂO:** Deve ser listado todos os animais cadastrados no sistema.

**REGRAS:** 
* Deve conter os campos: **ID_PET**, **NM_PET**, **DS_ESPECIE**, **DT_CADASTRO**, **BL_DISPONIVEL**.
* Ao clicar em 'Mais informações', o ADM deve ser encaminhado para a página, 'informações do pet', referente ao animal selecionado. 

**EVENTOS:** Mouse Click


---


## Caso de Uso Usuário 

<img src="https://i.imgur.com/Y1z4rnS.png" />

<br>


### CADASTRAR-SE -- Daniel
 
 **DESCRIÇÃO:** Esta funcionalidade permite que o usuario insira suas informações (E-mail, Senha, Nome) para criar um cadastro no site.
 
 **REGRAS:** 
	
* O e-mail do usuario deve ser válido.
* A senha do usuario deve conter no mínimo seis caracteres entre eles dois numéricos. 
* A senha do usuário deve ser criptografada no formato hash, **SHA256** em formato String. 
* Todos os campos devem ser preenchidos.

 **EVENTOS:** Mouse click;

---

### LOGIN -- Daniel

 **DESCRIÇÃO:** Essa funcionalidade permite que os usuario entre em sua conta.

 **REGRAS:** 
* A senha do usuário deve ser cryptografada no formato hash, **SHA256** em formato String antes de fazer a busca no Banco de Dados 
* As informações de login do usuario devem constar no Banco de Dados.


 **EVENTOS:** Mouse click.

---

### PROCURAR ANIMAL -- Daniel

 **DESCRIÇÃO:** Esta funcionalidade permite que o usuario procure animais com base nos filtros selecionados.

 **REGRAS:** 
 * Deve retornar apenas os animais onde o campo **bl_disponivel**(tb_pet), for igual a **true**.
 * Deve ser ordenado pelo campo **dt_cadastro**(tb_pet), de forma crescente.
 * Todos os animais listados devem estar de acordo com os filtros do usuário, caso o usuário não insira nenhum filtro, o sistema deve retornar todos os ultimos pets cadastrados.

 **EVENTOS:** Mouse click



---


### SOLICITAR ADOÇÃO -- Pedro

 **DESCRIÇÂO:** Esta funcionalidade permite que o usuario solicite a adoção do animal

 **REGRAS:** 
* O usuario deve estar logado no site. 
* O usuario deve ser encaminhado para a tela de formulário para concluir o pedido de adoção.
* O usuario deve ser maior de dezoito anos.
* O CEP informado deve ser válido.
* O numero de telefone deve ser válido.
 
 **EVENTO:** Mouse click.

---

### LISTAR ANIMAIS SOLICITADOS -- Chris

**DESCRIÇÃO:** Esta funcionalidade lista todas as solicitações de adoção do usuário.

**REGRAS:**
* Deve ser retornado apenas as solicitações do usuário cadastrado.
* Deve retornar os campos **IMG_ANIMAL1**, **NM_PET**, **DS_ESPECIE**, **DS_SEXO**, **ID_CADASTRO_PET**.

**EVENTO:** Mouse Click.

---

### CANCELAR PEDIDO DE ADOÇÃO -- Chris


 **DESCRIÇÂO:** Esta funcionalidade permite que o usuario cancele a solicitação de adoção do animal.

 **REGRAS:** 
 * Deve ser enviado para o usuario uma mensagem perguntando se ele realmente deseja cancelar o pedido de adoçao.
 * Deve ser excluido apenas a solicitação selecionada.
 **EVENTO:** Mouse click



