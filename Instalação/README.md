

# Como executar:

### Faça download do zip:

Pelo [Github](https://github.com/PhatomFatec/PI_3Semestre).

### Faça download das seguintes ferramentas:

Instalação do [Java](https://docs.oracle.com/en/java/javase/11/install/installation-jdk-microsoft-windows-platforms.html#GUID-A7E27B90-A28D-4237-9383-A58B416071CA), [Eclipse](https://www.eclipse.org/downloads/packages/installer) e [PostgreSQL](https://www.postgresql.org/download/windows/).

## Como executar:

1. Após o download extraia o arquivo ZIP

2. Abra o Eclipse 

4.  Clique em File > Import

5. Após clicar import, selecione a opção Existing Maven Projects

   <img src="https://media.discordapp.net/attachments/913534866686103573/965008018943131729/maven_project.png" width="450" height="300"/>

6. Selecione a pasta do projeto e clique em Finish

7.  Aguarde o import ser feito. 

8. Abra o arquivo **application.properties**

9.  Altere os parâmetros:

```
(2) - Login do postgreSQL.
(3) - Senha do postgreSQL.
```

<img src="https://media.discordapp.net/attachments/913534866686103573/965011700296319036/banco.png" width="500"/>

**Obs:** Os demais itens não exigem alteração. 

11. Após salvar as alterações feitas clique com o segundo botão sobre a pasta do projeto.

12. Selecione a opção Run As > Run Configurations. 

    <img src="https://media.discordapp.net/attachments/913534866686103573/965013865815494706/Run_as.png" width="500"/>

13. Já em Run Configurations clique em "Run"

    <img src="https://media.discordapp.net/attachments/913534866686103573/965015502252548126/run_config.png" width="500"/>

14. Aguarde a execução do QUARKUS.

15. Após realizar os passos acima as telas de carrinho e compras podem ser acessadas diretamente por esses links:

    http://localhost:8080/

    http://localhost:8080/cart/cart.html 
