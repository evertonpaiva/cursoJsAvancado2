class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

        this._negociacoesView = new NegociacoesView($('#negociacoesView'));

        this._listaNegociacoes = new Bind(
            new ListaNegociacoes(),
            this._negociacoesView,
            ['adiciona', 'esvazia']
        );

        this._mensagemView = new MensagemView($('#mensagemView'));

        this._mensagem = new Bind(
            new Mensagem(),
            this._mensagemView,
            ['texto']
        );
    }

    adiciona(event) {

        event.preventDefault();
        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._mensagem.texto = 'Negociação adiconada com sucesso';
        this._limpaFormulario();
    }

    apaga() {

        this._listaNegociacoes.esvazia();
        this._mensagem.texto = 'Negociações apagadas com sucesso';
    }

    _criaNegociacao(){

        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );
    }

    _limpaFormulario(){

        let form = document.querySelector('form');
        form.reset();
        this._inputData.focus();
    }
}
