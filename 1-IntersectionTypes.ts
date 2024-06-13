interface BusinessPartner {
  name: string;
  credit: number;
}

interface Identity extends Contact {
  id: number;
  name: string;
}

interface Contact {
  email: string;
  phone: string;
}

type EmployeeDetails = Identity;
type Customer = BusinessPartner & Identity;

let e: Identity = {
  id: 15,
  name: "",
  email: "",
  phone: "",
};
