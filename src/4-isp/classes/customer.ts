import { CustomerOrder, EnterpriseCustomerProtocol, IndividualCustomerProtocol } from "./interfaces/customer-protocol";

//implementando duas interfaces
export class IndividualCustomer implements IndividualCustomerProtocol , CustomerOrder{
  firstName: string;
  lastName: string;
  cpf: string;

  constructor(firstName: string, lastName: string, cpf: string){
    this.firstName = firstName
    this.lastName = lastName
    this.cpf = cpf
  }
  getName(): string {
    return this.firstName + ' ' +this.lastName
  }
  getIDN(): string {
    return this.cpf
  }
}

//implementando duas interfaces
export class EnterpriseCustomer implements EnterpriseCustomerProtocol , CustomerOrder{
  cnpj: string;
  name: string;

  constructor(cnpj: string, name: string){
    this.cnpj = cnpj
    this.name = name
  }
  getName(): string {
    return this.name
  }
  getIDN(): string {
    return this.cnpj
  }

}
