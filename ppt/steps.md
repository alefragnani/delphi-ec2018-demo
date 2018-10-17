# Tools

- Delphi Community
- Node.js
- Train
- Yeoman
  - yo Delphi


# Criar Projeto 

## Yeoman para criar o projeto

`yo delphi`

- Application
 - VCL Forms
  - No VCLStyles
   - CalculadoraProject

## Compilar projeto com MS Build

```batch
  cd CalculadoraProject
  rsvars.bat
  msbuild CalculadoraProject.dproj
```

## Yeoman para criar classe 

`yo delphi`

- Unit
 - Class
  Calculadora

## Incorporar unit ao projeto

`bds CalculadoraProject.dpr`

### Incluir a partir de code templates

- Unit Calculadora.pas
- Formulário Form1.pas/dfm
 

## Yeoman para criar projeto de teste

`yo delphi`

- Unit Test
 - DUnitX
  - CalculadoraProjectTests
   - Yes log tests
    - Yes create Test Unit
     - CalculadoraTestObject
      - Yes Setup TearDown methods
       - Yes Sample Test methods

## Compilar projeto com MS Build

```batch
  cd CalculadoraProjectTestsTests
  rsvars.bat
  msbuild CalculadoraProjectTestsTests.dproj
```

## Criar Groupproj

- No delphi, incluir projeto de teste.
- Alterar `search path` para incluir `..\Calculadora\win32\debug`

### Incluir a partir de code templates

- 
```pascal
  private
    FCalculadora: TCalculadora;

```
- Formulário Form1.pas/dfm


## Gulp

criar arquivo `gulpfile.js`
preencher do template

instalar gulp `npm install gulp gulp-util gulp-zip run-sequence`