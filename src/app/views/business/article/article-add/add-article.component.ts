import { Component, OnInit } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms'
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular';
import { DataService } from 'src/app/service/data.service';
import { StorageService } from 'src/app/service/storage.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.less']
})
export class AddArticleComponent implements OnInit {

  public Editor = ClassicEditor;//ckeditor
  config = {};//ckeditor配置

  title: string = "";//标题
  content: string = '';//正文
  submitted = false;
  success = false;

  messageForm: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private storageService: StorageService,
    private router: Router,
  ) { }

  ngOnInit() {
    // this.messageForm = this.formBuilder.group({
    //   title: ['', Validators.required], // 标题
    //   content: ['', Validators.required] // 正文
    // });
  }

  onReady(editor) {
    // editor.ui.getEditableElement().parentElement.insertBefore(
    //   editor.ui.view.toolbar.element,
    //   editor.ui.getEditableElement()
    // );
  }

  onChange({editor}: ChangeEvent) {
    // const data = editor.getData();
    // console.log(data);
    // this.content = data;
  }

  onSubmit(value) {
    this.submitted = true;

    // if (this.messageForm.invalid) {
    //     return;
    // }

    // this.dataService.addArticle(this.messageForm.value).subscribe(res => {
    let article = {"title": this.title, "content": this.content, creatorId: this.storageService.getJson("user")["id"]};
    this.dataService.addArticle(article).subscribe(res => {
      alert("添加成功");// todo 改成dialog
      this.router.navigateByUrl("/home/articlelist");
      // todo 错误处理：用户名密码错误、显示验证码等
    });

    this.success = true;
  }

}
