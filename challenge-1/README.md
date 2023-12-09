# Challenge 1

## Instruções

- Usando Streams para fazer download do arquivo https://coletasweb-files.s3.amazonaws.com/dump+(1).tar.gz e salve-o em /tmp/ (ou pasta correspondente).
- Também usando Streams decompresse esse arquivo GZIP e salve o resultado  em /tmp/ (ou pasta correspondente).
- Use knex para criar um banco de dados SQLite em out/database.sqlite
- Usando Streams leia os dois arquivos .csv que você extraiu e insira-os no banco de dados que você acabou de criar. OBS: Não esqueça da eficiencia de disco, nós sugerimos adicionar em torno de 100 registros por vez (usando batch insert).

OBS: Você deve criar a tabela customers e organizations. Para as colunas use as mesmas do header dos csvs. Você deve usar os tipos correspondentes ao CSV, exemplo: integers devem ser salvos como integer/biginteger no SQL, datas devem ser date, datetime, etc...

## Definições

- Você deve usar TypeScript, com tipagem explicita em toda variavel e função possível.
- Você deve usar Streams sempre que possível.
- Você é livre para utilizar o estilo de escrita e qualquer biblioteca que quiser.