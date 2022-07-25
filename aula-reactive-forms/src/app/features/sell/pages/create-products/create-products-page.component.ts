import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  templateUrl: './create-products-page.component.html',
  styleUrls: ['./create-products-page.component.scss']
})
export class CreateProductPageComponent implements OnInit {

formProduto = new FormGroup({
descricao: new FormControl(''),
quantidade: new FormControl(1),
valorProduto: new FormControl(0),
imagemProduto: new FormControl('')

});

  constructor(
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
  }

}
