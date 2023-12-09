import { Customer } from "./../interfaces/customer.interface";

class CustomerMap {
  uuid?: string;
  first_name?: string;
  last_name?: string;
  company?: string;
  city?: string;
  country?: string;
  phone1?: string;
  phone2?: string;
  email?: string;
  subscription_date?: string;
  website?: string;
  constructor(value: any) {
    this.uuid = value["Customer Id"];
    this.first_name = value["First Name"];
    this.last_name = value["Last Name"];
    this.company = value.Company;
    this.city = value.City;
    this.country = value.Country;
    this.phone1 = value["Phone 1"];
    this.phone2 = value["Phone 2"];
    this.email = value.Email;
    this.subscription_date = value["Subscription Date"];
    this.website = value.Website;
  }

  get_values() {
    return {
      uuid: this.uuid,
      first_name: this.first_name,
      last_name: this.last_name,
      company: this.company,
      city: this.city,
      phone1: this.phone1,
      phone2: this.phone2,
      email: this.email,
      subscription_date: this.subscription_date,
      website: this.website,
    } as Customer;
  }
}
export { CustomerMap };
