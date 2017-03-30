/** @ngInject */
class UserAdminController {
  public user: string;
  public users: any[];
  public roles: any[];
  public usersByRole: any[];
  public search: string;
  public searchResults: any[];

  public selectedUser: any = {
    usuario: 'Select a segment'
  };
  public selectedRole: any = {
    usumod: 'Select a Role'
  };

  constructor(private dataService: any, private $log: angular.ILogService) { }

  $onInit() {
    this.getRoles();
    this.loadAllUsers();
    this.search = null;
  }

  loadAllUsers() {
    this.dataService.getUsers().then(response => {
      this.users = response;
    });
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

  // searchUserByIdOrName(event: any) {
  //   let searchTerm = this.search || null;
  //   this.dataService.getUsersBySegRol(event).then(response => {
  //     this.searchResults = response;
  //   });
  // }


}


angular
  .module('app')
  .component('userAdmin', {
    templateUrl: 'app/user-admin-page.html',
    controller: UserAdminController
  });
