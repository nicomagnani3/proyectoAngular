import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  public ModificarForm: FormGroup;
  loading = false;
  submitted = false;  
  error = '';
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.ModificarForm = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      apellido: ['', Validators.required],
      dni: ['', Validators.required],
      telefono: ['', Validators.required]
     });    
  }
  get f() { return this.ModificarForm.controls; }


  modificar(){
    this.submitted = true;
    if (this.ModificarForm.invalid) {
      return;
  } 
  console.log(this.ModificarForm)
  this.loading = true;
  }
}
