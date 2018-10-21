import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Cep }   from './cep';

@Injectable()
export class CepService {

    constructor(private http:Http){}
    public buscar(cep:string){
        return this.http.get('https://viacep.com.br/ws/${cep}/json')
        .toPromise()
        .then(response => this.converter(response.json())) ;
    }

    private converter(cepRes):Cep{
        let cep = new Cep();
        cep.cep = cepRes.cep;
        cep.cidade = cepRes.cidade;

        return cep;
    }

}



  