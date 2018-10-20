## Train

```bat
    .\train\Train.exe train.js
```

> build de testes - comentar `conditionalDefines`

> copy artifacts - renomear `DUnit` e `DUnitX`

## Gulp

### Pré-requisito

Instalar **gulp-cli** para poder rodar o **Gulp** e os pacotes utilizados no script

```powershell
   npm install -g gulp-cli
   npm install gulp gulp-zip run-sequence
```

### Execução

```powershell
   rem Basico
   gulp

   rem Compilação
   gulp compile

   rem Compilação Testes Unitários
   gulp compile-tests

   rem Executar Testes Unitários
   gulp unit-test

   rem Executar Code Coverage
   gulp code-coverage

   rem Watch
   gulp watch
```

## FinalBuilder

```powershell
   & 'C:\Program Files (x86)\FinalBuilder 8\fbcmd.exe' .\FinalBuilder.fbp8
```
