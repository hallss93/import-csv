import { Organization } from "../interfaces/organization.interface";

class OrganizationMap {
  uuid?: string;
  name?: string;
  website?: string;
  country?: string;
  description?: string;
  founded?: number;
  industry?: string;
  employees?: number;

  constructor(value: any) {
    this.uuid = value["Organization Id"];
    this.name = value["Name"];
    this.website = value.Website;
    this.country = value.Country;
    this.description = value["Description"];
    this.founded = value.Founded;
    this.industry = value.Industry;
    this.employees = value["Number of employees"];
  }

  get_values() {
    return {
      uuid: this.uuid,
      name: this.name,
      website: this.website,
      country: this.country,
      description: this.description,
      founded: this.founded,
      industry: this.industry,
      employees: this.employees,
    } as Organization;
  }
}
export { OrganizationMap };
