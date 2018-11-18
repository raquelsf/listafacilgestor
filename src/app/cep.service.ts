import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Cep }   from './cep';

@Injectable()
export class CepService {

    public headers = new Headers();
    constructor(private http: Http){
        this.headers.append('Access-Control-Allow-Origin', '*');
        this.headers.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    }

    public buscar(cep: string){
        return this.http.get('https://viacep.com.br/ws/' + cep + '/json', {
            headers: this.headers
          })
        .toPromise()
        .then(response => this.converter(response.json()));
    }

    private converter(cepRes): Cep{
        const cep = new Cep();
        cep.cep = cepRes.cep;
        cep.cidade = cepRes.localidade;
        cep.logradouro = cepRes.logradouro;
        cep.numero = cepRes.cidade;
        cep.complemtento = cepRes.complemtento;
        cep.bairro = cepRes.bairro;
        cep.estado = cepRes.uf;

        return cep;

    }

}



