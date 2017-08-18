import { Injectable, } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Location } from '@angular/common';

@Injectable()
export class HttpClientService {

    constructor(private http: Http,
                private location: Location) {
    }

    createHeader(token?: string): Headers {
        return new Headers({
            'Content-Type': 'application/json'
        });
    }

    buildOptions(options, headers): any {
        var result = {};
        var ext = {
            // withCredentials: true,
            headers: headers,
        }
        Object.assign(result, ext, options);
        return result;
    }

    get(url, options = {}) {
        var opts = this.buildOptions(options, this.createHeader());
        return this.http.get(url, opts)
            .toPromise()
            .then(response => this.parseResponse(response))
            .catch(this.handleError);
    }

    post(url, data, options = {}) {
        var opts = this.buildOptions(options, this.createHeader());
        return this.http.post(url, data, opts)
            .toPromise()
            .then(response => this.parseResponse(response))
            .catch(this.handleError);
    }

    put(url, data, options = {}) {
        var opts = this.buildOptions(options, this.createHeader());
        return this.http.put(url, data, opts)
            .toPromise()
            .then(response => this.parseResponse(response))
            .catch(this.handleError);
    }

    delete(url,options = {}) {
        var opts = this.buildOptions(options, this.createHeader());
        return this.http.delete(url,opts)
            .toPromise()
            .then(response => this.parseResponse(response))
            .catch(this.handleError);
    }

    postFileUpLoad(url,data,options={}){
        var opts = this.buildOptions(options , new Headers({
            // 'Content-Type': 'multipart/form-data',
        }))
        return this.http.post(url,data,opts)
            .toPromise()
            .then(response => this.parseResponse(response))
            .catch(this.handleError);
    }

    private parseResponse(response:any) {
        try {
            return response.json();
        }
        catch (err) {
            console.error('JSON:parse response body failed', response);
            return null;
        }
    }

    private handleError(error: any): Promise < any > {
        if(error._body){
            let errorObj = JSON.parse(error._body);
            //TODO: 后期应该根据errorCode来判断
            if(errorObj && errorObj.message){
                if(errorObj.message.includes("uuid")){
                    let currentHref = window.location.href;
                    if(!currentHref.endsWith("/login")){
                        window.location.href = "/login";
                    }
                }
            }
        }
        return Promise.reject(error);
    }
}
