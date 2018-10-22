# Embarcadero Conference 2018

Projeto exemplo usado na apresentação do **Embarcadero Conference 2018**, sobre **Automação de Build**

## Conteúdo

Composto por um aplicativo básico, juntamente com seus testes unitários. Ambos terão sua compilação/execução automatizada pelo **FinalBuilder**, **Train** e **Gulp**, publicados no **Jenkins**. A publicação no **Jenkins** irá contar com **Relatório de Testes Automatizados** e **Cobertura de Código**.

## Ferramentas de Apoio

* Para a Integração Contínua será utilizado o **Jenkins**
* Para o Teste Unitário será utilizado o **DUnitX**
* Para a Cobertura de Código será utilizado o **Delphi Code Coverage**
* Para a Automação de Compilação serão utilizados:
  * [FinalBuilder](https://www.finalbuilder.com/finalbuilder)
  * [Train](http://remobjects.github.io/train/)
  * [Gulp](https://www.gulpjs.com)

> Para facilitar a construção do exemplo, as ferramentas gratuitas (Jenkins, Train e Delphi Code Coverage) já encontram-se no repositório.

## Configurações

Apenas o **Jenkins** necessita de alguma configuração, e o passo a passo para essa configuração encontra-se documentada no arquivo `comandos.md`.

## Instruções

No arquivo `comandos.md` você encontrará a forma de execução de cada ferramenta de compilação. Algumas delas inclusive com _opções de execução_, que demonstram as possíveis formas com que tais scripts podem ser chamados.

## Licença

[MIT](LICENSE.md) &copy; Alessandro Fragnani 
