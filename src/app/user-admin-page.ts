/** @ngInject */
class UserAdminController {
  public user: string;
  public roles: any[];
  public selectedUser: any;
  public selectedRole: any;
  public usersByRole: any[];

  constructor(private dataService: any, private $log: angular.ILogService) { }

  $onInit() {
    this.getRoles();
  }

  loadDataUser(username: string) {
    if (username) {
      this.dataService.getUser('Mark').then(response => {
        this.user = response;
        this.$log.info('returned User from component => ' + angular.toJson(this.user));
      });
    }
  }

  getRoles() {
    this.dataService.getRoles().then(response => {
      this.roles = response;
      this.$log.info('returned Roles from component => ' + angular.toJson(this.roles));
    });
  }

  loadUsersByRole() {
    let role = this.selectedRole.idrol || null;
    this.dataService.getUsersBySegRol(role).then(response => {
      this.usersByRole = response;
      this.$log.info('returned UsersByRole from component => ' + angular.toJson(this.usersByRole));
    });
  }
}


angular
  .module('app')
  .component('userAdmin', {
    templateUrl: 'app/user-admin-page.html',
    controller: UserAdminController
  });
