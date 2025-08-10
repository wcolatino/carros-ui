import { Component, inject } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MdbFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  usuario!: string;
  senha!: string;

  router = inject(Router); //Equivalente ao @Autowired

  logar(){
    if(this.usuario == 'admin' && this.senha){
      this.router.navigate(['admin/carros'])
    } else {
      alert('Usuário ou senha incoretos!');
    }
  }

}
