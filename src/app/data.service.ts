
'use strict';

class DataService {
    public mockDataUrl: string = 'app/data/data.json';
    private data: any;

    constructor(private $http: angular.IHttpService, private $log: angular.ILogService) { }

    public getUser(username: string) {
        return this.$http
            .get(this.mockDataUrl)
            .then(response => {
                this.data = response.data;
                // this.$log.info('Returned from service => ' + angular.toJson(response.data));
                return this.data.filter(user => {
                    return user.nombreUsuario === username;
                });
            }).catch(err => {
                return err;
            });
    }

    public getRoles() {
        return this.$http
            .get(this.mockDataUrl)
            .then(response => {
                this.data = response.data;
                return this.data.map(user => {
                    return user.rol;
                });
            }).catch(err => {
                return err;
            });
    }

    public getUsersBySegRol(roleId: any) {
        return this.$http
            .get(this.mockDataUrl)
            .then(response => {
                this.data = response.data;
                return this.data.filter(user => {
                    return user.rol.idrol === roleId;
                });
                // this.$log.info('Returned from service => ' + angular.toJson(this.data));
            }).catch(err => {
                return err;
            });
    }
}

angular
    .module('app')
    .service('dataService', DataService);
