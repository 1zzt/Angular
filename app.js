
angular.module('hello',[])
  .component("phoneList",{
    template:`
      <ul>
        <li ng-repeat="phone in phones">
          <span>{{phone.name}}</span>
          <p>{{phone.desc}}</p>
        </li>
      </ul>
    `,
    controller:function($scope){
      $scope.phones = [{
        name:"iphone11",
        desc:"不会炸"
      },{
        name:"Note7",
        desc:"会炸"
      }]
    }
  })
