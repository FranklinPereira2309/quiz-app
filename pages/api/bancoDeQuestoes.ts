import QuestaoModel from "../../model/questao";
import RespostaModel from "../../model/resposta";


const questoes: QuestaoModel[] = [
    new QuestaoModel(306, 'Qual bicho transmite a Doença de Chagas?', [
        // new RespostaModel('Abelha', false),
        // new RespostaModel('Barata', false),
        // new RespostaModel('Pulga', false),
        // new RespostaModel('Barbeiro', true)
        RespostaModel.errada('Abelha'),
        RespostaModel.errada('Barata'),
        RespostaModel.errada('Pulga'),
        RespostaModel.certa('Barbeiro')

    ]),
    new QuestaoModel(202, 'Qual fruto é conhecido no Norte e Nordesta como "jerimum"?', [
        
        RespostaModel.errada('Cajú'),
        RespostaModel.errada('Côco'),
        RespostaModel.errada('Chuchu'),
        RespostaModel.certa('Abóbora')

    ]),
    new QuestaoModel(203, 'Qual o coletivo de cães?', [
        
        RespostaModel.errada('Manada'),
        RespostaModel.errada('Alcateia'),
        RespostaModel.errada('Rebanho'),
        RespostaModel.certa('Matilha')

    ]),
    new QuestaoModel(204, 'Qual é o triângulo que tem todos os lados diferentes', [
        
        RespostaModel.errada('Equilátero'),
        RespostaModel.errada('Isóceles'),
        RespostaModel.errada('Trapézio'),
        RespostaModel.certa('Escaleno')

    ])
]

export default questoes
