import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit
{

  constructor(private route: Router)
  {}

  ngOnInit()
  {}

  findUser(id: string)
  {
    if(id && id.trim()!='')
      console.log(id);
      this.route.navigate([`user/${id}`]);
  }

}
