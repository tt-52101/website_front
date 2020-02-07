import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-perm-assign',
  templateUrl: './perm-assign.component.html',
  styleUrls: ['./perm-assign.component.less']
})
export class PermAssignComponent implements OnInit {

  constructor(
    private dataService: DataService
  ) {}

  menuList = [
    // {roleName:"role3", permList: [{key:"perm2", checked: true}, {key:"perm3", checked: true}]}
  ];


  ngOnInit() {
    // todo 1.要能分类；2.要能够分级授权；3.要能够有某些勾选的不能编辑
    let observables = [];
    // 1.读出所有的权限列表
    observables.push(this.dataService.getAllPermissionList());
    // 2.读出各个角色有的权限
    observables.push(this.dataService.getRolePermissionListMap());
    
    forkJoin(observables).subscribe(res => {
      if (res && res.length > 1) {
        let allMenus = [];
        if (res[0]["data"] && res[0]["data"].length > 0) {
          allMenus = res[0]["data"].map(item => {return item.menuName});
        }
        if (res[1]["data"]) {
          // 3.组合得到前端需要的数据
          for(let key in res[1]["data"]) {
            let permList = [];
            for (let i = 0; i < allMenus.length; i++) {
              if (res[1]["data"][key].indexOf(allMenus[i]) >= 0) {
                permList.push({key: allMenus[i], checked: true});
              }
              else {
                permList.push({key: allMenus[i], checked: false});
              }
            }
            let singleMenu = {roleName: key, permList: permList};
            this.menuList.push(singleMenu);
          }
        }
      }
    });
    
  }


  savePermission() {
    // todo 保存权限

    alert("permission saved!");// todo 修改成Dialog对话框
    
  }


}
