/** @ngInject */
class UserAdminEditController {
  public name: string;
  public role: string;
  public uid: string;
  public email: string;
  public countries: string;
  public selectedRole: any = {
    usu: 'Select a Role'
  };
  public showSelect: boolean = false;

  constructor(private dataService: any, private $log: angular.ILogService) {
    // $log.info(user);
  }

}

angular
  .module('app')
  .component('userAdminEdit', {
    templateUrl: 'app/user-admin-edit-page.html',
    bindings: { user: '<' },
    controller: UserAdminEditController
  });
