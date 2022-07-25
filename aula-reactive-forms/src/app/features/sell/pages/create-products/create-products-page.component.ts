import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/shared/services/products.service';
import { Product } from '../../models/product.model';

@Component({
  templateUrl: './create-products-page.component.html',
  styleUrls: ['./create-products-page.component.scss']
})
export class CreateProductPageComponent implements OnInit {

formProduto = new FormGroup({
descricao: new FormControl('', [Validators.required]),
quantidade: new FormControl(1, [Validators.required]),
valorProduto: new FormControl(0, [Validators.required, Validators.min(50)]),
imagemProduto: new FormControl('')

});

  constructor(
    private router: Router,
    private productsService: ProductsService ) { }

  ngOnInit(): void {
    this.formProduto.controls['imagemProduto'].disable();
    this.formProduto.controls['imagemProduto'].setValue('https://www.meioemensagem.com.br/wp-content/uploads/2020/12/pospandemia-cred-istock.jpg')
  }

  onSubmit() {
   const formValue = this.formProduto.value;

   this.productsService.create(formValue);
  }

}
